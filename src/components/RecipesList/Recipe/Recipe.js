import React from "react";
import TimerIcon from "@material-ui/icons/Timer";
import { Rating, RatingView } from "react-simple-star-rating";
import { useHistory, Link } from "react-router-dom";

import "./Recipe.css";
import "../../../App.css";

const url =
  "https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583749915/DCUK/Content/iStock-879690980.jpg";

function Recipe({ name, img = url, duration = 60, id }) {
  return (
    <div className={"recipe"}>
      <img className={"recipe__img"} src={url} alt="" />
      <div className={"recipe__detail"}>
        <Link to={"detail/" + id}>
          <h1 className={"recipe__heading headline"}>{name}</h1>
        </Link>
        <RatingView emptyColor="white" ratingValue={2} fillColor={"#ff00ff"} />
        <div className={"recipe__time"}>
          <TimerIcon />
          <h3 className="recipe__timeText">{duration} min.</h3>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
