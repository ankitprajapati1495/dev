import React from "react";
import "./Burger.css";
import Burgeringredients from "./Burgeringredients/Burgeringredients";

const burger = (props) => {
  // console.log(props);
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Burgeringredients key={igKey + i} type={igKey} />;
    });
  })
  
  .reduce((arr, el) => {
      return arr.concat(el)
  }, []);
//   console.log(transformedIngredients);

if (transformedIngredients.length === 0) {
  transformedIngredients = <p>Please start adding ingredients!</p>;
}
  return (
    <div className="Burger">
      <Burgeringredients type="bread-top" />
      {transformedIngredients}
      <Burgeringredients type="bread-bottom" />
    </div>
  );
};

export default burger;
