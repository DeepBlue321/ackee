import React from "react";
import { useHistory, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import "./Header.css";

function Header({ arrow = null, title }) {
  let history = useHistory();
  return (
    <div className={"header"}>
      {arrow ? (
        <ArrowBackIcon color="primary" onClick={() => history.goBack()} />
      ) : null}

      <h1>{title}</h1>
      <Link to="/pridaniReceptu">
        <AddIcon style={{ fill: "blue" }} fontSize="large" />
      </Link>
    </div>
  );
}

export default Header;
