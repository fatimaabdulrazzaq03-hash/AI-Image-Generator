const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

// Save Image
router.post("/save", async (req, res) => {
  try {
    const { prompt, imageUrl } = req.body;

    const newImage = await Image.create({
      prompt,
      imageUrl,
    });

    res.status(201).json({
      success: true,
      message: "Image saved successfully",
      data: newImage,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get History
router.get("/history", async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Delete Image
router.delete("/delete/:id", async (req, res) => {
  try {
    console.log("🗑 DELETE Request:", req.params.id);

    const deletedImage = await Image.findByIdAndDelete(req.params.id);

    if (!deletedImage) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;