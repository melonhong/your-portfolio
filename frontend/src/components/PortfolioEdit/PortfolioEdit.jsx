import { getPortfolio } from "../../utils/getPortfolio";
import PortfolioForm from "../Common/PortfolioForm";

const PortfolioEdit = () => {
  const prePortfolio = getPortfolio();
  return (
    <>
      <h1>Create your portfolio!</h1>
      <PortfolioForm method="PATCH" prePortfolio={prePortfolio} />
    </>
  );
};

export default PortfolioEdit;
