import React, { useEffect } from "react";
import { toast } from "react-toastify";


const Auth = ({ children, error }) => {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">

          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          ></div>
          {children}

          {/* <FooterSmall absolute /> */}
          <div className="absolute bottom-0 left-0">
            {error && toast.error(error)}
          </div>
        </section>
      </main>
    </>
  );
}

export default (Auth)