import React from "react";
import "../../scss/style.scss";
import logo from "../../photos/logo.png";
import cashew1 from "../../photos/kaju1.png";
import cashew2 from "../../photos/kaju5.png";
import cashew3 from "../../photos/kaju3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <img src={logo} className="home__header--logo" />

        <h2 className="home__header--title">Cashew Cam</h2>
      </div>

      <div className="home__start">
        <div className="home__start--heading">
          WELCOME TO THE RARE EXPERIENCE OF GRADING CASHEWS.
        </div>

        <div className="home__start--imgs">
          <div className="img">
            <img src={cashew1} />
            <p>W320</p>
          </div>

          <div className="img">
            <img src={cashew2} alt="" />
            <p>W240</p>
          </div>

          <div className="img">
            <img src={cashew3} alt="" />
            <p>W180</p>
          </div>
        </div>

        <div className="home__start--scan">
          <p>LET'S SCAN SOME CASHEWS</p>

          <Link to="/Animation">
            <button className="home__start--button">START</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
