import { Request, Response } from "express";
import { SONG_DATABASE } from '../data/songs'
export const getSongsByMood = (req: Request, res: Response) => {
  const { mood } = req.query;


  //validation: Check ager mood exist krta hai ya nhi 
  if (!mood || typeof mood !== 'string') {
    return res.status(400).json({ error: 'Mood Query is Required' })
  }
  const normalizedMood = mood.toLowerCase();
  const songs = SONG_DATABASE[normalizedMood]

  //Edge case to handle unsupported moods.
  if (!songs) {
    return res.status(404).json({
      availableMoods: Object.keys(SONG_DATABASE)
    });
  }
  setTimeout(() => {
    res.json(songs);
  }, 800);
}