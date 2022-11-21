import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AdminNavbar from "../views/Dashboard/AdminDashboard/DashboardComponents/AdminDashNav";
import AdminSidebar from "../views/Dashboard/AdminDashboard/DashboardComponents/Adminsidebar";

const Admin = ({ children, error, success }) => {
  const history = useHistory;
  useEffect(() => {
    //console.log(error);
  }, []);
  return (
    <>
     <AdminNavbar />
      <div className="row">
        <AdminSidebar dashboard={true} />
        <div className="col-md-9 dashboardmainarea">
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        {/* {error && <Error message={error} />} */}
        {error && toast.error(error)}
        {/* {success && <Success message={success} />} */}
        {success && toast.success(success)}
      </div>
    </>
  );
};

export default Admin;
