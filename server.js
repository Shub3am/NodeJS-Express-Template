const express = require("express");
require("dotenv").config();
const App = express();

App.get("/", (req, res) => {
  res.send("Hello! Thanks For Using This Template");
});

App.listen(process.env.PORT || 3000, () => {
  console.log(`Server Started at ${process.env.PORT || 3000} `);
});
