import React, { Component } from "react";
import axios from "axios"
class TestingAPI extends Component {
state={
    value:"",
    ingredients:[]
    }


  handlerdata = () => {

    axios({
        "method":"GET",
        "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
        
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key":"d1f85bb898314f33b11145b84949f942"},

        "params":{
        "number":"5",
        "ranking":"1",
        "ignorePantry":"false",
        "ingredients":`apples%2Cflour%2Csugar`
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
  };
 

 handlervalue=(e)=>{
  this.setState({value:e.target.value})
 this.onAddItem()
 }
 onAddItem = (e,state) => {
    
    this.setState({ingredients:this.state.ingredients.concat(this.state.value)});
};


  render() {
    return (
      <div>

          <p>{this.state.ingredients[1]}</p>
          <p>{this.state.ingredients[2]}</p>
          <p>{this.state.ingredients[3]}</p>
          <p>{this.state.ingredients[4]}</p>
        <button value="apple" onClick={this.handlervalue}> CLICK</button>
        <button value="tomate" onClick={this.handlervalue}>CLICK</button>
        <button value="banana" onClick={this.handlervalue}>CLICK</button>
         <button onClick={this.handlervalue}> result</button>
        <button onClick={this.handlerdata}> dataCLICK</button>
      </div>
    );
  }}


export default TestingAPI;
