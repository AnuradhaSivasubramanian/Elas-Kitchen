import React from "react";
import MissedIngredients from "./MissedIngredients";
import "./css/recipe.css";
import Basket from "./images/shopping-basket.svg";
class Recipe extends React.Component {
  state = {
    missedIngredMount: false
  };

  togglermissedIngredients = () => {
    this.setState({ missedIngredMount: !this.state.missedIngredMount });
  };

  render() {
    return (
      <div className="recipe_body">
        {this.state.missedIngredMount ? (
          <MissedIngredients
            togglermissedIngredients={this.togglermissedIngredients}
            missedIngredients={this.props.missedIngredients}
          />
        ) : null}
        <div className="wrap-recipe-content">
          <figure className="recipe-image">
            <img src={this.props.recipeImage} alt="recipe" />
          </figure>

          <div className="recipe-instructions">
            <h3>{this.props.recipeTitle}</h3>
            <a className="link_recipe" href={this.props.recipeLink}>
              Click here for the recipe
            </a>
            {this.props.recipeCreditText ? (
              <p>
                This recipe is from -{" "}
                <span className="credit_text">
                  {this.props.recipeCreditText}
                </span>
              </p>
            ) : null}

            <div className="icons_container">
              {" "}
              <img
                className="basket_icon"
                src={Basket}
                onClick={this.togglermissedIngredients}
                alt="shopping basket"
              />
              <img
                className="home_icon"
                src={Basket}
                onClick={this.togglermissedIngredients}
                alt="shopping basket"
              />
              <img
                className="contact_icon"
                src={Basket}
                onClick={this.togglermissedIngredients}
                alt="shopping basket"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
