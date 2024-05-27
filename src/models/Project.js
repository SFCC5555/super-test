const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Task = require("./Task");

const Project = sequelize.define(
  "project",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // Configuración de timestamps
  }
);

Project.hasMany(Task, { foreignKey: "projectId", sourceKey: "id" });

Task.belongsTo(Project, { foreignKey: "projectId", targetKey: "id" });

module.exports = Project;
