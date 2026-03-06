const express = require("express");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(express.json());

app.use("/ai", aiRoutes);

module.exports = app;