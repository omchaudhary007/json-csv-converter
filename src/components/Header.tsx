import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { RefreshCw } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="bg-box-bg border-b border-border sticky top-0 z-50 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-text flex items-center gap-3">
            CSV <RefreshCw size={28}/> JSON
          </h1>
          <p className="text-text-muted text-sm mt-2">
            Convert CSV to JSON and vice-versa.
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
