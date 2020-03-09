import React from "react";

const Question = ({ question, handlervalue, questionUnmount }) => {
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
      <button onClick={questionUnmount}>Close</button>
    </div>
  );
};

export default Question;
