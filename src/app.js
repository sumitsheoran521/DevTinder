const express = require("express");

const app = express();

app.use("/user",
  (req, res, next) => {
    // res.send("Hello 1");
    next();
  },
  (req, res) => {
    res.send("Hello 2");
  }
);

app.listen(7777, () => {
  console.log("listening to port 7777");
});
