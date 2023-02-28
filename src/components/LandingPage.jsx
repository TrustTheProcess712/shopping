import { useEffect, useState } from "react";

const LandingPage = ({ children }) => {
  return (
    <>
      <h3>
        Welcome to Go Shopping please search below for the products you need...
      </h3>
      <div className='landing-page'>{children}</div>
    </>
  );
};

export default LandingPage;
