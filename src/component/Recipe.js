import React from "react";
import MissedIngredients from "./MissedIngredients";
import "./css/recipe.css";
class Recipe extends React.Component {
  state = {
    missedIngredMount: false
  };

  handlremissedIngredients = () => {
    this.setState({ missedIngredMount: true });
  };

  render() {
    return (
      <div className="recipe_body">
        <div className="wrap-recipe-content">
          <figure className="recipe-image">
            <img src={this.props.recipeImage} alt="recipe" />
          </figure>

          <div className="recipe-instructions">
            <h3>{this.props.recipeTitle}</h3>

            <a href={this.props.recipeLink}>{this.props.recipeLink}</a>
            {this.props.recipeCreditText ? (
              <p>This recipe is from - {this.props.recipeCreditText}</p>
            ) : null}
          </div>
        </div>
        <MissedIngredients recipeData={this.props.data} />
        {/*  <button onclick={this.handlremissedIngredients}> open </button>
       {this.state.missedIngredMount? <MissedIngredients recipeData={this.props.data}/>: null}
        */}
      </div>
    );
  }
}

export default Recipe;
