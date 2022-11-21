import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DashbaordGraph = (props) => {
  const [state, setState] = useState<any>({
    series: [
      {
        name: "Sales Revenue",
        data: [],
      },
    ],
    options: {
      chart: {
        id: "Sales Revenue",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: "Sales Revenue",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
    },
    //second graph
    series1: [
      {
        name: "Cost of Deployment",
        data: [],
      },
    ],
    options1: {
      chart: {
        id: "",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: "Cost of Deployment",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
    },
  });

  return (
    <>
      <div className="grph34 carderw_no001">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};
export default DashbaordGraph;
