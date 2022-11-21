import React, { useState } from "react";
import SideNav from "react-simple-sidenav";
import { ToastContainer } from "react-toastify";
import logo1 from "../../../../../assets/TransMonitor.png";
import bell from "../../../../../assets/bell.svg";
import useravatar from "../../../../../assets/useravatar.png";
import { getAdminUtils } from "../../../../Services/helper";
import Navlist from "./Navlist_";

const AdminNavbar = () => {
  const [state, setState] = React.useState({
    NavisOpen: true,
    theUserIsLoggedIn: false,
    isloading: false,
    user_details: {},
  });
  const [showNav, setShowNav]: any = useState(false);
  const logout = () => {};
  //console.log(showNav)
  const { NavisOpen, isloading, user_details, drop_down_open }: any = state;
  return (
    <>
      <div className='row dashboardnav itemscenter'>
        <div className='mobileham' onClick={() => setShowNav(true)}>
          {/* {!NavisOpen ? ( */}
          <>
            <div className='ham1 animated slideInLeft'></div>
            <div className='ham2 animated slideInLeft'></div>
            <div className='ham3 animated slideInLeft'></div>
          </>
        </div>
        <div className='col-md-12 width-fit-content navitem01'>
          <div className='col-md-4 navitem01 ml-3'>
            <img src={logo1} className='logoz2' />
            <span>
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11.6573 12L7.66054 8.00325C6.77101 8.80345 5.60422 9.22472 4.40868 9.17734C3.21314 9.12995 2.08334 8.61766 1.25994 7.74958C0.436537 6.8815 -0.0153972 5.72623 0.000400647 4.52986C0.0161985 3.33348 0.49848 2.19056 1.34452 1.34452C2.19056 0.49848 3.33348 0.0161985 4.52986 0.000400647C5.72623 -0.0153972 6.8815 0.436537 7.74958 1.25994C8.61766 2.08334 9.12995 3.21314 9.17734 4.40868C9.22472 5.60422 8.80345 6.77101 8.00325 7.66054L12 11.6573L11.6573 12ZM4.5954 0.492454C3.7833 0.489588 2.98862 0.727783 2.31199 1.17687C1.63536 1.62597 1.10723 2.26575 0.794463 3.01521C0.481699 3.76467 0.398379 4.59008 0.555052 5.38693C0.711726 6.18377 1.10135 6.9162 1.67457 7.49146C2.2478 8.06671 2.97884 8.45892 3.77513 8.61841C4.57142 8.7779 5.39712 8.6975 6.14768 8.38739C6.89824 8.07727 7.53989 7.5514 7.99137 6.87637C8.44285 6.20133 8.68385 5.4075 8.68386 4.5954C8.68259 3.51012 8.2519 2.46945 7.48585 1.70069C6.71981 0.931925 5.68066 0.497555 4.5954 0.492454V0.492454Z'
                  fill='#0E1D25'
                />
              </svg>
              <input type='text' placeholder='Search...' className='search_' />
            </span>
          </div>
          <div className='navitem02'>
            <span className='noto'>Support</span>
            <span className='noto'>FAQ</span>
            <span className='noto'>
              <img src={bell} className='bell' alt='bell' />
            </span>
            <div className='noto text-right'>
              <small> Hello </small> <br />
              Oluwaleke Ojo
            </div>
            <div>
              <img src={useravatar} alt="useravatar1" />
            </div>
          </div>
        </div>
      </div>
      <SideNav
        showNav={showNav}
        // style={{ background: showNav ? "rgba(251, 251, 251, 1)" : "none" }}
        navStyle={{ width: "70%", background: "rgba(251, 251, 251, 1)" }}
        onHideNav={() => setShowNav(false)}
        titleStyle={{
          backgroundColor: "#fff",
          color: "#444444",
          paddingLeft: 10,
          paddingBottom: 0,
          paddingTop: 0,
          fontSize: 17,
          textAlign: "left",
        }}
        itemHoverStyle={{
          backgroundColor: "rgba(251, 251, 251, 1) !important",
        }}
        className={"mobile_navbar_"}
        itemStyle={{ backgroundColor: "" }}
        title={[
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "18px 10px 18px 17px",
            }}>
            <div className='MediPharmssistant'></div>
            <span className='fa closemenu' onClick={() => setShowNav(false)}>
              &#215;
            </span>
          </div>,
        ]}
        items={[
          <div className='col-md-3 sidebarcontainer sidetainer'>
            <div className='MediPharmssistant'>
              <img src={logo1} />
            </div>{" "}
            <Navlist />
          </div>,
        ]}
      />
      <ToastContainer />
    </>
  );
};

export default AdminNavbar;
