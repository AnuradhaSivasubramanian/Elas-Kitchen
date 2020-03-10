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
          <img src={this.state.recipeData.image} alt="testimage" ></img>
          <figcaption>{this.state.recipeData.title}</figcaption>
        </figure>
        <h3 className="display-none"> Instructions</h3>
        <div className="recipe-p">
        <p >
         {this.state.recipeData.analyzedInstructions[0].steps.map(
            (item, index) => (
              <p key={index}>{item.step}</p>
            )
          )}
        </p>
        </div>
         <div className="display-none">

        <p>This recipe is from - {this.state.recipeData.creditsText}</p>
         </div>
         </div>
      </div>
    );
  }
}

export default Recipe;
