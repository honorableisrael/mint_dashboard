import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";

const TableDropdownSupplier = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow]: any =
    React.useState(false);

  const btnDropdownRef: any = React.createRef();
  const popoverDropdownRef: any = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  //console.log(dropdownPopoverShow);
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3 colreverse"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <svg
          width="4"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_50_573"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="4"
            height="16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_50_573)">
            <rect x="-10" y="-4" width="24" height="24" fill="#9EA0A5" />
          </g>
        </svg>
      </a>
      {dropdownPopoverShow && (
        <div className="reltv">
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 colreverse"
            }
          >
            {/* <span
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
            >
              Edit
            </span> */}
            {/* {!props.company_info?.is_confirmed && (
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
              >
                Confirm
              </a>
            )} */}

            {/* {props.company_info?.deleted_at && (
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
              >
                Restore
              </a>
            )} */}
              {/* <a
                href={`/admin/staffs/${props?.company_info?.id}/ORGANISATION`}
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
              >
                View Staffs
              </a> */}
              <a
                href={`/admin/supplier/edit/${props?.company_info?.id}`}
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
              >
               Edit
              </a>

            {/* <a className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            } href={`/admin/business/${props?.eachbusiness?.id}/locations`}>
            Edit
        </a> */}
          </div>
        </div>
      )}
    </>
  );
};

export default TableDropdownSupplier;
