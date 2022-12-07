import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useThemeContext } from "../theme/themeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = ({ children }: any) => {
  const { selectedTheme } = useThemeContext();
  return (
    <div
      className={`${
        selectedTheme === "dark" ? "bg-[#000]/95" : "bg-[#fff]"
      } flex justify-center flex-col min-h-screen w-screen gap-4`}
    >
      <Header />
      <div className="flex-1  max-w-full mt-[62.05px]">{children}</div>
      <Footer />
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Index>
        <Component {...pageProps} />
      </Index>
    </ThemeProvider>
  );
}
