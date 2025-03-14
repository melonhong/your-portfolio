const express = require("express");
const app = express();
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

const db = require("./models/index");

const corsMiddleware = require("./middlewares/cors");

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
app.get("/", (req, res) => {
  res.json({ message: "hello from nodemon" });
});

// 서버 시작
app.listen(app.get("port"), () => {
  console.log(`Server started in port ${app.get("port")}`);
});
