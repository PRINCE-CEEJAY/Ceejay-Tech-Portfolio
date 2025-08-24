import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    switch (isDarkMode) {
      case true:
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode((prev) => !prev);
        break;
      case false:
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode((prev) => !prev);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm: top-0 right-0 z-50 p-2 rounded-full transition-colors duration-300",
        "focus: outline-hidden hover:cursor-pointer"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
