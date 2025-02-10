import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import detectRoute from "./routes/detectRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Konfigurasi CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/api", detectRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
