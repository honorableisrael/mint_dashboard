import React, { useState, useEffect } from "react";
import { Col, Row, Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Connector from "../../Services/services";
import fclogo from "../../../assets/Agrina_new_2.png";

const ForgotPassword = (props) => {
  const [state, setState] = useState({
    email: "",
    isloading: false,
    errorMessage: "",
    success: "",
  });
  const { email, success, errorMessage, isloading } = state;
  const validateForm = (e) => {
    e.preventDefault();
    if (!email) {
      return setState({
        ...state,
        errorMessage: "Email address is required",
      });
    }
    submitForm();
  };
  const submitForm = async () => {
    setState({
      ...state,
      isloading: true,
    });
    try {
      const response = await Connector.post(`/requestpasswordreset/${email}`);
      const {
        data: { data },
      } = response;
      setState({
        ...state,
        success:
          "A token has been sent to the provided email address, please check your inbox to proceed",
        isloading: false,
      });
    } catch (error) {
      if (error?.response?.status == 404) {
        setState({
          ...state,
          errorMessage: "Failed to reset password, email does not exist",
          isloading: false,
        });
      }
    }
  };
  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
    });
  };
  return (
    <>
      <div className="container-fluid lgwrap lgwra2p">
        <div className="row justify-center">
          <div className="col-md-5 loginformbody">
            <div className="ft1"><img src={fclogo}  className="logo2 logoz2"/></div>
            <div className="ft3">Recover your Account</div>
            <form className="form-wrapper" onSubmit={validateForm}>
              <div className="form-header">
                {errorMessage && (
                  <div className="signinalertmssg">
                    <Alert variant={"danger"}>{errorMessage}</Alert>
                  </div>
                )}
                {success && (
                  <div className="signinalertmssg">
                    <Alert variant={"info"}>{success}</Alert>
                  </div>
                )}
              </div>
              <div className="padded-signin-wrapper">
                <label className="inputlabel">
                  <span className="rdfrmlbl">
                    {" "}
                    Email Address <span className="text-danger">*</span>{" "}
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={onchange}
                    placeholder="Enter your Email Address"
                    size={60}
                    className="form-control forminput"
                  />
                </label>
                <div className="forgotpassword">
                  <Link to="/login">Login </Link>
                </div>
                <div className="form-btn-wrapper loginbtdv">
                  <input
                    className="signinbtn"
                    type="submit"
                    onSubmit={validateForm}
                    value={isloading ? "Submitting..." : "Submit"}
                  />
                </div>
                <p className="signuprgqt1">© Farmcrowdy</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
