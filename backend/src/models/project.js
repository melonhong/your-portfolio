module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    portfolio_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    skills: {
      type: DataTypes.STRING(64),
    },
    url: {
      type: DataTypes.STRING(255),
    },
  });

  return Project;
};
