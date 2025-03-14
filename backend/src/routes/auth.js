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
    res.redirect("/"); // 메인 페이지로 리디렉션
  }
);

module.exports = router;
