const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
console.log("DB EXPORT =", connectDB);

const imageRoutes = require("./routes/imageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connect
if (typeof connectDB === "function") {
  connectDB();
} else {
  console.log("❌ connectDB is NOT a function");
}

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

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    res.json({
      success: true,
      imageUrl,
    });

  } catch (error) {
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