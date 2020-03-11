import React from 'react'
import buy from "./images/buy.svg"
import "./css/missedIngredients.css"

function MissedIngredients({missedIngredients,togglermissedIngredients}){

    return(

<div className="body-missIngr">

    <section className="list-missIngr">
       {missedIngredients.map(
            (item, index) => (
            <div key={index}>
              <input  name={item.name} type="checkbox" className="input-check"/>
              <label  name={item.name} htmlFor={item.name}>
              {item.name}
              </label>
              </div>
            )
          )} 
</section>
<div className="icons-missIngr">
<img src={buy} alt="buy"/>
<button onClick={togglermissedIngredients}>Close</button>
    </div>     
</div>
    )
}

export default MissedIngredients
