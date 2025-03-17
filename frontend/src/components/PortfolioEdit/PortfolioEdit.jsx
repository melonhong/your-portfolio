import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortfolio } from "../../utils/getPortfolio";

const PortfolioEdit = () => {
  const portfolio = getPortfolio();

  return (
    <>
      <h1>Portfolio Edit</h1>
      <div>
        {portfolio ? (
          <>
            <h2>{portfolio.title}</h2>
            <p>{portfolio.description}</p>
          </>
        ) : (
          <>
            <h2>No Portfolio</h2>
          </>
        )}
      </div>
    </>
  );
};

export default PortfolioEdit;
