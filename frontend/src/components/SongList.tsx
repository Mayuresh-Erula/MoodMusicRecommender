import { useState, useRef, useEffect } from 'react';
import { type Song } from '../types';
import { Clock, Radio, Play, Pause } from 'lucide-react';

const SongList = ({ songs, mood }: { songs: Song[], mood: string }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const handlePlayPause = (song: Song) => {
    if (!song.audioUrl) {
      alert("No audio preview available for this song.");
      return;
    }

    if (playingId === song.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(song.audioUrl);
      audio.volume = 0.5;
      audio.play().catch(e => console.error("Playback failed", e));
      
      audio.onended = () => setPlayingId(null);
      
      audioRef.current = audio;
      setPlayingId(song.id);
    }
  };

  return (
    <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
      
      {/* --- RESPONSIVE PLAYLIST HERO BANNER --- */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8 text-center sm:text-left">
        {/* Dynamic scaling album art block */}
        <div className="w-36 h-36 md:w-48 md:h-48 bg-linear-to-br from-green-400 to-green-900 rounded-2xl flex items-center justify-center text-5xl md:text-6xl shadow-2xl shadow-black/50 shrink-0">
          <Radio className="text-white" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Playlist</span>
          {/* NEW TEXT SHADOW ON THE HEADING */}
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mt-1 md:mt-2 tracking-tight"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6), 0 0 20px rgba(34,197,94,0.2)' }}
          >
            {mood} Mix
          </h2>
        </div>
      </div>

      {/* --- NEW 3D GLASS CONTAINER WRAPPER FOR THE TRACKLIST --- */}
      <div 
        style={{
          backgroundColor: 'rgba(24, 24, 27, var(--glass-bg-opacity))',
          borderColor: 'rgba(255, 255, 255, calc(var(--glass-border-opacity) * 0.15))',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          boxShadow: `0 var(--glass-shadow) calc(var(--glass-shadow) * 2) rgba(0, 0, 0, 0.5), 
                      inset 0 1px 1px rgba(255, 255, 255, calc(var(--glass-border-opacity) * 0.2))`,
        } as React.CSSProperties}
        className="w-full text-left border rounded-2xl p-2 md:p-4 overflow-hidden"
      >
        {/* --- DYNAMIC GRID HEADERS --- 
            Mobile: 2-column mode -> [16px_1fr] 
            Tablet/Desktop (md): 4-column mode -> [16px_2fr_1fr_48px] 
        */}
        <div className="grid grid-cols-[16px_1fr] md:grid-cols-[16px_2fr_1fr_48px] gap-4 px-4 py-2 border-b border-zinc-800 text-zinc-400 text-xs md:text-sm font-medium mb-2">
          <span className="text-center">#</span>
          <span>Title</span>
          <span className="hidden md:block">Album</span>
          <span className="hidden md:flex justify-end pr-2"><Clock size={16} /></span>
        </div>

        {/* --- TRACK ROWS --- */}
        <div className="space-y-1">
          {songs.map((song, i) => (
            <div 
              key={song.id} 
              className={`grid grid-cols-[16px_1fr] md:grid-cols-[16px_2fr_1fr_48px] gap-4 px-4 py-3 rounded-xl transition-all group cursor-pointer items-center
                ${playingId === song.id ? 'bg-green-500/10 border border-green-500/20' : 'hover:bg-white/5 border border-transparent'}`}
              onClick={() => handlePlayPause(song)}
            >
              {/* Play/Pause/Number Engine Column */}
              <span className="text-zinc-500 flex items-center justify-center w-4 h-4 text-xs md:text-sm font-bold">
                {playingId === song.id ? (
                  <Pause size={14} className="text-green-500" />
                ) : (
                  <>
                    <span className="group-hover:hidden">{i + 1}</span>
                    <Play size={14} className="hidden group-hover:block text-white" />
                  </>
                )}
              </span>

              {/* Title & Cover Column */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg shrink-0 relative flex items-center justify-center border border-zinc-700/50">
                  {/* Fallback internal note if missing image */}
                  <Radio size={16} className="text-zinc-600" />
                  {playingId === song.id && (
                    <div className="absolute inset-0 flex items-center justify-center gap-0.5 bg-black/50 rounded-lg">
                      <div className="w-0.5 h-3 bg-green-500 animate-bounce" />
                      <div className="w-0.5 h-4 bg-green-500 animate-[bounce_1s_infinite_100ms]" />
                      <div className="w-0.5 h-2 bg-green-500 animate-[bounce_1s_infinite_200ms]" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className={`font-semibold text-sm md:text-base truncate ${playingId === song.id ? 'text-green-400' : 'text-white'}`}>
                    {song.title}
                  </p>
                  <p className="text-xs md:text-sm text-zinc-400 truncate mt-0.5">{song.artist}</p>
                </div>
              </div>

              {/* Album Column - Auto hidden on mobile */}
              <span className="hidden md:flex text-zinc-400 items-center text-sm truncate">{song.album}</span>
              
              {/* Duration Column - Auto hidden on mobile */}
              <span className="hidden md:flex text-zinc-400 items-center justify-end pr-2 text-sm font-medium">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongList;