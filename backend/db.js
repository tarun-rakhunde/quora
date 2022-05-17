const mongoose = require("mongoose");

const url =
  "mongodb+srv://tarun-rakhunde:tarun7559@cluster0.uuhiy.mongodb.net/quoraClone";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
