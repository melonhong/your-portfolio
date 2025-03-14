module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define("portfolio", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 수정: autoEncrement -> autoIncrement
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(64),
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  return Portfolio;
};
