import { useThemeContext } from "../../theme/themeContext";

export default function Footer() {
  const { selectedTheme } = useThemeContext();
  return (
    <div className="flex flex-col justify-center items-center overflow-auto w-full gap-6">
      <div
        className={`flex justify-center items-center gap-6 uppercase ${
          selectedTheme === "light" ? "text-[#000]" : "text-[#fff]"
        } font-poppins font-[500] overflow-auto w-full`}
      >
        <a href="https://twitter.com/vefi_official?s=20&t=Nyz3yLS_sKZ0asOgOl3NGw" rel="noreferrer" target="_blank">
          Twitter
        </a>
        <a href="https://t.me/vefi_official" rel="noreferrer" target="_blank">
          Telegram
        </a>
        <a href="https://www.youtube.com/channel/UCXMsXe5AvNSPL32Yna8MKdQ" rel="noreferrer" target="_blank">
          YouTube
        </a>
        <a href="https://instagram.com/vefi.official" rel="noreferrer" target="_blank">
          Instagram
        </a>
      </div>
      <span
        className={`font-poppins font-[400] text-[20px] uppercase ${
          selectedTheme === "light" ? "text-[#000]" : "text-[#fff]"
        }`}
      >
        Copyright 2022 Vefi Ecosystem
      </span>
    </div>
  );
}
