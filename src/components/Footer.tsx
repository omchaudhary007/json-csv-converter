import React from "react";
import { Heart, Star  } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 border-t border-border bg-box-bg transition-colors duration-300">
      <div className="w-fit m-auto flex gap-2 items-center text-text">Built with <Heart fill="red" className="w-5 h-5 text-transparent"/> by Om chaudhary</div>
    </footer>
  );
};
