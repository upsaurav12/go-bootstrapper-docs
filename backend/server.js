import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const groqRes = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You are a backend project generator." },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      text: groqRes.data.choices[0].message.content,

    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Groq generation failed" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Groq proxy running on port ${process.env.PORT}`);
});
