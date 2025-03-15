import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PortfolioDetail from "./components/PortfolioDetail/PortfolioDetail";
import PortfolioCreator from "./components/PortfolioCreator/PortfolioCreator";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio/create" element={<PortfolioCreator />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
