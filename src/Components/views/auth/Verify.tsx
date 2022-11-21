import React, { useState, useEffect } from "react";
import { Col, Row, Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Connector from "../../Services/services";
import { setTokenUtils } from "../../Services/helper";

const VerifyCode = (props) => {
  const [state, setState] = useState({
    code: "",
    password: "",
    emailAddress: "",
    newPassword: "",
    isloading: false,
    errorMessage: "",
    success: "",
  });
  const { code, emailAddress, newPassword, success, errorMessage, isloading } =
    state;
  const validateForm = (e) => {
    e.preventDefault();
    if (!newPassword) {
      return setState({
        ...state,
        errorMessage: "New password is required",
      });
    }
    if (!emailAddress) {
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
    const data_ = {
      newPassword,
      emailAddress,
    };
    try {
      const response = await Connector.post(
        `/verify/${props.match.params.code}`,
        data_
      );
      const {
        data: { data },
      } = response;
      //console.log(response);
      setState({
        ...state,
        success: "Successful",
        isloading: false,
      });
      setTimeout(() => {
        window.location.assign("/login");
      }, 3000);
    } catch (error) {
      setState({
        ...state,
        errorMessage:
          error?.response?.data?.newPassword + "Verification failed",
        isloading: false,
      });
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
            <div className="ft3">Verify account</div>
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
                {/* <label className="inputlabel">
                  <span className="rdfrmlbl">
                    {" "}
                    Code <span className="text-danger">*</span>{" "}
                  </span>
                  <input
                    type="text"
                    name="code"
                    value={code}
                    onChange={onchange}
                    placeholder="Enter code"
                    size={60}
                    className="form-control forminput"
                  />
                </label> */}
                <label className="inputlabel">
                  <span className="rdfrmlbl">
                    {" "}
                    Email Address <span className="text-danger">*</span>{" "}
                  </span>
                  <input
                    type="text"
                    name="emailAddress"
                    value={emailAddress}
                    onChange={onchange}
                    placeholder="Enter email"
                    size={60}
                    className="form-control forminput"
                  />
                </label>
                <label className="inputlabel">
                  <span className="rdfrmlbl">
                    {" "}
                    New Password <span className="text-danger">*</span>{" "}
                  </span>
                  <input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={onchange}
                    placeholder="Enter new password"
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

export default VerifyCode;
