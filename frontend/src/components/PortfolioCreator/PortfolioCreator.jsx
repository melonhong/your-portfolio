import React, { useEffect, useState } from "react";
import PortfolioForm from "./PortfolioForm";
import { checkAuth } from "../../utils/checkAuth";
import Login from "../Auth/Login";

const PortfolioCreator = () => {
  const { user, loading } = checkAuth();

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : user ? (
        <>
          <h1>Create your portfolio!</h1>
          <PortfolioForm />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
export default PortfolioCreator;
