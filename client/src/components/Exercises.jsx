import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ExerciseForm from "./ExerciseForm.jsx";

export default class Exercises extends Component {
  state = {
    exercises: [],
    newExercise: {
      fitnessImg: "",
      type: "",
      instruction: "",
      difficulty: "",
      equipment: ""
    },
    redirectToExercise: false,
    displayExerciseForm: false
  };

  //Use the componentDidMount lifecycle method
  // to execute our API call as soon as the component mounts
  componentDidMount = () => {
    this.getAllExercises();
  };

  //Function to get all Exercises from axios via our API
  getAllExercises = () => {
    axios.get(`/api/exercises/`).then(res => {
      this.setState({ exercises: res.data });
      //   })
      //   .catch(err => {
      //     console.log("You messed up somewhere, Jim. Go back!", err);
    });
  };

  //Creates a New Exercise
  createExercise = e => {
    e.preventDefault();
    axios
      .post("/api/exercises/", {
        fitnessImg: this.state.newExercise.fitnessImg,
        type: this.state.newExercise.type,
        instruction: this.state.newExercise.instruction,
        equipment: this.state.newExercise.equipment,
        difficulty: this.state.newExercise.difficulty
      })
      .then(res => {
        const exercisesList = [...this.state.exercises];
        exercisesList.unshift(res.data);
        this.setState({
          newExercise: {
            fitnessImg: "",
            type: "",
            instruction: "",
            difficulty: "",
            equipment: ""
          },
          displayExerciseForm: false,
          exercises: exercisesList
        });
      });
  };

  //Toggles the Edit form
  toggleExerciseForm = () => {
    this.setState((state, props) => {
      return {
        displayExerciseForm: !state.displayExerciseForm
      };
    });
  };

  //Handles form change exercise value
  handleChange = e => {
    //Preserves exercise State
    const cloneNewExercise = { ...this.state.newExercise };
    cloneNewExercise[e.target.name] = e.target.value;
    this.setState({ newExercise: cloneNewExercise });
  };

  render() {
    return (
      <div>
        <div className="bg-dark exercise-container text-light workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://www.hellomagazine.com/imagenes/healthandbeauty/health-and-fitness/2018010345124/best-free-gym-deals-of-new-year-2019/0-228-119/girls-exercising-z.jpg"
            alt="Workout"
            style={{ opacity: "80%" }}
          />
          <div className="card-img-overlay">
            <h1
              className="display-5 centered workout-all-margin p-2 font-weight-bold text-light"
              style={{
                fontSize: "5vw"
              }}
            >
              GET YOUR WORKOUT IN
            </h1>
          </div>
        </div>
        <div
          className="jumbotron jumbotron-fluid bg-light text-dark"
        >
          <div className="container text-center">
            <h2 className="display-4 sub-header">
              PERSONAL TRAINING AT ATLANTA CYCLE CLUB
            </h2>
            <p className="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button bg-dark text-light">GET STARTED TODAY</button>
          </div>
        </div>

        <div className="container">
        <div className="row text-center">
          {this.state.exercises.map(exercise => {
            return (
              <div key={exercise._id} className="col-md-6 p-4 text-light mt-3">
                  <img
                    className="exercise-img img-fluid"
                    src={exercise.fitnessImg}
                    alt={exercise.type}
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title centered scale">
                      <Link
                        to={`/exercises/${exercise._id}/`}
                        key={exercise._id}
                        className="workout-link text-light"
                      >
                        {exercise.type}
                      </Link>
                    </h3>
                  </div>
                </div>
            );
          })}
        </div>
        </div>
        <div
          className="jumbotron jumbotron-fluid recipe-jumbotron"
          style={{ backgroundColor: "#e3dfda" }}
        >
          <div className="container">
            <ExerciseForm
              exercise={this.state.newExercise}
              handleChange={this.handleChange}
              handleSubmit={this.createExercise}
              submitBtnText="SUBMIT"
            />
          </div>
        </div>
      </div>
    );
  }
}
