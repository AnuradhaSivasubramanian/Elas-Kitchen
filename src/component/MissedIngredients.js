import React from 'react'
import buy from "./images/buy.svg"
import "./css/missedIngredients.css"

function MissedIngredients({missedIngredients}){

    return(

<div className="body-missIngr">

    <section className="list-missIngr">
       {missedIngredients.map(
            (item, index) => (
              <label  key={index} htmlFor={item.name}>{item.name}
              <input type="checkbox" />
              </label>
            )
          )} 
</section>
<img src={buy} alt="buy"/>
<button>Close</button>
         
</div>
    )
}

export default MissedIngredients
