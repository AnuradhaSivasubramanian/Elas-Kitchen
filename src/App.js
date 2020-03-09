import React from "react";
import "./App.css";
import TestingAPI from "./component/TestingAPI";
function App() {
  return (
    <div>
      <TestingAPI />
      <footer>
        <a href="https://spoonacular.com/food-api">
          This project uses Spoonacular API
        </a>
      </footer>
    </div>
  );
}

export default App;
