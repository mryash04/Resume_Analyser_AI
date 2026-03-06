// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// const analyzeRoute = require("./routes/analyze");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/analyze", analyzeRoute);

// app.get("/", (req, res) => res.send("Hello AI"))

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

require("dotenv").config();

const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
console.log(`AI server running on port ${PORT}`);
});