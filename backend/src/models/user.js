module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
    },
  });

  return User;
};
