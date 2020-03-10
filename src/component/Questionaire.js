import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Recipe from "./Recipe";
import Question from "./Question";
import buzzQuestions from "./buzzQuestions";

import Buttons from "./Buttons";
import "./css/Game.css";
import "./css/IngredientList.css";
const MY_KEY = config.SPOON_API_KEY;

class Questionaire extends Component {
  state = {
    data:{},
    id: "",
    recipes: [],
    recipeMount: false,
    ingredients: [],
    mountQuestion: false,
    counter: 0,
    recipeImage: ""
  };

  AddingList = () => {
    this.setState({ mountQuestion: !this.state.mountQuestion });

    if (buzzQuestions.length - 1 !== this.state.counter) {
      setTimeout(this.nextQuestion, 0);
    }
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
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${MY_KEY}&ingredients=${ingredients}&number=1`
      )
      .then(res => {
        this.setState({data:res.data[0].missedIngredients})
        this.setState({ id: res.data[0].id});
        this.setState({ recipeMount: !this.state.recipeMount });
        this.setState({ recipeImage: res.data[0].image });
        this.getAnalizedInst(this.state.id);
      })
      .catch(error => console.error(`Something went wrong ${error}`));
    this.setState({
      counter: 0
    });
  };

  getAnalizedInst = id => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${MY_KEY}`
      )
      .then(res => {
        this.setState({ recipes: res.data[0].steps});
      })
      .catch(error => console.error(`Something went wrong ${error}`));
  };

  handlervalue = (e, onItem) => {
    const on = onItem;
    const item = e;
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
        {this.state.recipeMount ? (
          <Recipe
          data={this.state.data}
            recipes={this.state.recipes}
            recipeImage={this.state.recipeImage}
          />
        ) : (
          <main className="game-main">
            {this.state.mountQuestion ? (
              <Buttons
                nextQuestion={this.nextQuestion}
                handlerdata={this.handlerdata}
                counter={this.state.counter}
              />
            ) : null}

            <div className="height_100">
              {!this.state.mountQuestion
                ? buzzQuestions.map((item, index) => (
                    <section className="justify-center" key={index}>
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
          </main>
        )}
      </div>
    );
  }
}

export default Questionaire;
