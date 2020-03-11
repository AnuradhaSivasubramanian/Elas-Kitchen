import React from "react";
import "./App.css";
import Home from "./component/Home";
console.log(process.env.REACT_APP_API_KEY);
function App() {
  return (
    <div>
      <Home />
      {/*     <footer>
        <a href="https://spoonacular.com/food-api">
          This project uses Spoonacular API
        </a>
      </footer> */}
    </div>
  );
}

export default App;
