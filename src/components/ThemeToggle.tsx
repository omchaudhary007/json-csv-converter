import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-9 w-16 items-center rounded-full transition-colors duration-300
        ${isDark ? "bg-primary" : "bg-border-muted"}
      `}
    >
      <span
        className={`absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-bg
          shadow-md transition-all duration-300 ease-in-out bg-text
          ${isDark ? "translate-x-7" : "translate-x-0"}
        `}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-bg-dark" />
        ) : (
          <Sun className="h-4 w-4 text-bg-dark" />
        )}
      </span>
    </button>
  );
};
