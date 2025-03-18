const express = require("express");
const passport = require("passport");

const UserController = require("../controllers/UserController");
const userController = new UserController(); // UserController 인스턴스 생성

const checkAuth = require("../middlewares/checkAuth");

const router = express.Router();

// 인증 경로 설정
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google 콜백 URL
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => userController.findOrCreateUser(req, res)
);

// 사용자 로그인 확인
router.get("/check", checkAuth, (req, res) => {
  res.status(200).json({
    user: req.user,
    userId: req.session.userId,
  });
});

router.get("/logout", (req, res) => {
  // auth/logout 으로 해야 함
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).send("Logout error"); // 로그아웃 중 에러 발생 시 처리
    }
    res.redirect("http://localhost:5173"); // 로그아웃 후 메인 페이지로 리디렉션
  });
});

module.exports = router;
