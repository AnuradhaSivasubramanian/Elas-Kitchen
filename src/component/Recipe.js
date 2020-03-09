import React from "react";
class Recipe extends React.Component {
  state = {
    recipeData: {},
    isloaded: false
  };
  componentDidUpdate(prevProps) {
    if (this.props.recipe !== prevProps.recipe) {
      this.setState({
        recipeData: this.props.recipe,
        isloaded: true
      });
    }
  }
  render() {
    return this.state.isloaded ? (
      <div>
        {" "}
        <figure>
          <img src={this.state.recipeData.image} alt="testimage"></img>
          <figcaption>{this.state.recipeData.title}</figcaption>
        </figure>
        <h3> Instructions</h3>
        <p>
          {this.state.recipeData.analyzedInstructions[0].steps.map(
            (item, index) => (
              <p key={index}>{item.step}</p>
            )
          )}
        </p>
        <p>This recipe is from - {this.state.recipeData.creditsText}</p>
      </div>
    ) : null;
  }
}
export default Recipe;
