import React, { useEffect } from "react";
import axios from "axios";
import { deleteToken, errorHandler, getToken } from "./helper";
import { Link, useHistory } from "react-router-dom";
import { notify, root } from '../../config';

const logout = () => {
  deleteToken();
  const redirectUrl = window.location.pathname;
  return (window.location.href = "/login?redirect=" + redirectUrl);
};

const Connector = axios.create();

Connector.interceptors.request.use(
  (config) => {
    config.baseURL = root;
    //console.log(config)
    if (getToken() !== "undefined") {
      config.headers["Authorization"] = getToken() ? `Bearer ${getToken()}` : "";
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Connector.interceptors.response.use(
  (response) => {
    //console.log(response)
    return response;
  },
  (error) => {
    errorHandler(error)
    return Promise.reject(error);
  }
);

export default Connector;