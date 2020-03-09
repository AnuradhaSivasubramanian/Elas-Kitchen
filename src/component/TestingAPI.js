import React, { Component } from "react";
import axios from "axios"
import config from "../config";

const MY_KEY = config.SPOON_API_KEY;


class TestingAPI extends Component {
state={
    
    recipes:{},
       ingredients:[]
    }


  handlerdata = () => {

    axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${MY_KEY}&number=1&findByIngredients?ingredients=+${this.state.ingredients[1]}&number=1,+${this.state.ingredients[2]}&number=1+${this.state.ingredients[2]}&number=1`
    )
      .then(res=>{this.setState({recipes:res.data.recipes[0]})})
      .catch(error => console.error(`Something went wrong ${error}`));
  };
  
 

 handlervalue=(e)=>{
  this.setState({ingredients:[...this.state.ingredients,e.target.value]})
 }


  render() {

    return (
      <div>

          <p>{this.state.ingredients[1]}</p>
          <p>{this.state.ingredients[2]}</p>
          <p>{this.state.ingredients[3]}</p>
          <p>{this.state.ingredients[4]}</p>
          <img src={this.state.recipes.image} alt=""/>
        <button value="flour" onClick={this.handlervalue}> CLICK</button>
        <button value="sugar" onClick={this.handlervalue}>CLICK</button>
        <button value="banana" onClick={this.handlervalue}>CLICK</button>
         <button onClick={this.handlervalue}> result</button>
        <button onClick={this.handlerdata}> dataCLICK</button>
      </div>
    );
  }
}


export default TestingAPI;
