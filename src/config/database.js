const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sumit:cdBuTS90AOKPESUs@namastenode.jo7fqfr.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
