const { GEMINI_API_KEY } = require("../../config/env");

const GoogleGenerativeAI = require("@google/generative-ai").GoogleGenerativeAI;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

exports.chatWithAI = async (req, res) => {
  try {
    const message = req.body.message;
    const prompt = `You are a helpful, friendly, and intelligent AI chatbot. 
Your role is to assist and converse with Nirajan Chaudhary personally. 
Respond to the user’s message naturally, clearly, and politely. 
Do not repeat the user’s message unless necessary for context.  ${message}`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });
    const result = await model.generateContent(prompt, message);


    res.json({ response: result.response.text() });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "AI failed", details: err.message });
  }
};
