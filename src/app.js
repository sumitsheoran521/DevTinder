const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Namaste");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.listen(7777, () => {
  console.log("listening to port 7777");
});
