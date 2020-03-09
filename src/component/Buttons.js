import React from "react";

function Buttons({ nextQuestion, handlerdata, counter }) {
  return (
    <div  className="buttons_class">
     

      {counter === 2? (
        <button className="cursor-pointer" onClick={handlerdata}> Give me the Recipe</button>
        
      ) : (
        <button onClick={nextQuestion}>next question</button>
      )}
    </div>
  );
}

export default Buttons;
