import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Recipe from "./Recipe";

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
    ingredients: []
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
  };

  handlervalue = e => {
    this.setState({ ingredients: [...this.state.ingredients, e.target.value] });
  };

  render() {
    return (
      <div>
        <p>{this.state.ingredients[0]}</p>
        <p>{this.state.ingredients[1]}</p>
        <p>{this.state.ingredients[2]}</p>

        {buzzFeedQuestions.map((item, index) => (
          <section key={index}>
            {" "}
            <p>{item.question}</p>
            <button value={item.item1} onClick={this.handlervalue}>
              {" "}
              {item.item1}
            </button>
            <button value={item.item2} onClick={this.handlervalue}>
              {item.item2}
            </button>
          </section>
        ))}

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

        <button onClick={this.handlerdata}> Give me the Recipe</button>
        <Recipe recipe={this.state.recipes} />
      </div>
    );
  }
}

export default TestingAPI;
