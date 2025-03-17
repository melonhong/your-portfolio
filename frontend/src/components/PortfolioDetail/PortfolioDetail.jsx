import { getPortfolio } from "../../utils/getPortfolio";
import { checkAuth } from "../../utils/checkAuth";

const PortfolioDetail = () => {
  const { user, loading } = checkAuth();
  const portfolio = getPortfolio();

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
