const express = require("express");
const app = express();
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

const db = require("./models/index");

const corsMiddleware = require("./middlewares/cors");

const authRoutes = require("./routes/auth");
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
    saveUninitialized: true,
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
app.use("/auth", authRoutes);

// 메인 페이지
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`
      <h1>Welcome, ${req.user.name}</h1>
      <p>Email: ${req.user.email}</p>
      <a href="/auth/logout">Logout</a> <!-- 로그아웃 링크 -->
    `);
  } else {
    res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
  }
});

// 서버 시작
app.listen(app.get("port"), () => {
  console.log(`Server started in port ${app.get("port")}`);
});
