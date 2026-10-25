const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Mongo DB connection successful");
    })
    .catch((err) => {
      console.log("MongoDb connection failed", err);
    });
};

module.exports = connectDb;
