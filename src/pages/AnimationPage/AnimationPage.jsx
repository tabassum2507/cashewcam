import React from "react";
import { HiArrowUturnLeft, HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "../../scss/style2.scss";

const AnimationPage = () => {
  return (
    <div className="animation">

      <Link to="/">
      <span className="animation__back">
        <HiArrowUturnLeft style={{ fontSize: "35px" }} />
      </span>
      </Link>
      
      <h1 className="animation__title">Instructions to follow:</h1>

      <div className="animation__video">
        On a dark background, place a few cashews with a distance of at least 1
        cm between them. Be sure to place the camera indicator at the top corner
        of the cashews. Then use our web app's camera to scan nuts for the most
        accurate grading results.
      </div>

      <Link to="/Camera">
        <div className="animation__skip">          
            Next <HiChevronRight />          
        </div>
      </Link>
    </div>
  );
};

export default AnimationPage;
