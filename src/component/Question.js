import React, {Component} from "react";
import IngredientsList from "./IngredientsList"
import "./css/question.css"
class Question extends Component {
  state ={
    onItem1:false ,
    onItem2:false,
    onItem3:false,
    onItem4:false
  } 
 handlerClassItem1 =() =>{
  this.props.handlervalue(this.props.object.item1.value)
  this.setState({onItem1:!this.state.onItem1})
 

 }
handlerClassItem2= () =>{
  this.props.handlervalue(this.props.object.item2.value)
  this.setState({onItem2:!this.state.onItem2})
  

 }
  handlerClassItem3= () =>{
  this.props.handlervalue(this.props.object.item3.value)
  this.setState({onItem3:!this.state.onItem3})
 

 }
  handlerClassItem4=() =>{
  this.props.handlervalue(this.props.object.item4.value)
  this.setState({onItem4:!this.state.onItem4})


 }
render(){
  return (
    <div className="display-flex">
    <section  className="question_square">
      <h1>{this.props.object.question}</h1>
    
      <img src={this.props.object.item1.image} className={this.state.onItem1?"cursor-pointer question_square_image_on":"cursor-pointer question_square_image"}  alt={this.props.object.item1.value}   onClick={this.handlerClassItem1}/>
      <img src={this.props.object.item2.image} className={this.state.onItem2?"cursor-pointer question_square_image_on":"cursor-pointer question_square_image"}  alt={this.props.object.item2.value}   onClick={this.handlerClassItem2}/>
      <img src={this.props.object.item3.image} className={this.state.onItem3?"cursor-pointer question_square_image_on": "cursor-pointer question_square_image"} alt={this.props.object.item3.value}   onClick={this.handlerClassItem3}/>
      <img src={this.props.object.item4.image} className={this.state.onItem4?"cursor-pointer question_square_image_on": "cursor-pointer question_square_image"} alt={this.props.object.item4.value}   onClick={this.handlerClassItem4}/>
      
      <button onClick={this.props.AddingList}>Adding List</button>
      </section>

      <div className="list-ingredient" > 
      <IngredientsList ingredients={this.props.ingredients}/>
     </div> 

     </div>
     
    
  );}
};

export default Question;
