import CreateForm from "./CreateForm";
import { checkAuth } from "../../utils/checkAuth";

const PortfolioCreator = () => {
  const { user, loading } = checkAuth();

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : user ? (
        <>
          <h1>Create your portfolio!</h1>
          <CreateForm />
        </>
      ) : null}
    </>
  );
};
export default PortfolioCreator;
