import express from "express";
import cors from "cors";
import detectRoute from "./detect";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", detectRoute);

// Handler untuk Vercel
export default app;
