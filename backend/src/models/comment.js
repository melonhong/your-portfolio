module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(64),
    },
    content: {
      type: DataTypes.TEXT,
    },
  });

  return Comment;
};
