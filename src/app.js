const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const user = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // Create a new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

// GET user by email
app.get("/user", async (req, res) => {
  try {
    const user = await User.find({ emailId: req.body.email });
    if (user.length > 0) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.send("Something went wrong");
  }
});

// Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.send("Something went wrong");
  }
});

//Delete a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("User deleted");
  } catch (err) {
    res.send("Something went wrong");
  }
});

// Update data of the user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
    });
    console.log(user);
    res.send("user update successfully");
  } catch (err) {
    res.send("Something went wrong");
  }
});

app.get("/signup", (req, res) => {
  req.send();
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected");
  });
