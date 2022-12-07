import Image from "next/image";
import { useThemeContext } from "../../theme/themeContext";
import ThemeSwitch from "../ThemeSwitch";

export default function Header() {
  const { selectedTheme } = useThemeContext();
  return (
    <div className="flex justify-between gap-6 items-center px-3 py-4 w-full">
      <Image src="/images/vefi_logo.png" alt="logo" width={81} height={26} />
      <div
        className={`flex justify-between items-center gap-7 text-[10px] md:text-[14px] font-[500] font-poppins ${
          selectedTheme === "dark" ? "text-[#f8f8f8]" : "text-[#000]"
        }`}
      >
        <a href="https://t.me/vefi_official" rel="noreferrer" target="_blank">
          Community
        </a>
        <a href="https://dapps.vefinetwork.org" rel="noreferrer" target="_blank">
          DApps
        </a>
      </div>
      <ThemeSwitch />
    </div>
  );
}
