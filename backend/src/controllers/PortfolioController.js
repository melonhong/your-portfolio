const PortfolioService = require("../services/PortfolioService");
const { Portfolio } = require("../models");

class PortfolioController {
  constructor() {
    this.portfolioService = new PortfolioService(Portfolio);
  }

  // 포트폴리오 생성
  async createPortfolio(req, res) {
    try {
      const portfolioData = req.body;
      const userId = req.session.userId;
      const newPortfolio = this.portfolioService.createByUserId(
        userId,
        portfolioData
      );
      res.status(200).json(newPortfolio.json());
    } catch {
      console.error("Error in findcreatePortfolioOrCreateUser:", error); // 에러 출력
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = PortfolioController;
