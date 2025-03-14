const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Portfolio = require("./portfolio")(sequelize, Sequelize);
db.Project = require("./project")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);

db.User.hasOne(db.Portfolio, {
  foreignKey: "user_id",
});
db.Portfolio.belongsTo(db.User, {
  foreignKey: "user_id",
});

db.Portfolio.hasMany(db.Project, {
  foreignKey: "portfolio_id",
});
db.Project.belongsTo(db.Portfolio, {
  foreignKey: "portfolio_id",
});

db.Portfolio.hasMany(db.Comment, {
  foreignKey: "portfolio_id",
});
db.Comment.belongsTo(db.Portfolio, {
  foreignKey: "portfolio_id",
});

module.exports = db;
