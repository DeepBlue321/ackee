import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Recipe from "../components/RecipesList/Recipe/Recipe";

function Recipes() {
  const [recipes, setRecipes] = useState(null);

  function fetchFromLocal() {
    const data = JSON.parse(localStorage.getItem("recipes"));
    setRecipes([...data]);
  }
  function fetchData() {
    fetch(
      "https://my-json-server.typicode.com/AckeeCZ/web-task-cookbook-fake-api/recipes"
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipes([...result]);
        localStorage.setItem("recipes", JSON.stringify(result));
      });
  }
  function fetchDetail() {
    fetch(
      "https://my-json-server.typicode.com/AckeeCZ/web-task-cookbook-fake-api/recipe-details"
    )
      .then((res) => res.json())
      .then((result) => {
        setRecipes([...result]);
        localStorage.setItem("detail", JSON.stringify(result));
      });
  }
  useEffect(() => {
    if (localStorage.getItem("recipes")) {
      fetchFromLocal();
    } else {
      fetchData();
      fetchDetail();
    }
  }, []);

  return (
    <div>
      <Header arrow={false} title={"Recepty"} />

      {recipes
        ? recipes.map((recipe) => {
            return (
              <Recipe
                id={recipe.id}
                name={recipe.name}
                duration={recipe.duration}
              ></Recipe>
            );
          })
        : null}
    </div>
  );
}

export default Recipes;
