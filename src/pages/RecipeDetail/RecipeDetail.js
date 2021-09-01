import React, { useState, useEffect } from "react";
import { Rating, RatingView } from "react-simple-star-rating";
import TimerIcon from "@material-ui/icons/Timer";
import { useHistory, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./RecipeDetail.css";
import "../../App.css";

const url =
  "https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583749915/DCUK/Content/iStock-879690980.jpg";

function RecipeDetail({ img = url, match }) {
  const indexTest = match.params.id;

  const [state, setState] = useState({});

  function fetchFromLocal() {
    const data = JSON.parse(localStorage.getItem("detail"));
    var result = data.filter((obj) => {
      return obj.id === indexTest;
    })[0];

    console.log(result.ingredients);
    const newState = {
      id: result.id,
      name: result.name,
      description: result.description,
      duration: result.duration,
      info: result.info,
      ingredients: [...result.ingredients],
      score: result.score,
    };

    setState({ ...newState });
  }

  useEffect(() => {
    fetchFromLocal();
  }, []);

  let history = useHistory();
  return (
    <div className="detail">
      {state.id && (
        <>
          <div className="detail__header">
            <img className="detail__img" src={img} alt="" />
            <ArrowBackIcon
              className="detail__arrow"
              color="secondary"
              onClick={() => history.goBack()}
              style={{ fill: "white" }}
            />
            <h1 className={"detail__name"}>{state.name}</h1>
          </div>
          <div className="detail__data">
            <RatingView
              emptyColor={"#ff00ff"}
              ratingValue={state.score}
              fillColor={"#ffffff"}
            />
            <div>
              <TimerIcon style={{ fill: "white" }} />
              <h1 className="detail__time">{state.duration} min.</h1>
            </div>
          </div>
          <div className="detail__text">
            <p>{state.info}</p>

            <div>
              <h1 className="headline">Ingredience</h1>
              {state.ingredients.map((e) => {
                return <p>* {e}</p>;
              })}
            </div>

            <div>
              <h1 className="headline">Příprava jídla</h1>
              <p>{state.description}</p>
            </div>
          </div>

          <div className="footer">
            <h1>Ohodnoť tento recept </h1>
            <Rating fillColor="white" size="60px" />
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
