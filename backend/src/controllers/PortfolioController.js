const PortfolioService = require("../services/PortfolioService");
const { Portfolio } = require("../models");

class PortfolioController {
  constructor() {
    this.portfolioService = new PortfolioService(Portfolio);
  }

  // 포트폴리오 조회
  async findPortfolio(req, res) {
    try {
      const portfolioId = req.params.id;
      const portfolio = await this.portfolioService.findByPortfolioId(
        portfolioId
      );
      res.status(200).json(portfolio);
    } catch (error) {
      console.error("Error in findPortfolio:", error); // 에러 출력
      res.status(400).json({ message: error.message });
    }
  }

  // 포트폴리오 생성
  async createPortfolio(req, res) {
    try {
      const portfolioData = req.body;
      const userId = req.session.userId;
      const newPortfolio = await this.portfolioService.createByUserId(
        userId,
        portfolioData
      );
      res.status(201).json({
        newPortfolio,
        redirectUrl: `http://localhost:5173/portfolio/${newPortfolio.dataValues.id}`,
      });
    } catch (error) {
      console.error("Error in createPortfolio:", error);
      res.status(400).json({ message: error.message });
    }
  }

  // 모든 포트폴리오 조회
  async findAllPortfolios(req, res) {
    try {
      const portfolios = await this.portfolioService.findAllByPage();
      res.status(200).json(portfolios);
    } catch (error) {
      console.error("Error in findAllPortfolios:", error);
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = PortfolioController;
