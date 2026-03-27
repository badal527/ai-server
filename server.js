const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;

app.post("/generate", async (req, res) => {
  const topic = req.body.topic;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        contents: [
          { parts: [{ text: `Write a structured assignment on ${topic}` }] }
        ]
      }
    );

    const text = response.data.candidates[0].content.parts[0].text;
    res.json({ result: text });

  } catch (err) {
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(3000, () => console.log("Server running"));
