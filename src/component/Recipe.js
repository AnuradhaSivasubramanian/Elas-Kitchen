import React from "react";
import MissedIngredients from "./MissedIngredients";
import "./css/recipe.css";
import Contact from "./Contact"
class Recipe extends React.Component {
  state = {
    missedIngredMount: false,
    mountPopUp:false
  };

  togglermissedIngredMount = () => {
    this.setState({ missedIngredMount: !this.state.missedIngredMount});
  };
  togglerPopUp = () => {
    this.setState({ mountPopUp: !this.state.mountPopUp});
  };

  render() {
    return (
    
      <div className="recipe_body">
          
        {this.state.missedIngredMount ? (
              <MissedIngredients
              togglermissedIngredMount={this.togglermissedIngredMount}
                missedIngredients={this.props.missedIngredients}
                togglerPopUp={this.togglerPopUp}
                mountPopUp={this.state.mountPopUp}
              />
            ) : null}
        <div className="wrap-recipe-content">
          <figure className="recipe-image">
            <img src={this.props.recipeImage} alt="recipe" />
          </figure>

          <div className="recipe-instructions">
            <h3>{this.props.recipeTitle}</h3>

              <button onClick={this.togglermissedIngredMount}> open </button>
            
            
            <a href={this.props.recipeLink}>{this.props.recipeLink}</a>
            {this.props.recipeCreditText ? (
              <p>This recipe is from - {this.props.recipeCreditText}</p>
            ) : null}
          </div>
        </div>
       
      </div>
    );
  }
}

export default Recipe;
