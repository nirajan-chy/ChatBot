const express = require("express");
const { chatWithAI } = require("../controllers/chatController");

const chatRouter = express.Router();

chatRouter.post("/chat", chatWithAI);

module.exports = chatRouter;
