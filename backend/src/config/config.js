require("dotenv").config(); // .env 파일 로드

module.exports = {
  development: {
    username: process.env.DB_USER || "test",
    password: process.env.DB_PW || "00000000",
    database: process.env.DB_NAME || "your_portfolio_db",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
};
