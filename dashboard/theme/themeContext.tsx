import { createContext, useCallback, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  selectedTheme: "dark" | "light";
  switchTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: any) => {
  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">("light");

  const switchTheme = useCallback(() => {
    if (selectedTheme === "light") {
      setSelectedTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setSelectedTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [selectedTheme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageTheme: any = localStorage.getItem("theme");

      if (!!storageTheme) setSelectedTheme(storageTheme);
    }
  }, []);

  return <ThemeContext.Provider value={{ selectedTheme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
