import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Benefits extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://s7d2.scene7.com/is/image/dksfed/fitnessdeals_spot1"
            alt="Workout"
          />
          <div className="card-img-overlay text-center">
            <h1 className="display-3 centered workout-all-margin" style={{fontWeight:"bold", fontSize: "5.9vw"}}>
              Membership With Benefits
            </h1>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="display-5">PERSONAL TRAINING AT EQUINOX</h1>
            <p class="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button">GET STARTED TODAY</button>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="display-5">MAKE THE IMPOSSIBLE HAPPEN</h1>
            <p class="lead">
              Together, you and your dedicated personal trainer break records,
              tear down walls, and unlock the extraordinary. At every step,
              you’re driven by passionate trainers backed by the latest science
              and our industry-leading institute. Our program. Your results.
            </p>
            <button className="start-button">GET STARTED TODAY</button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}