import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../../../assets/TransMonitor.png";
import { getAdminUtils } from "../../../../Services/helper";
import Navlist from "./Navlist_";

const AdminSidebar = (props) => {
  //console.log(getAdminUtils("admin_data")?.[0]?.organization_name);
  return (
    <>
      <div className='col-md-3 sidebarcontainer'>
        <div className='MediPharmssistant'>
          <div className='orgname2'>
          </div>
        </div>{" "}
        <Navlist/>
      </div>
    </>
  );
};

export default AdminSidebar;
