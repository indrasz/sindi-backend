import { Router } from "express";
import multer from "multer";
import axios from "axios";

const upload = multer();
const router = Router();

router.post("/detect", upload.single("image"), async (req, res) => {
  try {
    const imageBase64 = req.file?.buffer.toString("base64");

    const response = await axios.post(
      "https://detect.roboflow.com/american-sign-language-letters/6",
      imageBase64,
      {
        params: { api_key: "hTZuf1D35gj1nUUY9SMe" },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
