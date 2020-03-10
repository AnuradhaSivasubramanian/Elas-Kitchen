import React from "react";
import "./css/recipe.css"
class Recipe extends React.Component {
  state = {
    recipeData: {    },
    isLoaded:false
  };
  componentDidMount =()=> {
    
      this.setState({recipeData: this.props.recipes})
      if(this.props.recipes === this.state.recipeData){
        this.setState({isLoaded:true})
        }
    }  
   


  render() {
    return (
      <div>
        {this.state.isLoaded?
        <div>
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
     : null}
      </div>
    )}} 
  

export default Recipe;
