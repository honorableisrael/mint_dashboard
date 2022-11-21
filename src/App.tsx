import React, { Component } from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { renderRoutes, routes } from "./routes";
import "./Components/assets/styles/index.css";
import "./Components/views/Dashboard/AdminDashboard/index.css";
import { History } from "history";
import "react-toastify/dist/ReactToastify.css";
require('dotenv').config()

const App = ({ history }) => {
  return (
    <>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </>
  );
};
export default App;