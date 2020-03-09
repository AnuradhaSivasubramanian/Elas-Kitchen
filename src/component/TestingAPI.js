import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Recipe from "./Recipe";
import Question from "./Question";

const MY_KEY = config.SPOON_API_KEY;
const buzzFeedQuestions = [
  {
    question: "Which of these Vegetables do you have",
    item1: "tomato",
    item2: "potato"
  },
  {
    question: "Which of these items do you have",
    item1: "black pepper",
    item2: "jaggery"
  },
  {
    question: "Which of these items do you have",
    item1: "jasmine rice",
    item2: "chicken"
  }
];

class TestingAPI extends Component {
  state = {
    recipes: {},
    ingredients: [],
    mountQuestion: false,
    counter: 0
  };
  toggleMountQuestion = () => {
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
    this.state.ingredients.includes(e.target.value)
      ? this.setState({
          ingredients: this.state.ingredients.filter(
            item => item !== e.target.value
          )
        })
      : this.setState({
          ingredients: [...this.state.ingredients, e.target.value]
        });
  };

  render() {
    return (
      <div>
        {!this.state.mountQuestion
          ? buzzFeedQuestions.map((item, index) => (
              <section key={index}>
                {index === this.state.counter ? (
                  <Question
                    question={item}
                    handlervalue={this.handlervalue}
                    questionUnmount={this.toggleMountQuestion}
                  />
                ) : null}
              </section>
            ))
          : null}

        {/* <p>{buzzFeedQuestions[1].question}</p>

        <button value={buzzFeedQuestions[1].item1} onClick={this.handlervalue}>
          {" "}
          {buzzFeedQuestions[1].item1}
        </button>
        <button value={buzzFeedQuestions[1].item2} onClick={this.handlervalue}>
          {buzzFeedQuestions[1].item2}
        </button>

        <p>{buzzFeedQuestions[2].question}</p>

        <button value={buzzFeedQuestions[2].item1} onClick={this.handlervalue}>
          {" "}
          {buzzFeedQuestions[2].item1}
        </button>
        <button value={buzzFeedQuestions[2].item2} onClick={this.handlervalue}>
          {buzzFeedQuestions[2].item2}
        </button> */}
        <button onClick={this.nextQuestion}>Next Question</button>
        <button onClick={this.handlerdata}> Give me the Recipe</button>
        <Recipe recipe={this.state.recipes} />
      </div>
    );
  }
}

export default TestingAPI;
