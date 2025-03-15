const UserService = require("../services/UserService");
const { User } = require("../models");

class UserController {
  constructor() {
    this.userService = new UserService(User); // UserService 인스턴스 생성 (모델을 전달)
  }

  // 사용자 생성 또는 조회
  async findOrCreateUser(req, res) {
    try {
      const { email, username } = req.user;
      const originalUsername = username.familyName + username.givenName;
      const [user, created] = await this.userService.findOrCreate({
        originalUsername,
        email,
      });
      req.session.userId = user.id; // 사용자 ID를 세션에 저장
      res.redirect("http://localhost:5173/redirect");
    } catch (error) {
      console.error("Error in findOrCreateUser:", error); // 에러 출력
      res.status(400).json({ message: error.message }); // 에러 처리
    }
  }
}

// UserController 클래스를 모듈로 내보냄
module.exports = UserController;
