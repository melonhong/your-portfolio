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

  // 포트폴리오 아이디로 포트폴리오 조회
  async findByPortfolioId(portfolioId) {
    try {
      const portfolio = await this.portfolioModel.findByPk(portfolioId); // portfolioId를 인자로 전달
      return portfolio;
    } catch (error) {
      throw new Error("Failed to find portfolio: " + error.message);
    }
  }

  // 유저 아이디로 포트폴리오 생성
  async createByUserId(userId, portfolioData) {
    try {
      // 사용자 ID로 기존 포트폴리오 찾기
      const existingPortfolio = await this.findByUserId(userId);

      // 기존 포트폴리오가 없는 경우에만 새 포트폴리오 생성
      if (!existingPortfolio) {
        const newPortfolio = await this.portfolioModel.create({
          user_id: userId,
          title: portfolioData.title,
          description: portfolioData.description,
        });

        return newPortfolio;
      } else {
        // 이미 존재하는 포트폴리오가 있을 때의 처리
        throw new Error("Portfolio already exists for this user.");
      }
    } catch (error) {
      throw new Error(
        `Failed to create portfolio for user ID ${userId}: ${error.message}`
      );
    }
  }

  // 모든 포트폴리오 조회 -> 페이지 단위로 바꾸기
  async findAllByPage() {
    try {
      const portfolios = await this.portfolioModel.findAll({ where: {} });
      return portfolios;
    } catch (error) {
      throw new Error(`Failed to get all portfolios: ${error.message}`);
    }
  }
}

module.exports = PortfolioService;
