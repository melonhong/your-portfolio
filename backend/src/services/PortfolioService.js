class PortfolioService {
  constructor(Portfolio) {
    this.portfolioModel = Portfolio;
  }

  // 유저 아이디로 포트폴리오 조회
  async findByUserId(userId) {
    try {
      const portfolio = await this.portfolioModel.findOne({
        where: { user_id: userId },
      });
      return portfolio;
    } catch (error) {
      throw new Error("Failed to find portfolio: " + error);
    }
  }

  // 유저 아이디로 포트폴리오 생성
  async createByUserId(userId, portfolioData) {
    try {
      const prePortfolio = await this.findByUserId(userId);
      const newPortfolio = null;
      if (prePortfolio === null) {
        // 이전에 생성한 포트폴리오가 없다면 새로운 포트폴리오 생성
        newPortfolio = await this.portfolioModel.create({
          user_id: userId,
          title: portfolioData.title,
          description: portfolioData.description,
        });
      }

      return newPortfolio;
    } catch (error) {
      throw new Error("Failed to create portfolio: " + error);
    }
  }
}

module.exports = PortfolioService;
