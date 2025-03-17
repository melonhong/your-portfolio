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

  // 페이지 단위로 포트폴리오 조회
  async findAllByPage(page = 1, limit = 5) {
    try {
      const offset = (page - 1) * limit; // 페이지에 따라 건너뛸 포트폴리오 수
      // 조회한 포트폴리오와 전체 포트폴리오 수를 가져옴
      const result = await this.portfolioModel.findAndCountAll({
        limit: limit,
        offset: offset,
      });
      const totalPage = Math.ceil(result.count / limit); // 모든 페이지 수
      const portfolios = result.rows; // 현재 페이지의 포트폴리오
      return { totalPage, portfolios };
    } catch (error) {
      throw new Error(`Failed to get all portfolios: ${error.message}`);
    }
  }

  // 포트폴리오 수정
  async update(editedPortfolio) {
    try {
      const { id, title, description } = editedPortfolio;

      const prePortfolio = await this.findByPortfolioId(id);

      if (prePortfolio) {
        await this.portfolioModel.update(
          { title: title, description: description },
          { where: { id: id } }
        );
        return await this.findByPortfolioId(id);
      } else {
        throw new Error("Portfolio doesn't exist.");
      }
    } catch (error) {
      throw new Error(`Failed to update portfolio.: ${error.message}`);
    }
  }
}

module.exports = PortfolioService;
