import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Header from "../../components/Header/Header";

import "./RecipeAdd.css";
import "../../App.css";

function RecipeAdd() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(e) {
    e.preventDefault();
    let count = ingredients.length + 1;
    setIngredients([...ingredients, count]);
  }
  return (
    <div>
      <Header title="Přidat recept" arrow={true} />
      <Formik
        initialValues={{
          name: "",
          info: "",
          description: "",
          duration: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Povinné pole";
          }
          if (!values.text) {
            errors.text = "Povinné pole";
          }
          if (!values.duration) {
            errors.duration = "Povinné pole";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            const data = JSON.parse(localStorage.getItem("recipes"));
            const detail = JSON.parse(localStorage.getItem("detail"));

            const newId = Math.floor(Math.random() * 10000000) + "fff";
            data.push({
              name: values.name,
              duration: values.duration,
              id: newId,
            });

            detail.push({
              name: values.name,
              duration: values.duration,
              description: values.description,
              info: values.text,
              ingredients: [...values.ingredient],
              id: newId,
            });
            console.log(detail);

            localStorage.setItem("recipes", JSON.stringify(data));
            localStorage.setItem("detail", JSON.stringify(detail));
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Field
              className="form__input"
              type="text"
              name="name"
              placeholder={"Název receptu"}
            />
            <ErrorMessage name="name" component="div" />
            <Field
              className="form__input"
              type="text"
              name="text"
              placeholder={"Úvodní text"}
            />
            <ErrorMessage name="tex" component="div" />

            <h1 className="headline ">INGREDIENCE</h1>
            <div className="ingredients">
              {ingredients.length
                ? ingredients.map((e, index) => {
                    return (
                      <Field
                        className="form__input"
                        type="text"
                        name={`ingredient[${index}]`}
                        placeholder={"Vaše ingredience"}
                      />
                    );
                  })
                : null}
            </div>

            <button
              className="form__button "
              onClick={(e) => addIngredients(e)}
            >
              + PŘIDAT
            </button>

            <Field
              className="form__input"
              type="text"
              name="description"
              placeholder={"Postup"}
            />
            <ErrorMessage name="description" component="div" />

            <Field
              className="form__input"
              type="text"
              name="duration"
              placeholder={"Čas"}
            />
            <ErrorMessage name="duration" component="div" />
            <button
              className="form__button"
              type="submit"
              disabled={isSubmitting}
            >
              Přidat recept
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RecipeAdd;
