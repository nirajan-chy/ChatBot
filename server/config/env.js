const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const port = process.env.PORT;
const secret_key = process.env.SECRET_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
 
module.exports = {
  MONGO_URI,
  GEMINI_API_KEY,
  port,
  secret_key,
};
