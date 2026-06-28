import { useState, useEffect } from "react"; // Added useEffect
import Header from "./components/Header";
import MoodCard from "./components/MoodCard";
import SongList from "./components/SongList";
import { MOODS, type MoodOption, type Song } from "./types";
import { Sparkles, Settings, Music4 } from "lucide-react"; // Added Music4 for loading logo

function App() {
  // const API_URL = import.meta.env.VITE_API_URL;
  // console.log("API_URL =", API_URL);
  const Api_url = import.meta.env.VITE_API_URL;
  console.log(Api_url)
  /* --- NEW STATE FOR INITIAL APP PRE-LOADER --- */
  const [isAppLoading, setIsAppLoading] = useState(true);

  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);

  const [showSlider, setShowSlider] = useState(false);
  const [glassIntensity, setGlassIntensity] = useState(0);

  /* --- NEW EFFECT TO INITIALIZE THE APP --- */
  useEffect(() => {
    // Simulating a 2-second delay for asset/config setup
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleFetchSongs = async () => {
    if (!selectedMood) return;
    setLoading(true);
    setSongs([]);

    try {
      const response = await fetch(
        `${Api_url}/api/songs?mood=${selectedMood.label.toLowerCase()}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch songs");
      }

      const data: Song[] = await response.json();
      setSongs(data);
    } catch (err) {
      console.error("Connection Error:", err);
      alert("Unable to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  /* --- HARD BINARY LOGIC FOR 3D GLASSMORPHISM --- */
  const isGlassEnabled = glassIntensity > 0;
  const bgOpacity = isGlassEnabled ? 0.15 : 1.0;
  const borderOpacity = isGlassEnabled ? 0.25 : 1.0;
  const blurValue = isGlassEnabled
    ? `${(glassIntensity * 0.3).toFixed(1)}px`
    : "0px";
  const shadowDepth = isGlassEnabled
    ? `${(glassIntensity * 0.4).toFixed(1)}px`
    : "4px";

  /* --- NEW CONDITION: RENDERING FULL SCREEN PRE-LOADER --- */
  if (isAppLoading) {
    return (
      <div className="fixed inset-0 bg-[#0e0e10] z-50 flex flex-col items-center justify-center gap-4 transition-all duration-500">
        <div className="relative flex items-center justify-center">
          {/* Outer ripples */}
          <div className="absolute w-24 h-24 bg-green-500/10 rounded-full animate-ping duration-1000" />
          <div className="absolute w-16 h-16 bg-green-500/20 rounded-full animate-pulse" />

          {/* Center glowing logo indicator */}
          <div className="relative p-5 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl text-green-400">
            <Music4 size={40} className="animate-bounce" />
          </div>
        </div>

        {/* Loading text typography */}
        <div className="text-center mt-2">
          <h2 className="text-white font-bold text-xl tracking-wider">
            MoodTune
          </h2>
          <p className="text-zinc-500 text-xs tracking-widest uppercase mt-1 animate-pulse">
            Setting the vibe...
          </p>
        </div>
      </div>
    );
  }

  /* --- STANDARD WEB APPLICATION INTERFACE --- */
  return (
    <>
      <div
        className="min-h-screen bg-[#0e0e10] text-zinc-100 p-6 md:p-12 relative overflow-x-hidden"
        style={
          {
            "--glass-bg-opacity": bgOpacity,
            "--glass-border-opacity": borderOpacity,
            "--glass-blur": blurValue,
            "--glass-shadow": shadowDepth,
            perspective: "1000px",
          } as React.CSSProperties
        }
      >
        {/* --- NEW SMART RESPONSIVE ENGINE CONTAINER --- */}
        <div
          className="
      /* Mobile: Center it naturally at the top with a bottom margin so it never overlaps the logo */
      relative mx-auto mb-6 flex justify-center w-fit
      /* Desktop: Snap it back to the floating top-left corner with zero layout interference */
      md:absolute md:top-6 md:left-6 md:mb-0 md:mx-0
      z-40 items-center gap-3 
      bg-zinc-900/90 p-2 md:p-2.5 rounded-xl 
      border border-zinc-800/80 backdrop-blur-md shadow-xl 
      transition-all duration-300
    "
        >
          <button
            onClick={() => setShowSlider(!showSlider)}
            className="text-zinc-400 hover:text-green-400 transition-colors p-2 md:p-1"
            aria-label="Adjust glassmorphism look"
          >
            <Settings
              className={`
          w-5 h-5 md:w-5.5 md:h-5.5 transition-transform duration-300
          ${showSlider ? "rotate-45 text-green-400" : ""}
        `}
            />
          </button>

          {showSlider && (
            <input
              type="range"
              min="0"
              max="100"
              value={glassIntensity}
              onChange={(e) => setGlassIntensity(Number(e.target.value))}
              className="w-28 md:w-32 h-1.5 md:h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-green-500 transition-all"
            />
          )}
        </div>

        {/* Main Dashboard Layout */}
        <div className="max-w-6xl mx-auto">
          <Header />

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-2">How's the vibe?</h2>
            <p className="text-zinc-400 mb-8">
              Pick a mood and we'll curate your perfect soundtrack.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {MOODS.map((m) => (
                <MoodCard
                  key={m.label}
                  mood={m}
                  isSelected={selectedMood?.label === m.label}
                  onSelect={setSelectedMood}
                />
              ))}
            </div>
          </section>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={handleFetchSongs}
              disabled={!selectedMood || loading}
              className="flex items-center gap-2 px-10 py-4 br-linear-to-br bg-linear-to-br from-green-400 to-green-900  hover:from-green-900 hover:to-green-400  hover:bg-green-400 disabled:bg-linear-to-br disabled:from-stone-900 disabled:to-stone-700 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-500/20"
            >
              {loading ? (
                "Analyzing the rhythm..."
              ) : (
                <>
                  <Sparkles size={20} /> Get My Playlist
                </>
              )}
            </button>
          </div>

          {songs.length > 0 && (
            <SongList songs={songs} mood={selectedMood?.label || ""} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
