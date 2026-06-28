const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const imageRoutes = require("./routes/imageRoutes");
const Image = require("./models/Image");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/images", imageRoutes);

app.get("/", (req, res) => {
  res.send("🚀 AI Image Generator Backend is Running...");
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?seed=${Date.now()}`;

    // Save to MongoDB
    await Image.create({
      prompt,
      imageUrl,
    });

    res.json({
      success: true,
      imageUrl,
    });
  } catch (error) {
  console.error("❌ FULL ERROR:");
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});