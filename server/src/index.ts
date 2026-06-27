import express from 'express';
import cors from 'cors';
import { getSongsByMood } from './controllers/songController';


const app = express()
const Port = process.env.Port || 3000; // Trigger restart

app.use(cors());

app.use(express.json());

app.get('/api/songs', getSongsByMood);


app.get('/health', (req, res) => {
  res.send('API is Running🎵')
})

app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`)
});

// Keep process alive
setInterval(() => {}, 1000 * 60 * 60);