import React from "react";
import IngredientsList from "./IngredientsList"
import "./css/question.css"
const Question = ({ object, handlervalue, AddingList,ingredients,}) => {
 
  return (
    <div className="display-flex">
    <section  className="question_square">
      <h1>{object.question}</h1>
    
      <img src={object.item1.image} className="cursor-pointer question_square_image"  alt={object.item1.value}  id={object.item1.value} onClick={handlervalue}/>
      <img src={object.item2.image} className="cursor-pointer question_square_image" alt={object.item2.value}  id={object.item2.value} onClick={handlervalue}/>
      <img src={object.item3.image} className="cursor-pointer question_square_image" alt={object.item3.value}  id={object.item3.value} onClick={handlervalue}/>
      <img src={object.item4.image} className="cursor-pointer question_square_image"  alt={object.item4.value}  id={object.item4.value} onClick={handlervalue}/>
      
      <button onClick={AddingList}>Adding List</button>
      </section>

      <div className="list-ingredient" > 
      <IngredientsList ingredients={ingredients}/>
     </div> 

     </div>
     
    
  );
};

export default Question;
