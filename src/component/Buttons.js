import React from "react";
// import Dinner from "./images/river-plate.svg";
import "./Button.css";

function Buttons({ nextQuestion, handlerdata, counter }) {
  return (
    <div className="buttons_class dinner_container ">
      <div className="effect5">
        {" "}
        <button className="cursor-pointer dinner_button" onClick={handlerdata}>
          {" "}
          Recipe
        </button>
      </div>
    </div>
  );
}

export default Buttons;
