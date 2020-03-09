import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Recipe from "./Recipe";
import Question from "./Question";
import buzzQuestions from "./buzzQuestions";
import Buttons from "./Buttons";

const MY_KEY = config.SPOON_API_KEY;

class Questionaire extends Component {
  state = {
    recipes: {},
    ingredients: [],
    mountQuestion: false,
    counter: 0
  };
  AddingList = () => {
    this.setState({
      mountQuestion: !this.state.mountQuestion,
      counter: this.state.counter + 1
    });
  };
  nextQuestion = () => {
    this.setState({
      mountQuestion: !this.state.mountQuestion
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
      })
      .catch(error => console.error(`Something went wrong ${error}`));
    this.setState({
      counter: 0
    });
  };

  handlervalue = e => {
    const item = e.target.value;
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
        <p>{this.state.ingredients[0]}</p>
        <p>{this.state.ingredients[1]}</p>
        <p>{this.state.ingredients[2]}</p>

        {!this.state.mountQuestion
          ? buzzQuestions.map((item, index) => (
              <section key={index}>
                {index === this.state.counter ? (
                  <Question
                    question={item}
                    handlervalue={this.handlervalue}
                    AddingList={this.AddingList}
                  />
                ) : null}
              </section>
            ))
          : null}

        <Buttons
          nextQuestion={this.nextQuestion}
          handlerdata={this.handlerdata}
          counter={this.state.counter}
        />
        <Recipe recipe={this.state.recipes} />
      </div>
    );
  }
}

export default Questionaire;
