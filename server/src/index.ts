import express from "express";
import cors from "cors";
import { getSongsByMood } from "./controllers/songController";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "http://localhost:5173"
  ],
  credentials: true
}));

app.use(express.json());

app.get("/api/songs", getSongsByMood);

app.get("/health", (req, res) => {
  res.send("API is Running 🎵");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});