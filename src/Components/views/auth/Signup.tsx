import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Connector from "../../Services/services";
import fclogo from "../../../assets/Agrina_new_2.png";
import { allCountries, all_states } from "../../../country";

const Signup = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    isloading: false,
    first: true,
    second: false,
    errorMessage: "",
    organization_name: "",
    address: "",
    business_country: "",
    warehouse_name: "",
    business_state: "",
    industry: "",
    website: "",
    open: false,
  });
  const {
    email,
    password,
    first_name,
    last_name,
    organization_name,
    errorMessage,
    phone_number,
    open,
    isloading,
    first,
    address,
    website,
    second,
    business_country,
    industry,
    warehouse_name,
    business_state,
  } = state;
  const validateForm = (e) => {
    e.preventDefault();
    if (!email || !last_name || !first_name || !phone_number || !password) {
      return setState({
        ...state,
        errorMessage: "Please fill required fields",
      });
    }
    setState({
      ...state,
      first: false,
      second: true,
    });
  };
  const validateFormStep2 = (e) => {
    e.preventDefault();
    if (
      !organization_name ||
      !industry ||
      !business_country ||
      !business_state ||
      !warehouse_name
    ) {
      return setState({
        ...state,
        errorMessage: "Please fill required fields",
      });
    }
  };
  const submitForm = () => {
    setState({
      ...state,
      isloading: true,
    });
    const data = {
      first_name,
      last_name,
      password,
      password_confirmation: password,
      email,
      phone_number,
      organization_name,
      industry,
      business_country,
      business_state,
      currency: "NGN",
      warehouse_name: "Sam Plant",
    };
    Connector.post(`/super_admin/register`, data)
      .then((res) => {
        //console.log(res);
      })
      .catch((err) => {
        //console.log(err);
      });
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
      <div className="container-fluid lgwrap lgwra2p">
        <div className="row justify-center">
          <div className="col-md-6 loginformbody signup8">
            <div className="ft3">Sign up</div>
            <form className="form-wrapper" onSubmit={validateForm}>
              <div className="form-header">
                {errorMessage && (
                  <div className="signinalertmssg">
                    <Alert variant={"text-danger"} className="text-danger">
                      {errorMessage}
                    </Alert>
                  </div>
                )}
              </div>
              <div className="padded-signin-wrapper">
                {first && (
                  <>
                    <div className="row inputlabel justify-between">
                      <div className="col-md-6 rdfrmlbl2">
                        <span className="rdfrmlbl">
                          {" "}
                          First Name <span className="text-danger">*</span>{" "}
                        </span>
                        <input
                          type="text"
                          name="first_name"
                          value={first_name}
                          onChange={onchange}
                          placeholder="Enter your First Name"
                          size={60}
                          className="form-control forminput"
                        />
                      </div>
                      <div className="col-md-6 rdfrmlbl2right">
                        <span className="rdfrmlbl">
                          {" "}
                          Last Name <span className="text-danger">*</span>{" "}
                        </span>
                        <input
                          type="text"
                          name="last_name"
                          value={last_name}
                          onChange={onchange}
                          placeholder="Enter your First Name"
                          size={60}
                          className="form-control forminput"
                        />
                      </div>
                    </div>
                    <label className="inputlabel">
                      <span className="rdfrmlbl">
                        Email Address <span className="text-danger">*</span>
                      </span>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={onchange}
                        placeholder="Enter your email"
                        size={60}
                        className="form-control forminput"
                      />
                    </label>
                    <label className="inputlabel">
                      <span className="rdfrmlbl">
                        Phone <span className="text-danger">*</span>
                      </span>
                      <input
                        type="text"
                        name="phone_number"
                        value={phone_number}
                        onChange={onchange}
                        placeholder="Enter your phone"
                        size={60}
                        className="form-control forminput"
                      />
                    </label>
                    <label className="inputlabel">
                      <span className="rdfrmlbl">
                        Password <span className="text-danger">*</span>
                      </span>
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
                    <div className="forgotpassword font-200 text-dark">
                      <input
                        type="checkbox"
                        name="agreement"
                        className="check_12"
                        id=""
                      />
                      Creating an account means you’re okay with our Terms of
                      Service, Privacy Policy, and our default Notification
                      Settings.
                    </div>
                  </>
                )}
                {second && (
                  <>
                    <div className="row inputlabel justify-between">
                      <div className="col-md-6 rdfrmlbl2">
                        <span className="rdfrmlbl"> Business Name</span>
                        <span className="text-danger">*</span>
                        <input
                          type="text"
                          name="organization_name"
                          value={organization_name}
                          onChange={onchange}
                          placeholder="Enter your Business Name"
                          size={60}
                          className="form-control forminput"
                        />
                      </div>
                      <div className="col-md-6 rdfrmlbl2right">
                        <span className="rdfrmlbl">
                          Industry<span className="text-danger">*</span>
                        </span>
                        <select
                          onChange={onchange}
                          className="form-control forminput"
                          name="industry"
                        >
                          <option></option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Information Technology">
                            Information Technology
                          </option>
                          <option value="Information Technology">
                            Information Technology
                          </option>
                          <option value="Petroleum">Petroleum</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <label className="inputlabel">
                      <span className="rdfrmlbl">Address</span>
                      <span className="text-danger">*</span>
                      <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={onchange}
                        placeholder=""
                        size={60}
                        className="form-control forminput"
                      />
                    </label>
                    <label className="inputlabel">
                      <span className="rdfrmlbl">Website</span>
                      <input
                        type="text"
                        name="website"
                        value={website}
                        onChange={onchange}
                        placeholder=""
                        size={60}
                        className="form-control forminput"
                      />
                    </label>
                    {/* <label className="inputlabel">
                      <span className="rdfrmlbl">Warehouse</span>
                      <span className="text-danger">*</span>
                      <input
                        type="text"
                        name="warehouse_name"
                        value={warehouse_name}
                        onChange={onchange}
                        size={60}
                        className="form-control forminput"
                      />
                    </label> */}
                    <div className="row inputlabel justify-between">
                      <div className="col-md-6 rdfrmlbl2">
                        <span className="rdfrmlbl"> Country</span>
                        <span className="text-danger">*</span>
                        <select
                          onChange={onchange}
                          className="form-control forminput"
                          name="business_country"
                        >
                          <option value={"Nigeria"}>{"Nigeria"}</option>
                          {allCountries.map((data, i) => (
                            <option value={data?.name} key={i}>
                              {data?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 rdfrmlbl2right">
                        <span className="rdfrmlbl">
                          State<span className="text-danger">*</span>
                        </span>
                        <select
                          onChange={onchange}
                          className="form-control forminput"
                          name="business_state"
                        >
                          {all_states.map((data, i) => (
                            <option value={data} key={i}>
                              {data}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="forgotpassword font-200 text-dark">
                      <input
                        type="checkbox"
                        name="agreement"
                        className="check_12"
                        id=""
                      />
                      Creating an account means you’re okay with our Terms of
                      Service, Privacy Policy, and our default Notification
                      Settings.
                    </div>
                  </>
                )}
                <div className="form-btn-wrapper loginbtdv">
                  {first && (
                    <input
                      className="signinbtn"
                      type="button"
                      onClick={validateForm}
                      value={isloading ? "Signing up..." : "Continue"}
                    />
                  )}
                  {second && (
                    <input
                      className="signinbtn"
                      type="button"
                      onClick={submitForm}
                      value={isloading ? "Signing up..." : "Submit"}
                    />
                  )}
                </div>

                <p className="signuprgqt">
                  {" "}
                  <Link to="/login">Have an account? Login </Link>
                </p>

                <p className="signuprgqt1">© Farmcrowdy</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
