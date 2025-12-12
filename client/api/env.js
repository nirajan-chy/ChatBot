import dotenv from "dotenv";
dotenv.config();

const baseurl = process.env.NEXT_PUBLIC_API_URL;

module.exports = {
  baseurl,
};
