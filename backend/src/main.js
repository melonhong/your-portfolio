const express = require("express");
const app = express();
const morgan = require("morgan");

const corsMiddleware = require("./middlewares/cors");

// 포트 설정
app.set("port", process.env.PORT || 8080);

// 로그 설정
app.use(morgan("combined"));

// CORS 에러 해결
app.use(corsMiddleware);

// 라우팅
app.get("/", (req, res) => {
  res.json({ message: "hello there?" });
});

// 서버 시작
app.listen(app.get("port"), () => {
  console.log(`Server started in port ${app.get("port")}`);
});
