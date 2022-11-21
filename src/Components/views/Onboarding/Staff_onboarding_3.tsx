import React, { useState } from "react";
import { Col, Row, Container, Alert, Button, Form } from "react-bootstrap";
import axios from "axios";
import Sidebar from "./sidebar";

const StaffOnboarding3 = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
    isloading: false,
    errorMessage: "",
  });
  const { email, password, username, errorMessage, isloading } = state;
  const validateForm = (e) => {
    e.preventDefault();
    if (!email) {
      return setState({
        ...state,
        errorMessage: "Email address is required",
      });
    }
    if (!password) {
      return setState({
        ...state,
        errorMessage: "Password is required",
      });
    }
    submitForm();
  };
  const submitForm = () => {
  
    setState({
      ...state,
      isloading: true,
    });
    const data = {
      email,
      password,
    };
  };
  const onchange = (e) => {
    //console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
    });
  };
  return (
    <>
      <div className="staffonboarding_1">
        <div className="container-fluid staffonboarding_2">
          <div className="row ">
            <Sidebar step3={true} />
            <div className="col-md-9 staffonboarding_5">
              <div className="back1">
                <svg
                  width="87"
                  height="24"
                  viewBox="0 0 87 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.4764 12.176C55.159 12.3147 55.7084 12.64 56.1244 13.152C56.551 13.664 56.7644 14.2613 56.7644 14.944C56.7644 15.8827 56.4497 16.6293 55.8204 17.184C55.191 17.728 54.279 18 53.0844 18H48.5884V6.704H53.0044C54.135 6.704 54.999 6.96 55.5964 7.472C56.2044 7.97333 56.5084 8.66667 56.5084 9.552C56.5084 10.2667 56.3217 10.848 55.9484 11.296C55.575 11.7333 55.0844 12.0267 54.4764 12.176ZM50.4124 11.568H52.6684C53.3084 11.568 53.7937 11.4187 54.1244 11.12C54.4657 10.8213 54.6364 10.4053 54.6364 9.872C54.6364 9.34933 54.4657 8.93867 54.1244 8.64C53.7937 8.34133 53.287 8.192 52.6044 8.192H50.4124V11.568ZM52.7164 16.496C53.4097 16.496 53.943 16.3413 54.3164 16.032C54.7004 15.712 54.8924 15.2693 54.8924 14.704C54.8924 14.1387 54.7004 13.696 54.3164 13.376C53.9324 13.056 53.3937 12.896 52.7004 12.896H50.4124V16.496H52.7164ZM62.015 9.072C62.815 9.072 63.4977 9.26933 64.063 9.664C64.6283 10.0587 65.0283 10.5813 65.263 11.232V9.184H67.087V18H65.263V15.952C65.0283 16.6027 64.6283 17.1253 64.063 17.52C63.4977 17.9147 62.815 18.112 62.015 18.112C61.247 18.112 60.559 17.9307 59.951 17.568C59.3537 17.2053 58.8843 16.6827 58.543 16C58.2017 15.3173 58.031 14.512 58.031 13.584C58.031 12.6667 58.2017 11.8667 58.543 11.184C58.8843 10.5013 59.3537 9.97867 59.951 9.616C60.559 9.25333 61.247 9.072 62.015 9.072ZM62.575 10.672C61.7643 10.672 61.1137 10.9333 60.623 11.456C60.143 11.968 59.903 12.6773 59.903 13.584C59.903 14.4907 60.143 15.2053 60.623 15.728C61.1137 16.24 61.7643 16.496 62.575 16.496C63.087 16.496 63.5457 16.3787 63.951 16.144C64.3563 15.8987 64.6763 15.5573 64.911 15.12C65.1457 14.6827 65.263 14.1707 65.263 13.584C65.263 13.008 65.1457 12.5013 64.911 12.064C64.6763 11.616 64.3563 11.2747 63.951 11.04C63.5457 10.7947 63.087 10.672 62.575 10.672ZM73.1959 9.072C74.3372 9.072 75.2812 9.376 76.0279 9.984C76.7745 10.5813 77.2385 11.3973 77.4199 12.432H75.4839C75.3772 11.8773 75.1159 11.4453 74.6999 11.136C74.2945 10.816 73.7825 10.656 73.1639 10.656C72.4599 10.656 71.8732 10.9067 71.4039 11.408C70.9345 11.8987 70.6999 12.624 70.6999 13.584C70.6999 14.544 70.9345 15.2747 71.4039 15.776C71.8732 16.2773 72.4599 16.528 73.1639 16.528C73.7825 16.528 74.2945 16.368 74.6999 16.048C75.1159 15.728 75.3772 15.2907 75.4839 14.736H77.4199C77.2385 15.7707 76.7745 16.592 76.0279 17.2C75.2812 17.808 74.3372 18.112 73.1959 18.112C72.3425 18.112 71.5852 17.9307 70.9239 17.568C70.2732 17.2053 69.7612 16.6827 69.3879 16C69.0145 15.3173 68.8279 14.512 68.8279 13.584C68.8279 12.6667 69.0145 11.8667 69.3879 11.184C69.7612 10.5013 70.2732 9.97867 70.9239 9.616C71.5852 9.25333 72.3425 9.072 73.1959 9.072ZM84.1741 18L81.0061 14.08V18H79.1821V6.16H81.0061V12.944L84.1421 9.184H86.3341L82.4941 13.568L86.4301 18H84.1741Z"
                    fill="#abbb16"
                  />
                  <path
                    d="M0 13L15 21.6603L15 4.33975L0 13ZM13.5 14.5L37 14.5L37 11.5L13.5 11.5L13.5 14.5Z"
                    fill="#abbb16"
                  />
                </svg>
              </div>
              <div className="staffonboarding_6 dr3">Staff Onboarding</div>
              <div className="staffonboarding_6p">
                Create users and assign role them
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="wrpre2">
                    <div className="solid34 activeborder">Staff</div>
                    <div className="solid34">Organization</div>
                  </div>
                  <form className="form-wrapper" onSubmit={validateForm}>
                    <div className="form-header">
                      {errorMessage && (
                        <div className="signinalertmssg">
                          <Alert variant={"danger"}>{errorMessage}</Alert>
                        </div>
                      )}
                    </div>
                    <div className="padded-signin-wrapper">
                      <div className="assgn">Assign User Roles</div>
                      <div className="pd2a">
                        <div className="zd2a">
                          <div className="pd2a1">Admin Full role</div>
                          <div className="pd2a2">
                            <Form.Check
                              type="switch"
                              id="admin_role"
                              label=""
                            />
                          </div>
                        </div>
                        <div className="zd2a1">
                          <div className="pd2a1">Access to Subscription</div>
                          <div className="pd2a2">
                            <Form.Check
                              type="switch"
                              id="access_to_subscription"
                              label=""
                            />
                          </div>
                        </div>
                        <div className="zd2a1">
                          <div className="pd2a1">Inventory</div>
                          <div className="pd2a2">
                            <Form.Check
                              type="switch"
                              id="inventory"
                              label=""
                            />
                          </div>
                        </div>
                        <div className="zd2a1">
                          <div className="pd2a1">See other staff</div>
                          <div className="pd2a2">
                            <Form.Check
                              type="switch"
                              id="seeotherstaff"
                              label=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-btn-wrapper loginbtdv">
                        <input
                          className="signinbtn"
                          type="submit"
                          onSubmit={validateForm}
                          value={isloading ? "processing..." : "Preview"}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StaffOnboarding3;
