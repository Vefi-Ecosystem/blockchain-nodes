import { createContext, useCallback, useContext, useState } from "react";

type ThemeContextType = {
  selectedTheme: "dark" | "light";
  switchTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: any) => {
  const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">("light");

  const switchTheme = useCallback(() => {
    if (selectedTheme === "light") setSelectedTheme("dark");
    else setSelectedTheme("light");
  }, [selectedTheme]);

  return <ThemeContext.Provider value={{ selectedTheme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
