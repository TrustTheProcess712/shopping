import { useEffect, useState } from "react";

const LandingPage = ({ children }) => {
  return (
    <>
      <div className='landing-page'>
        <h3 className='landing-page-description'>
          Welcome to Go Shopping please use the search feature below!
        </h3>
        {children}
      </div>
    </>
  );
};

export default LandingPage;
