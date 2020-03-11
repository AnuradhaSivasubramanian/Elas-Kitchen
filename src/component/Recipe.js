import React from "react";
import MissedIngredients from "./MissedIngredients";
import "./css/recipe.css";
import Contact from "./Contact"
import Basket from "./images/shopping-basket.svg";
import email from "./images/email.svg"
import logo from "./images/dinner.svg"


class Recipe extends React.Component {
  state = {
    missedIngredMount: false,
    contactMount:false,
    mountPopUp:false
  };

  togglermissedIngredMount = () => {
    this.setState({ missedIngredMount: !this.state.missedIngredMount});
  };
  togglercontactMount = () => {
    this.setState({ contactMount: !this.state.contactMount});
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
            {this.state.contactMount?<Contact togglercontactMount={this.togglercontactMount}/>:null}
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
                onClick={this.togglermissedIngredMount}
                alt="shopping basket"
              />
              <img
                className="home_icon"
                src={logo}
                onClick={this.props.questionaireMount}
                alt="shopping basket"
              />
              <img
                className="contact_icon"
                src={email}
                onClick={this.togglercontactMount}
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
