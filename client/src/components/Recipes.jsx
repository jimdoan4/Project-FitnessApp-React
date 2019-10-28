import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm.jsx";
import { RecipeContainer } from "./styled-components/RecipeStyles";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Recipes extends Component {
  state = {
    recipes: [],
    newRecipe: {
      recipeName: "",
      recipeImg: "",
      ingredient: "",
      recipeDescription: "",
      cookingTime: ""
    },
    redirectToRecipe: false,
    displayRecipeForm: false
  };

  //Use the componentDidMount lifecycle method
  // to execute our API call as soon as the component mounts
  componentDidMount = () => {
    this.getAllRecipes();
  };

  //Function to get all Facts from axios via our API
  getAllRecipes = () => {
    axios.get(`/api/recipes/`).then(res => {
      this.setState({ recipes: res.data });
      //   })
      //   .catch(err => {
      //     console.log("You messed up somewhere, Jim. Go back!", err);
    });
  };

  //Creates a New Recipe
  createRecipe = e => {
    e.preventDefault();
    axios
      .post("/api/recipes/", {
        recipeImg: this.state.newRecipe.recipeImg,
        recipeName: this.state.newRecipe.recipeName,
        cookingTime: this.state.newRecipe.cookingTime,
        ingredient: this.state.newRecipe.ingredient,
        recipeDescription: this.state.newRecipe.recipeDescription
      })
      .then(res => {
        const recipesList = [this.state.recipes];
        recipesList.unshift(res.data);
        this.setState({
          newRecipe: {
            recipeName: "",
            recipeImg: "",
            ingredient: "",
            recipeDescription: "",
            cookingTime: ""
          },
          displayRecipeForm: false,
          recipes: recipesList
        });
      });
  };


  //Toggles the Edit form
  toggleRecipeForm = () => {
    this.setState((state, props) => {
      return {
        displayRecipeForm: !state.displayRecipeForm
      };
    });
  };

  //Handles form change recipe value
  handleChange = e => {
    //Preserves Recipe State
    const cloneNewRecipe = { ...this.state.newRecipe };
    cloneNewRecipe[e.target.name] = e.target.value;
    this.setState({ newRecipe: cloneNewRecipe });
  };

  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo" style={{ marginBottom:"30px" }}>
          <img
            className="card-img"
            src="https://www.rd.com/wp-content/uploads/2018/04/50-Fitness-Myths-that-can-Seriously-Damage-Your-Health-15-760x506.jpg"
            alt="Recipe"
          />
          <div className="card-img-overlay">
          <h1
              className="display-5 centered workout-all-margin"  
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "4vw",
                padding: "15px"
              }}>
             RECIPES AND TIPS
            </h1>
          </div>
        </div>


        <div className="member-container">
          <div class="row">
          {this.state.recipes.map(recipe => {
            return (
            <div key={recipe._id} class="column-imgs">
            <img
                    className="card-img member-imgs"
                    src={recipe.recipeImg}
                    alt={recipe.recipeName}
                    // style={{ maxWidth: "320px", height: "250px", maxHeight:"250px"}}
                  />
              {/* <h2 className="member-text text-center">
              Unlimited Group Fitness is just the beginning. Discover all the ways you could unlock your potential with an Equinox membership—including luxe amenities and exceptional services. 
              </h2> */}
              
            </div>
           
   
      
        );
          })}
          </div>
          </div>
        {/* <RecipeContainer>
        <div className="card-flex">
          {this.state.recipes.map(recipe => {
            return (
              <div key={recipe._id} className="card-flex">
                <div
                  className="card card-flex text-white"
                  style={{ maxWidth: "320px", marginBottom: "20px"}}
                >
                  <img
                    className="card-img"
                    src={recipe.recipeImg}
                    alt={recipe.recipeName}
                    style={{ maxWidth: "320px", height: "250px", maxHeight:"250px"}}
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title centered">
                      <Link
                        to={`/recipes/${recipe._id}/`}
                        key={recipe._id} 
                        className="workout-link"
                      >
                        {recipe.recipeName}
                      </Link>
                    </h3>
                  </div>
              
                </div>
              </div>
              
            );
          })}
          </div>
        </RecipeContainer> */}
    
       

        <div className="jumbotron jumbotron-fluid recipe-jumbotron" style={{backgroundColor:"#e3dfda"}}>
          <div className="container">
            <RecipeForm
              recipe={this.state.newRecipe}
              handleSubmit={this.createRecipe}
              handleChange={this.handleChange}
              submitBtnText="SUBMIT"
            />
          </div>
        </div>
      </div>
    );
  }
}
