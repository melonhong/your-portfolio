const cors = require("cors");

const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"]; // 허용할 출처 목록

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("CORS policy: This origin is not allowed"));
    }
  },
  credentials: true, // 쿠키를 허용
};

module.exports = cors(corsOptions); // CORS 미들웨어를 내보냄
