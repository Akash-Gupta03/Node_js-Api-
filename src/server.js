// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello from Node.js server!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js server!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
