import React from "react";
import "./css/recipe.css"
class Recipe extends React.Component {
  state = {
    recipeData: this.props.recipes
  };

  render() {
    return (
      <div>

        <figure>

          <img src={this.state.recipeData.image} alt="testimage"></img>
          <figcaption>{this.state.recipeData.title}</figcaption>
        </figure>
        <h3> Instructions</h3>
        <p>
         {this.state.recipeData.analyzedInstructions[0].steps.map(
            (item, index) => (
              <p key={index}>{item.step}</p>
            )
          )}
        </p>

        <p>This recipe is from - {this.state.recipeData.creditsText}</p>
      </div>
    );
  }
}

export default Recipe;
