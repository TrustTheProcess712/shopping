import { useEffect, useState } from "react";

const LandingPage = ({ children }) => {
  return (
    <>
      <h3 className='landing-page-description'>
        Welcome to Go Shopping please search below for the products you need...
      </h3>
      <div className='grid-container'>{children}</div>
    </>
  );
};

export default LandingPage;
