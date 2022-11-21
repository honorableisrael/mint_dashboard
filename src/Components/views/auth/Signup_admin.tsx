import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Connector from "../../Services/services";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../../Actions";
import { reloadPage } from "../../Services/helper";

const Signup_Admin = (props) => {
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
    create_org: false,
    address: "",
    business_country: "",
    warehouse_name: "",
    business_state: "",
    success: "",
    industry: "",
    website: "",
    category_name: "",
    organization_id: "",
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
    create_org,
    isloading,
    first,
    category_name,
    organization_id,
    success,
  } = state;
  const validateForm = (e) => {
    e.preventDefault();
    if (
      !email ||
      !last_name ||
      !first_name ||
      !phone_number ||
      !password ||
      !organization_name ||
      !category_name
    ) {
      return setState({
        ...state,
        errorMessage: "Please fill required fields",
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
      first_name,
      last_name,
      password,
      password_confirmation: password,
      email,
      phone_number,
      organization_name,
      organization_id,
      category_name,
    };
    Connector.post(`/admin/register`, data)
      .then((res) => {
        //console.log(res);
        window.scrollTo(0, 0);
        setState({
          ...state,
          isloading: false,
          success:
            "Successfully registered, your account would be activated within the next 24hrs",
        });
        setTimeout(() => {
          props.history.push("/login");
        }, 4000);
      })
      .catch((err) => {
        setState({
          ...state,
          isloading: false,
          errorMessage: err?.response?.data?.error,
        });
        window.scrollTo(0, 0);
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
  let all_organisation: any = [];
  all_organisation = useSelector(
    (state: any) => state.dashboardStats?.all_organisation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const loadDashboardStats = async () => {
      await dispatch(dashboardActions.getAllOrganisation());
    };
    loadDashboardStats();
  }, [dispatch]);
  //console.log(all_organisation);

  const create_organisation = () => {
    setState({
      ...state,
      create_org: true,
    });
  };
  return (
    <>
      <div className='container-fluid lgwrap lgwra2p'>
        <div className='row justify-center'>
          <div className='col-md-6 loginformbody signup8'>
            <div className='ft3'>Admin Sign Up</div>
            <form className='form-wrapper' onSubmit={validateForm}>
              <div className='form-header'>
                {errorMessage && (
                  <div className='signinalertmssg'>
                    <Alert variant={"text-danger"} className='text-danger'>
                      {errorMessage}
                    </Alert>
                  </div>
                )}
                {success && (
                  <div className='signinalertmssg'>
                    <Alert variant={"success"} className='text-success'>
                      {success}
                    </Alert>
                  </div>
                )}
              </div>
              <div className='padded-signin-wrapper'>
                {first && (
                  <>
                    <div className='row inputlabel justify-between'>
                      <div className='col-md-6 rdfrmlbl2'>
                        <span className='rdfrmlbl'>
                          {" "}
                          First Name <span className='text-danger'>*</span>{" "}
                        </span>
                        <input
                          type='text'
                          name='first_name'
                          value={first_name}
                          onChange={onchange}
                          placeholder='Enter your First Name'
                          size={60}
                          className='form-control forminput'
                        />
                      </div>
                      <div className='col-md-6 rdfrmlbl2right'>
                        <span className='rdfrmlbl'>
                          {" "}
                          Last Name <span className='text-danger'>*</span>{" "}
                        </span>
                        <input
                          type='text'
                          name='last_name'
                          value={last_name}
                          onChange={onchange}
                          placeholder='Enter your First Name'
                          size={60}
                          className='form-control forminput'
                        />
                      </div>
                    </div>
                    <label className='inputlabel'>
                      <span className='rdfrmlbl'>
                        Email Address <span className='text-danger'>*</span>
                      </span>
                      <input
                        type='text'
                        name='email'
                        value={email}
                        onChange={onchange}
                        placeholder='Enter your email'
                        size={60}
                        className='form-control forminput'
                      />
                    </label>
                    <label className='inputlabel'>
                      <span className='rdfrmlbl'>
                        Phone <span className='text-danger'>*</span>
                      </span>
                      <input
                        type='text'
                        name='phone_number'
                        value={phone_number}
                        onChange={onchange}
                        placeholder='Enter your phone'
                        size={60}
                        className='form-control forminput'
                      />
                    </label>
                    {/* <label htmlFor="" className="inputlabel">
                      <span className="rdfrmlbl"> Organisation</span>
                      <span className="text-danger">*</span>
                      <select
                        onChange={onchange}
                        className="form-control forminput"
                        name="organization_id"
                      >
                        <option></option>
                        {all_organisation?.map((data, i) => (
                          <option value={data?.id} key={i}>
                            {data?.name}
                          </option>
                        ))}
                      </select>
                    </label> */}
                    <label className='inputlabel'>
                      <span className='rdfrmlbl'>
                        Organisation <span className='text-danger'>*</span>
                      </span>
                      <input
                        type={"text"}
                        name='organization_name'
                        value={organization_name}
                        onChange={onchange}
                        size={60}
                        className='form-control forminput'
                      />
                    </label>
                    <label className='inputlabel'>
                      <span className='rdfrmlbl'>
                        Industry <span className='text-danger'>*</span>
                      </span>
                      <input
                        type={"text"}
                        name='category_name'
                        value={category_name}
                        onChange={onchange}
                        placeholder='E.g Consumer Goods'
                        size={60}
                        className='form-control forminput'
                      />
                    </label>

                    <label className='inputlabel'>
                      <span className='rdfrmlbl'>
                        Password <span className='text-danger'>*</span>
                      </span>
                      <input
                        type={open ? "text" : "password"}
                        name='password'
                        value={password}
                        onChange={onchange}
                        placeholder='Enter your Password'
                        size={60}
                        className='form-control forminput'
                      />
                    </label>
                    <div className='text-righ'>
                      {" "}
                      <span
                        onClick={() => {
                          setState({
                            ...state,
                            open: open ? false : true,
                          });
                        }}>
                        &#128065;
                      </span>
                    </div>
                    <div className='forgotpassword font-200 text-dark'>
                      <input
                        type='checkbox'
                        name='agreement'
                        className='check_12'
                        id=''
                      />
                      Creating an account means you’re okay with our{" "}
                      <a href='https://farmcrowdy.com/privacy' target='blank'>
                        {" "}
                        Terms of Service, Privacy Policy,
                      </a>{" "}
                      and our default Notification Settings.
                    </div>
                  </>
                )}

                <div className='form-btn-wrapper loginbtdv'>
                  {/* {first && (
                    <input
                      className="signinbtn"
                      type="button"
                      onClick={validateForm}
                      value={isloading ? "Signing up..." : "Continue"}
                    />
                  )} */}
                  {first && (
                    <input
                      className='signinbtn'
                      type='button'
                      onClick={validateForm}
                      value={isloading ? "Signing up..." : "Submit"}
                    />
                  )}
                </div>

                <p className='signuprgqt'>
                  {" "}
                  <Link to='/login'>Have an account? Login </Link>
                </p>

                <p className='signuprgqt1'>© Farmcrowdy</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup_Admin;
