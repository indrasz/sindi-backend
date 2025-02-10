import { Router } from "express";
import multer from "multer";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Memuat variabel lingkungan dari .env

const upload = multer();
const router = Router();

router.post("/detect", upload.single("image"), async (req:any, res:any) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image provided" });
    }

    const imageBase64 = req.file.buffer.toString("base64");

    const response = await axios.post(
      "https://detect.roboflow.com/american-sign-language-letters/6",
      imageBase64,
      {
        params: { api_key: process.env.ROBOFLOW_API_KEY },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    res.json(response.data);
  } catch (error: any) {
    console.error("Error detecting image:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
