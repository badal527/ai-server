const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROOT (IMPORTANT)
app.get("/", (req, res) => {
  res.send("AI Server Running 🚀");
});

// API
app.post("/generate", (req, res) => {
  const { topic } = req.body;

  res.json({
    result: `Assignment on ${topic}

Introduction:
${topic} is important in modern world.

Body:
It plays a key role in development.

Conclusion:
${topic} has a bright future.`
  });
});

// PORT FIX (VERY IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
