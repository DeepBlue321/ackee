import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import RecipeAdd from "./pages/RecipeAdd/RecipeAdd";
import Recipes from "./pages/Recipes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/recepty" component={Recipes} />
          <Route path="/detail/:id" component={RecipeDetail} />
          <Route path="/pridaniReceptu" component={RecipeAdd} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
