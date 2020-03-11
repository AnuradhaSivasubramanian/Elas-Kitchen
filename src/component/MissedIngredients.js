import React from "react";
import buy from "./images/buy.svg";
import "./css/missedIngredients.css";
import AddedShopList from "./AddedShopList";

function MissedIngredients({
  missedIngredients,
  togglermissedIngredMount,
  togglerPopUp,
  mountPopUp
}) {
  return (
    <div className="body-missIngr">
      {mountPopUp ? <AddedShopList togglerPopUp={togglerPopUp} /> : null}
      {missedIngredients.length === 0 ? (
        <h1> You have all the ingredients</h1>
      ) : (
        <section className="list-missIngr">
          {missedIngredients.map((item, index) => (
            <div key={index}>
              <input name={item.name} type="checkbox" className="input-check" />
              <label name={item.name} htmlFor={item.name}>
                {item.name}
              </label>
            </div>
          ))}
        </section>
      )}
      <div className="icons-missIngr">
        <img src={buy} alt="buy" onClick={togglerPopUp} />

        <button onClick={togglermissedIngredMount}>Close</button>
      </div>
    </div>
  );
}

export default MissedIngredients;
