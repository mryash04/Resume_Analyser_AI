const express = require("express");
const aiRoutes = require("./routes/aiRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/ai", aiRoutes);

app.use(errorHandler)

module.exports = app;