import { getPortfolio } from "../../utils/getPortfolio";

const PortfolioDetail = () => {
  const portfolio = getPortfolio();
  return (
    <>
      <h1>Portfolio Detail</h1>
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

export default PortfolioDetail;
