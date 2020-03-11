import React from "react";
import MissedIngredients from "./MissedIngredients";
import "./css/recipe.css";
class Recipe extends React.Component {
  state = {
    missedIngredMount: false
  };

<<<<<<< HEAD
  handlremissedIngredients = () => {
    this.setState({ missedIngredMount: true });
  };
=======
  togglermissedIngredients=()=>{
    this.setState({missedIngredMount:!this.state.missedIngredMount})
  }
>>>>>>> a8efbfde93704a6b952d270e3c60d3544ed885eb

  render() {
    return (
      <div className="recipe_body">
<<<<<<< HEAD
        <div className="wrap-recipe-content">
          <figure className="recipe-image">
            <img src={this.props.recipeImage} alt="recipe" />
          </figure>
=======
                 <button onClick={this.togglermissedIngredients}> open </button>
       {this.state.missedIngredMount? <MissedIngredients togglermissedIngredients={this.togglermissedIngredients} missedIngredients={this.props.missedIngredients}/>: null}
        
      <div className="wrap-recipe-content">
        
        
        <figure className="recipe-image">
          <img src={this.props.recipeImage} alt="recipe"/>
                  </figure>
>>>>>>> a8efbfde93704a6b952d270e3c60d3544ed885eb

          <div className="recipe-instructions">
            <h3>{this.props.recipeTitle}</h3>
            {/*          <button onClick={this.handlremissedIngredients}> open </button>
             */}{" "}
            {this.state.missedIngredMount ? (
              <MissedIngredients
                missedIngredients={this.props.missedIngredients}
              />
            ) : null}
            <a href={this.props.recipeLink}>{this.props.recipeLink}</a>
            {this.props.recipeCreditText ? (
              <p>This recipe is from - {this.props.recipeCreditText}</p>
            ) : null}
          </div>
        </div>
        {/* <MissedIngredients recipeData={this.props.data} /> */}
        {/*  <button onclick={this.handlremissedIngredients}> open </button>
       {this.state.missedIngredMount? <MissedIngredients recipeData={this.props.data}/>: null}
        */}
      </div>
    );
  }
}

export default Recipe;
