// 클래스가 아니기 때문에 파일이 소문자로 시작함
// 라우터 객체 생성
const express = require("express");
const router = express.Router();

// 포트폴리오 객체 생성
const PortfolioController = require("../controllers/PortfolioController");
const portfolioController = new PortfolioController();

// 라우트 설정
router.get("/:id", (req, res) => portfolioController.findPortfolio(req, res));

router.post("/create", (req, res) =>
  portfolioController.createPortfolio(req, res)
);

module.exports = router;
