export type Mood = "Happy" | "Sad" | "Chill" | "Energetic" | "Focused";

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl?: string;
  audioUrl?: string;
}

export interface MoodOption {
  label: Mood;
  emoji: string;
  description: string;
}

export const MOODS: MoodOption[] = [
  { label: "Happy", emoji: "😊", description: "Upbeat & Positive" },
  { label: "Sad", emoji: "😢", description: "Melancholic & Deep" },
  { label: "Chill", emoji: "🌙", description: "Relaxed & Lofi" },
  { label: "Energetic", emoji: "🔥", description: "High Power Beats" },
  { label: "Focused", emoji: "💻", description: "Concentration Flow" },
];