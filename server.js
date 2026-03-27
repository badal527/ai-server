const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("AI Server Running 🚀");
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("AI Server Running 🚀");
});

// GENERATE ROUTE
app.post("/generate", (req, res) => {
  const { topic } = req.body;

  let text = `
  ${topic}

  Introduction:
  ${topic} is an important topic in modern world.

  Body:
  It plays a major role in our daily life and development.

  Conclusion:
  ${topic} will continue to grow in future.
  `;

  res.json({ result: text });
});

app.listen(3000, () => {
  console.log("Server running");
});
