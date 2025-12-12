const { default: mongoose } = require("mongoose");
const { MONGO_URI } = require("./env");

exports.connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    throw new error();
  }
};
