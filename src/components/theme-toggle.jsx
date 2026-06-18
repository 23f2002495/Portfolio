"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        p-2
        rounded-full
        border
        border-gray-400
        hover:scale-110
        transition
      "
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}