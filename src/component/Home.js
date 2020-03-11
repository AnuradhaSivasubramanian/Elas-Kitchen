import React, { Component } from "react";
import Questionaire from "./Questionaire";
import "./css/Home.css";

class Home extends Component {
  state = {
    questionaireunMount: true
  };
  questionaireMount = () => {
    this.setState({
      questionaireunMount: !this.state.questionaireunMount });
  };
  render() {
    return (
      <div>
        {!this.state.questionaireunMount ? (
          <Questionaire  questionaireMount={this.questionaireMount}/>
        ) : (
          <section className="home_section">
            <h1 className="home_h1"> Ela's Kitchen</h1>
            <div className="home_pbutton_container">
              <p className="home_p">
                Ela's Kitchen will find you a recipe based on what you have in your pantry.
              </p>
              <button className="home_button" onClick={this.questionaireMount}>
                Start Here
              </button>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Home;
