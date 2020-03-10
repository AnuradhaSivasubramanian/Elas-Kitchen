import React from "react";
import "./css/recipe.css"
class Recipe extends React.Component {
  state = {
    recipeData: this.props.recipes
  };

  render() {
    return (
      <div className="recipe_body">

      <div className="wrap-recipe-content">
        
        
        <figure className="recipe-image">
          <img src={this.props.recipeImage} alt="testimage" ></img>
                  </figure>

        <div className="recipe-instructions">
        <h3> Instructions</h3>
        
        <div >
         {this.state.recipeData.steps.map(
            (item, index) => (
              <p key={index}>{item.step}</p>
            )
          )}
        </div>
        </div>

        </div>

       {/*   <div className="display-none">
        <p>This recipe is from - {this.state.recipeData.creditsText}</p>
         </div>   */}
           
      </div>
    );
  }
}

export default Recipe;
