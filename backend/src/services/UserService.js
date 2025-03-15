class UserService {
  constructor(User) {
    this.userModel = User; // User 모델을 주입받음
  }

  // 사용자 생성 또는 조회
  async findOrCreate({ originalUsername, email }) {
    try {
      const [user, created] = await this.userModel.findOrCreate({
        where: { email: email }, // 이메일로 사용자 찾기
        defaults: {
          username: originalUsername, // 새로 생성할 경우 사용자 이름
        },
      });
      return [user, created]; // 사용자와 생성 여부 반환
    } catch (error) {
      throw new Error("Failed to find or create user: " + error.message);
    }
  }

  // 나머지 CRUD 메서드...
}

module.exports = UserService; // UserService를 모듈로 내보냄
