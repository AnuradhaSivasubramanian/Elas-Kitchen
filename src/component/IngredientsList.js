import React from 'react'


function IngredientsList ({ingredients}){

    return(
        <div className="listing-elements">
           <ul> {ingredients?
           (
            ingredients.map((i,index) =>
                (
                    <li key={index}>{i}</li>
               
                    ))

           ):null}
            </ul>
       </div>
    )
}

export default IngredientsList