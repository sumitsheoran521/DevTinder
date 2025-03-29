const express = require("express");

const app = express();

const { adminAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

// Route for getting all data (only accessible by authorized admins)
app.get("/admin/getAllData", (req, res) => {
  res.send("Password correct, data can be fetched");
});

app.listen(7777, () => {
  console.log("Listening on port 7777");
});
