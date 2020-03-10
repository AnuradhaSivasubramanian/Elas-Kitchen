import React from 'react'


function MissedIngredients({recipeData}){

    return(
<div>
<div >

    
       {recipeData.map(
            (item, index) => (
              <p key={index}>{item.name}</p>
            )
          )} 



        </div> 
</div>
    )
}

export default MissedIngredients
