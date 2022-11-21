import React, { useState } from "react";
import Chart from "react-google-charts";

const DrugCategory = (props) => {
  const [state, setState] = useState<any>({
   chart:[]
  });

  return (
    <>
      <div className="col-md-3 charthome">
        <div className="sidebarUpdate1 text-left">Inventory</div>
        <div className="">
          <Chart
            width={"200px"}
            height={"200px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Task", "Hours per Day"],
              ["Work", 11],
              ["Commute", 2],
              ["Watch TV", 2],
              ["Sleep", 7],
            ]}
            options={{
              title: "",
              legend: { position: "none" },
              hAxis: { textPosition: "none" },
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
        <div className="wrappert">
          <div className="drug1">
            <span className="drugtile drugtilecolor1"></span> Purchase
          </div>
          <div className="drug1">
            <span className="drugtile drugtilecolor2"></span>Items Sold
          </div>
          <div className="drug2">
            <span className="drugtile drugtilecolor3"></span>
            Products
          </div>
        </div>
      </div>
    </>
  );
};
export default DrugCategory;
