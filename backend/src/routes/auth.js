const express = require("express");
const passport = require("passport");

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
  (req, res) => {
    // 성공적으로 인증된 경우
    res.redirect("http://localhost:5173"); // 성공하면 프론트엔드로 이동
  }
);

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
