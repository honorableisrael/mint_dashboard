import React, { useState } from "react";
import Cube from "../../../../../assets/Cube-1.svg";
import RoundCube from "../../../../../assets/RoundCube.svg";
import notifications_active from "../../../../../assets/notifications_active.svg";
import { Table } from "react-bootstrap";

const RecentActivities = (props) => {
  const [state, setState] = useState<any>({
    activities: [],
  });

  return (
    <>
      <div className="col-md-4 charthome">
        <div className="sidebarUpdate1 text-left">Low stock items</div>
        <Table className="table" responsive striped>
          <thead className="">
            <tr>
              <th scope="col"> Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {props?.Analytics?.low_stock_item?.map((data, i) => (
              <tr>
                <th scope="row">
                  <span>
                    <img src={Cube} alt="" />
                  </span>{" "}
                  {data?.name}
                </th>
                <td>{data?.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default RecentActivities;
