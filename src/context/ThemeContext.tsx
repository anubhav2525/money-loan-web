"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define a type for the available themes
type Theme = "light" | "dark" | "system";

// Define the shape of the context
interface ThemeContextType {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark"); // Default to dark theme

  useEffect(() => {
    // On first load, check for a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    // Handle system theme preference change when 'system' is selected
    if (theme === "system") {
      const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

      const updateTheme = () => {
        if (matchMedia.matches) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
        }
      };

      // Call the update function immediately to reflect the current system theme
      updateTheme();

      // Add an event listener for when the system theme changes
      matchMedia.addEventListener("change", updateTheme);

      return () => {
        // Cleanup the event listener when the component is unmounted
        matchMedia.removeEventListener("change", updateTheme);
      };
    } else {
      // For light and dark, update the theme as before
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    // Remove all theme-related classes
    document.documentElement.classList.remove("light", "dark");
    // Set the new theme
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    // Add the new theme class to the html element
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
