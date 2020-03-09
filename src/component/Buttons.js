import React from 'react'


function Buttons ({nextQuestion,handlerdata,counter} ){
    return(
        <div>
        {counter===0||counter===1||counter===2?
        (<button onClick={nextQuestion}>Next Question</button>):
        (<button onClick={handlerdata}> Give me the Recipe</button>)}
        </div>
    )
}

export default Buttons