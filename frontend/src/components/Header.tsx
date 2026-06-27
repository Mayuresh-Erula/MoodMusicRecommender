import { Music4 } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-center items-center  gap-3 mb-12">
      <div className="group flex justify-center items-center px-6 py-3 text-white bg-linear-to-br from-green-400 to-green-900  hover:from-green-900 hover:to-green-400 transition-all duration-300 ease-out transform hover:scale-105 shadow-md shadow-green-600/25 hover:shadow-lg hover:shadow-green-500/15 rounded-full gap-3 cursor-pointer">
        {/* App Icon - Rotates on parent hover */}
        <Music4 
          size={32} 
          className="text-white transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110" 
        />
        {/* App Name */}
        <h1 className="text-white text-2xl font-black tracking-wide drop-shadow-sm">
          Mood<span className="text-white">Tune</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;