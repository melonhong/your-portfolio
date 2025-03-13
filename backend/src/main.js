const express = require("express");
const app = express();
const morgan = require("morgan");

// 포트 설정
app.set("port", process.env.PORT || 8080);

// 로그 설정
app.use(morgan("combined"));

// 라우팅
app.get("/", (req, res) => {
  res.send("hello");
});

// 서버 시작
app.listen(app.get("port"), () => {
  console.log(`Server started in port ${app.get("port")}`);
});
