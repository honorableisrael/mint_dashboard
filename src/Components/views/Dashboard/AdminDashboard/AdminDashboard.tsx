import React, { useEffect } from "react";
import AdminNavbar from "./DashboardComponents/AdminDashNav";
import AdminSidebar from "./DashboardComponents/Adminsidebar";
import AdminDashboardCards from "./DashboardComponents/Dasboardcards";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../../../Actions";
import { FormatAmount } from "../../../../config";
import ReactApexChart from "react-apexcharts";
import RightBtn from "../../../../assets/Right Button.png";
import LeftBtn from "../../../../assets/Left Button.png";
import downarrow from "../../../../assets/downarrow.png";
import chartdata from "../../../../assets/big grapgh.svg";

import { useState } from "react";

const AdminDashboard = () => {
  const [state, setState] = useState<any>({});

  return (
    <>
      <div className='contaniner-fluid'>
        <div className='dashboard_main_area dashboard_000 dashboard_000223 pb-5 row'>
          <AdminDashboardCards Analytics={[]} />
          <div className='col-md-12 expand12 pr0'>
            <div className='row'>
              <div className='col-md-7 dashboard_card_container'>
                <div className='top_container'>
                  <h6 className='font-weight-bolder'> Today: 5, Aug 2018</h6>
                  <div>
                    <span>
                      <select name='' id='' className='select_custom mr-5'>
                        <option value=''>1 Jan - 1 Jun</option>
                      </select>
                    </span>
                    <span>
                      <img src={LeftBtn} className='mr-1' alt='' />{" "}
                      <img src={RightBtn} className='' alt='' />
                    </span>
                  </div>
                </div>
                <div className='' style={{ overflow: "hidden" }}>
                  <div className="datedata">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>March</span>
                    <span>April</span>
                    <span>May</span>
                  </div>
                  <img src={chartdata} alt='' />
                </div>
              </div>
              <div className='col-md-5 pl-1'>
                <div className='dashboard_card_container  p-3'>
                  <h6 className='pb-1 pt-2 font-weight-bold'>Orders</h6>
                  <div className='rating1 mb-2'>
                    <div className='rating-green'></div>
                    <div className='rating-yellow'></div>
                  </div>
                  <div className='pt-1'>
                    Pending Orders: <span className='custom_yellow'> 20</span>
                  </div>
                  <div className='pt-1'>
                    Reconcilled Orders:{" "}
                    <span className='custom_green'> 80</span>
                  </div>
                  <div className='pt-1'>
                    Total Orders: <span className='custom_blue'> 100</span>
                  </div>
                </div>
                <div className='dashboard_card_container  p-3'>
                  <h6 className='pb-1 pt-2 font-weight-bold'>Payments</h6>
                  <div className='rating1 mb-2'>
                    <div className='rating-green'></div>
                    <div className='rating-yellow'></div>
                  </div>
                  <div className='pt-1'>
                    Un-reconcilled Payments:{" "}
                    <span className='custom_yellow'> 20</span>
                  </div>
                  <div className='pt-1'>
                    Reconcilled Payments:{" "}
                    <span className='custom_green'> 80</span>
                  </div>
                  <div className='pt-1'>
                    Total Payments: <span className='custom_blue'> 100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-3 mb-3'>
              <div className='col-md-12'>
                <h3 className='pb-1 pt-2 font-weight-bold'>Payments</h3>
              </div>
              <div className='col-md-12 pagination-text'>
                Showing{" "}
                <span className='custom_blue px-2'>
                  20{" "}
                  <svg
                    width='9'
                    height='6'
                    viewBox='0 0 9 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M8 1L4.5 5L1 1' stroke='#1875F0' />
                  </svg>
                </span>{" "}
                out of 500 payments{" "}
                <span className='searchcontainer ml-5'>
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M10.626 11.0884L10.7144 11.1768L10.8028 11.0884L11.0884 10.8028L11.1768 10.7144L11.0884 10.626L7.84034 7.37797C8.47823 6.62458 8.81189 5.6582 8.77268 4.66895C8.73191 3.64011 8.29105 2.66785 7.54401 1.95926C6.79697 1.25067 5.80279 0.86175 4.77323 0.875345C3.74368 0.88894 2.76011 1.30397 2.03204 2.03204C1.30397 2.76011 0.88894 3.74368 0.875345 4.77323C0.86175 5.80279 1.25067 6.79697 1.95926 7.54401C2.66785 8.29105 3.64011 8.73191 4.66895 8.77268C5.6582 8.81189 6.62458 8.47823 7.37797 7.84034L10.626 11.0884ZM2.99578 2.08488C3.53901 1.72433 4.177 1.53309 4.82898 1.53538C5.70031 1.53949 6.53462 1.88825 7.14967 2.50547C7.76473 3.12271 8.11053 3.95827 8.11155 4.82964C8.11152 5.4816 7.91802 6.11889 7.55557 6.66081C7.19309 7.20278 6.67793 7.62498 6.07533 7.87396C5.47273 8.12294 4.8098 8.18749 4.17049 8.05944C3.53118 7.93139 2.94425 7.6165 2.48402 7.15465C2.0238 6.69279 1.71098 6.10475 1.5852 5.46499C1.45941 4.82523 1.5263 4.16253 1.77741 3.56081C2.02852 2.9591 2.45254 2.44544 2.99578 2.08488Z'
                      fill='#787878'
                      stroke='#787878'
                      stroke-width='0.25'
                    />
                  </svg>
                  <input
                    type='text'
                    className='searchpayments search_ mr-5'
                    placeholder='Search payments'
                  />
                  <span className='ml-5'>
                    <span className='mr-1'>Show</span>
                    <select name='' id='' className='select_custom mr-5'>
                      <option value=''>All</option>
                      <option value=''>Reconciled</option>
                      <option value=''>Un-reconciled</option>
                      <option value=''>Settled</option>
                      <option value=''>Un-settled</option>
                    </select>
                  </span>
                </span>
              </div>
            </div>

            <table className='table'>
              <thead className='thead-light'>
                <tr>
                  <th scope='col'>Item type</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Transaction no</th>
                  <th scope='col'>Time</th>
                  <th scope='col'>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>
                    {" "}
                    <span className='inlineblockitem'>
                      <span className='circletext'>VW</span>{" "}
                    </span>
                    Apple Mac Book 15” 250 SSD 12GB
                  </th>
                  <td className='ptop5'>
                    <span className='item-type'></span> $73430
                  </td>
                  <td className='ptop5'>1234567890</td>
                  <td className='ptop5'>@mdo</td>
                  <td className='ptop5'>
                    <span className='unreconcilled'>
                      {" "}
                      <svg
                        width='9'
                        height='9'
                        className='mr-1'
                        viewBox='0 0 9 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='4.5' cy='4.5' r='4.5' fill='#C4C4C4' />
                      </svg>
                      Un-Reconcilled
                    </span>
                  </td>
                  <td className='ptop5'>
                    <img src={downarrow} className='downarrow' alt='' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    {" "}
                    <span className='inlineblockitem'>
                      <span className='circletext'>VW</span>{" "}
                    </span>
                    Apple Mac Book 15” 250 SSD 12GB
                  </th>
                  <td className='ptop5'>$73430</td>
                  <td className='ptop5'>1234567890</td>
                  <td className='ptop5'>@fat</td>
                  <td className='ptop5'>
                    <span className='pending'>
                      {" "}
                      <svg
                        width='9'
                        height='9'
                        className='mr-1'
                        viewBox='0 0 9 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='4.5' cy='4.5' r='4.5' fill='#EBC315' />
                      </svg>
                      Pending
                    </span>
                  </td>
                  <td className='ptop5'>
                    <img src={downarrow} className='downarrow' alt='' />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>
                    {" "}
                    <span className='inlineblockitem'>
                      <span className='circletext'>VW</span>{" "}
                    </span>
                    Apple Mac Book 15” 250 SSD 12GB
                  </th>
                  <td className='ptop5'>$73430</td>
                  <td className='ptop5'>1234567890</td>
                  <td className='ptop5'>@twitter</td>
                  <td className='ptop5'>
                    <span className='Reconcilled'>
                      {" "}
                      <svg
                        width='9'
                        height='9'
                        viewBox='0 0 9 9'
                        fill='none'
                        className='mr-1'
                        xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='4.5' cy='4.5' r='4.5' fill='#27AE60' />
                      </svg>
                      Reconcilled
                    </span>
                  </td>
                  <td className='ptop5'>
                    <img src={downarrow} className='downarrow' alt='' />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='pagecontainer'>
              <span>Showing 1 to 10 of 500 entries</span>
              <nav aria-label='Page navigation example'>
                <ul className='pagination justify-content-center'>
                  <li className='page-item disabled'>
                    <a className='page-link' href='#'>
                      Previous
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
