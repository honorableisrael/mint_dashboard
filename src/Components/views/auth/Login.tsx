import React, { useState, useEffect } from "react";
import { Col, Row, Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Connector from "../../Services/services";
import { setAdminUtils, setTokenUtils } from "../../Services/helper";
import fclogo from "../../../assets/Agrina_new_2.png";
import { ToastContainer } from "react-toastify";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isloading: false,
    errorMessage: "",
    open: false,
  });
  const { email, password, errorMessage, open, isloading } = state;
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
  const submitForm = async () => {
    setState({
      ...state,
      isloading: true,
    });
    const data_ = {
      email: email,
      password,
    };
    try {
      const response = await Connector.post(`/admin/sign-in`, data_);
      const {
        data: { data },
      } = response;
      setAdminUtils(response.data.data);
    } catch (error) {
      //console.log(error?.response?.data?.errors?.email);
      if (error) {
        return setState({
          ...state,
          errorMessage:
            error?.response?.data?.errors?.email?.join("") ||
            error?.response?.data?.errors?.password?.join("") ||
            error?.response?.message,
        });
      }
      setState({
        ...state,
        errorMessage: "failed to login",
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
            <div className="ft1">
              <img src={fclogo} className="logo2 logoz2" />
            </div>
            <div className="ft3">Login to your Account</div>
            <form className="form-wrapper" onSubmit={validateForm}>
              <div className="form-header">
                {errorMessage && (
                  <div className="signinalertmssg">
                    <Alert variant={"danger"}>{errorMessage}</Alert>
                  </div>
                )}
              </div>
              <div className="padded-signin-wrapper">
                <label className="inputlabel">
                  <span className="rdfrmlbl"> Email Address</span>
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
                <label className="inputlabel">
                  <span className="rdfrmlbl">Password</span>
                  <input
                    type={open ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={onchange}
                    placeholder="Enter your Password"
                    size={60}
                    className="form-control forminput"
                  />
                </label>
                <div className="text-righ">
                  {" "}
                  <span
                    onClick={() => {
                      setState({
                        ...state,
                        open: open ? false : true,
                      });
                    }}
                  >
                    &#128065;
                  </span>
                </div>
                <div className="forgotpassword">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                  {" "}
                  <Link to="/register">Dont have an account? Signup </Link> 
                <div className="form-btn-wrapper loginbtdv">
                  <input
                    className="signinbtn"
                    type="submit"
                    onSubmit={validateForm}
                    value={isloading ? "Logging in..." : "Login"}
                  />
                </div>
                <p className="signuprgqt1">© Farmcrowdy</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
