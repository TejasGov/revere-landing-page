"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "1px solid var(--border-hi)",
        borderRadius: "100px",
        color: "var(--text)",
        cursor: "pointer",
        padding: "0.55rem 1.4rem",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.82rem",
        letterSpacing: "0.04em",
        transition: "background 0.2s",
        marginLeft: "1rem"
      }}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
