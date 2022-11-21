import React from "react";
import drug from "../../../../../assets/drug.png";
import money from "../../../../../assets/money.png";

const Cards = (props) => {
  return (
    <div className='card1'>
      <div className=''>
        <div className='cardfirst'>{props.title}</div>
        <div className='cardfirst'>
          <h6 className='font-weight-bold'> {props.card_value}</h6>
        </div>
      </div>
      <svg
        width='64'
        height='38'
        viewBox='0 0 64 38'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z'
          fill='url(#paint0_linear_679_3)'
        />
        <path
          d='M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1'
          stroke='#0294FF'
        />
        <defs>
          <linearGradient
            id='paint0_linear_679_3'
            x1='5.98077'
            y1='13.257'
            x2='5.98077'
            y2='44.3122'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#0294FF' stop-opacity='0.126274' />
            <stop offset='1' stop-color='white' stop-opacity='0.01' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const AdminDashboardCards = (props) => {
  //console.log(props)
  return (
    <>
      <div className='col-md-12 _main_area2 _main_a2'>
        <Cards title={`Daily Transaction Volume`} card_value={"2,342"} />
        <Cards title={`Daily Transaction Value`} card_value={"₦4,000,000"} />
        <Cards title={`Total Transaction Volume`} card_value={"452,000"} />
        <Cards title={`Total Transaction Value`} card_value={"₦4,000,000"} />
      </div>
    </>
  );
};

export default AdminDashboardCards;
