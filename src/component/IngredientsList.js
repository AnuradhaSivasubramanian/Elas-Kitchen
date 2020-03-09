import React from 'react'


function IngredientsList ({ingredients}){

    return(
        <div className="listing-elements">
           <ul> {ingredients?
           (
            ingredients.map(i =>
                (
                    <li>{i}</li>
               
                    ))

           ):null}
            </ul>
       </div>
    )
}

export default IngredientsList