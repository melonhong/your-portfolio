const express = require("express");
const app = express();
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

const db = require("./models/index");

const corsMiddleware = require("./middlewares/cors");

const authRouter = require("./routes/authRouter");
const portfolioRouter = require("./routes/portfolioRouter");

require("./config/passport"); // Google 전략 설정 파일 불러오기

// 포트 설정
app.set("port", process.env.PORT || 8080);

// 로그 설정
app.use(morgan("combined"));

// 세션 설정
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // HTTPS에서는 true (개발 환경에서는 false)
      httpOnly: true, // JavaScript에서 접근 불가
      sameSite: "lax", // 또는 "none" (교차 출처 요청 허용 시)
    },
  })
);

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// CORS 에러 해결
app.use(corsMiddleware);

// 내장된 JSON 파싱 미들웨어 사용
app.use(express.json());

// 데이터베이스 접속
try {
  db.sequelize.sync({ force: true });
  console.log("Database connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// 라우팅
// app.get("/", (req, res) => {
//   res.json({ message: "hello from nodemon" });
// });

// 인증 라우트 사용
app.use("/auth", authRouter);

app.use("/portfolio", portfolioRouter);

// const PortfolioController = require("./controllers/PortfolioController");
// const portfolioController = new PortfolioController();
// app.get("/portfolios", (req, res) =>
//   portfolioController.findAllPortfolios(req, res)
// );

app.get("/user", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.status(200).json(req.user); // 인증된 사용자 데이터를 JSON 응답으로 보냄
  } else {
    res.status(200).json(null);
  }
});

// 서버 시작
app.listen(app.get("port"), () => {
  console.log(`Server started in port ${app.get("port")}`);
});
