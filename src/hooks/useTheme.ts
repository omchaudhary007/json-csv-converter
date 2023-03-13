import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  // init theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light") {
      document.documentElement.classList.add("light");
      setTheme("light");
      return;
    }
    if (!saved) {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      if (prefersLight) {
        document.documentElement.classList.add("light");
        setTheme("light");
      }
    }
  }, []);

  // apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return {
    theme,
    isLight: theme === "light",
    isDark: theme === "dark",
    toggleTheme: () =>
      setTheme(t => (t === "light" ? "dark" : "light")),
  };
}
