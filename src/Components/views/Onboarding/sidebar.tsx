import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="col-md-3 staffonboarding_3">
      <div className="staffonboarding_4 dr3"></div>
      <div className="secondare ">
        <div className="areatitle activeside_number">
          <span className="detailsdf activesidelink">1</span> Personal Details
        </div>
        <div className= {props.step2||props.step3?"areatitle activeside_number":"areatitle"}>
          <span className={(props.step2||props.step3)?"detailsdf activesidelink":"detailsdf"}>2</span>
          Email Setup
        </div>
        <div className={props.step3?"areatitle activeside_number":"areatitle"}>
          <span className={props.step3?"detailsdf activesidelink":"detailsdf"}>3</span>
          Staff Role
        </div>
      </div>
      <div className="thirdarea">
        <svg
          width="277"
          height="126"
          viewBox="0 0 277 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M0 126V0C67.3909 95.3077 173.357 14.5385 182.653 11.8462C234.956 -3.30299 270.803 92.6154 277 126H0Z"
            fill="#59CEFF"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
