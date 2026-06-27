import { type MoodOption } from '../types';

interface Props {
  mood: MoodOption;
  isSelected: boolean;
  onSelect: (mood: MoodOption) => void;
}

{/* Replace your MoodCard component with this responsive version */}
const MoodCard = ({ mood, isSelected, onSelect }: Props) => (
  <button
    onClick={() => onSelect(mood)}
    style={{
      backgroundColor: isSelected 
        ? 'rgba(16, 185, 129, var(--glass-bg-opacity))'  
        : 'rgba(30, 30, 32, var(--glass-bg-opacity))',  
      borderColor: isSelected
        ? 'rgba(110, 231, 183, var(--glass-border-opacity))'
        : 'rgba(255, 255, 255, calc(var(--glass-border-opacity) * 0.3))',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: `0 var(--glass-shadow) calc(var(--glass-shadow) * 2) rgba(0, 0, 0, 0.4), 
                  inset 0 1px 2px rgba(255, 255, 255, calc(var(--glass-border-opacity) * 0.5))`,
      transformStyle: 'preserve-3d',
    } as React.CSSProperties}
    className={`group relative p-4 md:p-7 rounded-2xl transition-all duration-300 border text-left w-full
      hover:scale-105 hover:-translate-y-2 lg:hover:transform-[rotateX(6deg)_rotateY(-4deg)]
      ${isSelected ? 'scale-[1.02] border-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.25)]' : ''}`}
  >
    <div className="transition-transform duration-300 group-hover:transform-[translateZ(20px)] flex flex-col h-full justify-between">
      <div>
        {/* Adjusted Emoji Size for scaling viewports */}
        <span className="text-3xl md:text-4xl mb-3 md:mb-4 block drop-shadow-md">{mood.emoji}</span>
        {/* Adjusted Font Size */}
        <h3 className="font-bold text-base md:text-lg text-white tracking-wide drop-shadow-sm">{mood.label}</h3>
      </div>
      <p className={`text-xs md:text-sm mt-1 wrap-break-words transition-colors ${isSelected ? 'text-emerald-100' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
        {mood.description}
      </p>
    </div>

    <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-white/2 to-white/6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </button>
);

export default MoodCard;