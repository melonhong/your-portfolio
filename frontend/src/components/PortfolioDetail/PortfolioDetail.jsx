import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
  const [portfolio, setPortfolio] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getPortfolio = async () => {
      const data = await (
        await fetch(`http://localhost:8080/portfolio/detail/${id}`, {
          method: "GET",
        })
      ).json();
      console.log(data);
      setPortfolio(data);
    };
    getPortfolio();
  }, [id]);
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
