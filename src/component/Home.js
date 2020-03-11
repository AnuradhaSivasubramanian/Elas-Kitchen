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
                Excepteur sint occaecat cupidatat non roident. occaecat pidatat
                non proident.
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
