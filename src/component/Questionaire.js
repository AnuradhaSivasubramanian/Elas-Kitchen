import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Recipe from "./Recipe";
import Question from "./Question";
import buzzQuestions from "./buzzQuestions"
import IngredientsList from "./IngredientsList"
import Buttons from "./Buttons"
import "./css/Game.css"
import "./css/IngredientList.css"
const MY_KEY = config.SPOON_API_KEY;


class Questionaire extends Component {
  state = {
    recipes: {},
    recipeMount:false,
    ingredients: [],
    mountQuestion: false,
    counter: 0,
   };



  AddingList = () => {
    this.setState({
      mountQuestion: !this.state.mountQuestion
    });
    this.setState({on:false})
  };
  nextQuestion = () => {
    this.setState({
      mountQuestion: !this.state.mountQuestion,
      counter: this.state.counter + 1

    });
  };
  handlerdata = () => {
    let ingredients = this.state.ingredients.join(`,+`);
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${MY_KEY}&number=1&findByIngredients?ingredients=+${ingredients}`
      )
      .then(res => {
        this.setState({ recipes: res.data.recipes[0] });
        this.setState({recipeMount:!this.state.recipeMount})
      })
      .catch(error => console.error(`Something went wrong ${error}`));
    this.setState({
      counter: 0
    });
  };

  handlervalue = (e,onItem) => {
    const on= onItem
    const item = e
    if (this.state.ingredients.includes(item)) {
      this.setState({
        ingredients: this.state.ingredients.filter(i => i !== item)
      });
 
      
    } else {
      this.setState({ ingredients: [...this.state.ingredients, item] });
    }
  };

  render() {
    return (
      <div>
        
        {this.state.recipeMount?
        <Recipe recipes={this.state.recipes} />:
      <main className="game-main">
        
        {this.state.mountQuestion?
      <Buttons  
      nextQuestion={this.nextQuestion} 
      handlerdata={this.handlerdata}
      counter={this.state.counter}/>:
      null}
      
      <div className="height_100">
         {!this.state.mountQuestion
          ? buzzQuestions.map((item, index) => (
              <section  className="justify-center" key={index}>
                {index === this.state.counter ? (
                  <Question
                    object={item}
                     AddingList={this.AddingList}
                     mountQuestion={this.state.mountQuestion}
                     handlervalue={this.handlervalue}
                     ingredients={this.state.ingredients}
                   
                   

                  />
                ) : null}
              </section>
            ))
          : null}

          </div>

      </main>}
      </div>
    );
  }
}

export default Questionaire;
