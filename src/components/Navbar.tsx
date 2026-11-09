import { useState, useEffect } from "react";
import Light from "../assets/light.svg";
import Night from "../assets/night.svg";

export const Navbar = () => {
  const currentUserName = "Francis Omotayo";
  type Theme = "dark" | "light";
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return (
    <nav className="w-full  h-[70px] flex justify-between items-center px-[10px]">
      <h1 className="text-text font-family-sans">{currentUserName}</h1>

      <button
        className="relative text-text flex gap-6 rounded-pill border border-muted bg-surface p-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div
          className={`absolute top-1.5 left-1 w-8 h-8 rounded-full bg-card-strong shadow-accent transition-transform duration-normal ease-standard ${theme === "light" ? "translate-x-11" : "translate-x-0"} `}
        />

        <img
          src={Night}
          className={`w-5 ${theme === "dark" ? "text-accent" : ""}`}
        />

        <img
          src={Light}
          className={`w-5 ${theme === "light" ? "text-accent" : ""}`}
        />
      </button>
    </nav>
  );
};
