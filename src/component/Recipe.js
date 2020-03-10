import React from "react";
import MissedIngredients from "./MissedIngredients"
import "./css/recipe.css"
class Recipe extends React.Component {
  state = {
    missedIngredMount:false
  };

  handlremissedIngredients=()=>{
    this.setState({missedIngredMount:true})
  }

  render() {
    return (
      <div className="recipe_body">

       <div className="wrap-recipe-content">
        
        
        <figure className="recipe-image">
          <img src={this.props.recipeImage} alt="recipe"/>
                  </figure>

        <div className="recipe-instructions">
        <h3> Instructions</h3>
        
         <div >
         {this.props.recipes.map(
            (item, index) => (
              <p key={index}>{item.step}</p>
            )
          )}
        </div> 
        </div>

        </div> 
        <MissedIngredients recipeData={this.props.data}/>
       {/*  <button onclick={this.handlremissedIngredients}> open </button>
       {this.state.missedIngredMount? <MissedIngredients recipeData={this.props.data}/>: null}
        */}
       {/*   <div className="display-none">
        <p>This recipe is from - {this.state.recipeData.creditsText}</p>
         </div>   */}
           
      </div>
    );
  }
}

export default Recipe;
