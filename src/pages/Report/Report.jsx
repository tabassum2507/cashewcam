import React from "react";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { IoShareSocialOutline, IoArrowDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import '../../scss/style3.scss'

const Report = () => {
  return (
    <div className="report">
      <div className="report__header">
        <Link to="/camera">
          <HiArrowUturnLeft style={{ fontSize: "30px", color: "#fff" }}/>
        </Link>

        <div className="report__header--title">Cashew Cam</div>
      </div>

      <div className="report__body">
        <p className="report__body--para">Here's your grading cashew</p>
        <img
          className="report__body--img"
          src="https://images.unsplash.com/photo-1641718111847-7e509a4dd208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        ></img>

        <div className="report__body--icons">
          <div className="report__body--i">
            <IoShareSocialOutline style={{ fontSize: "30px" }} />
            <p>Share</p>
          </div>

          <div className="report__body--i">
            <IoArrowDownOutline style={{ fontSize: "30px" }} />
            <p>Download</p>
          </div>
        </div>

        <div className="report__body--website">
          <p>
            CHECK OUT{" "}
            <a href="https://www.therarefood.com/" target="/blank">
              OUR WEBSITE
            </a>{" "}
            FOR MORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report;
