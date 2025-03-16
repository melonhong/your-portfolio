import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PortfolioDetail from "./components/PortfolioDetail/PortfolioDetail";
import PortfolioCreator from "./components/PortfolioCreator/PortfolioCreator";
import PortfolioMain from "./components/PortfolioMain/PortfolioMain";
import Login from "./components/Auth/Login";
import Redirect from "./components/Common/Redirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio/create" element={<PortfolioCreator />} />
        <Route path="/portfolio/main" element={<PortfolioMain />} />
        <Route path="/portfolio/detail/:id" element={<PortfolioDetail />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
