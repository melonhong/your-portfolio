import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PortfolioCreator from "./components/PortfolioCreator/PortfolioCreator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/create" element={<PortfolioCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
