import React from "react";

const Question = ({ question, handlervalue, AddingList, index }) => {
  return (
    <div>
      <p>{question.question}</p>

      <button value={question.item1} onClick={handlervalue}>
        {" "}
        {question.item1}
      </button>
      <button value={question.item2} onClick={handlervalue}>
        {question.item2}
      </button>
      <button onClick={AddingList}>Add</button>
    </div>
  );
};

export default Question;
