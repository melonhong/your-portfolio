import { useParams } from "react-router-dom";
import { getPortfolio } from "../../utils/getPortfolio";
import { checkAuth } from "../../utils/checkAuth";

const PortfolioDetail = () => {
  const { user } = checkAuth();
  const { id } = useParams();
  const { portfolio, loading, error } = getPortfolio(id);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>Portfolio Detail</h1>
          <div>
            {portfolio ? (
              <>
                <h2>{portfolio.title}</h2>
                <p>{portfolio.description}</p>
                <div>
                  {portfolio.user_id === user.userId ? (
                    <a
                      href={`/portfolio/edit/${portfolio.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </a>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <h2>No Portfolio</h2>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioDetail;
