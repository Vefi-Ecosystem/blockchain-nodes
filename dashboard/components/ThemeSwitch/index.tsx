import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeContext } from "../../theme/themeContext";

export default function ThemeSwitch() {
  const { selectedTheme, switchTheme } = useThemeContext();
  return (
    <div
      onClick={() => switchTheme()}
      className={`max-h-[26px] max-w-[50px] rounded-[23px] cursor-pointer flex justify-between items-center gap-2 px-1 py-1 ${
        selectedTheme === "dark" ? "bg-[#000]/[.7]" : "bg-[#eeeeee]"
      }`}
    >
      <button
        className={`bg-transparent w-[20px] flex justify-center items-center h-[20px] ${
          selectedTheme === "light"
            ? "rounded-[25px] shadow-[0_4px_4px_rgba(0,0,0,0.25),_inset_0_4px_4px_rgba(255,255,255,0.25)] text-[#105dcf]"
            : "text-white"
        }`}
      >
        <FiSun />
      </button>
      <button
        className={`bg-transparent flex justify-center items-center w-[20px] h-[20px] ${
          selectedTheme === "dark"
            ? "rounded-[25px] shadow-[0_4px_4px_rgba(0,0,0,0.25),_inset_0_4px_4px_rgba(255,255,255,0.25)] text-white"
            : "text-black"
        }`}
      >
        <FiMoon />
      </button>
    </div>
  );
}
