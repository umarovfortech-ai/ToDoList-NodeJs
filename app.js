const mongoose = require("mongoose");
const express = require("express");
const apiRoutes = require("./src/routers/task");
const { PORT, DB_CONNECTION } = require("./config");

const app = express();
app.use(express.json());
app.use("/", apiRoutes);

const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log("Connected to DB");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

loadApp();
