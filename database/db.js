require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = (async = () => {
  const url = process.env.MONGODB_URL;
  try {
    mongoose.connect(url);
  } catch (error) {}
});


module.exports = dbConnect