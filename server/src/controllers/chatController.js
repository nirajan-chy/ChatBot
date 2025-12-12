const { GEMINI_API_KEY } = require("../../config/env");

const GoogleGenerativeAI = require("@google/generative-ai").GoogleGenerativeAI;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

exports.chatWithAI = async (req, res) => {
  try {
    const prompt = req.body.message;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
    });

    const result = await model.generateContent(prompt);

    res.json({ response: result.response.text() });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "AI failed", details: err.message });
  }
};
