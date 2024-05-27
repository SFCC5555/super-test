const express = require("express");
const sequelize = require("./database/db");
const Project = require("./models/Project");
const Task = require("./models/Task");

const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Successfully connected to the database.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
  }
};

startServer();
