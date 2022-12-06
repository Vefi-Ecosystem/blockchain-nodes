import type { NextPage } from "next";
import Header from "../components/Header";
import { useThemeContext } from "../theme/themeContext";

const Home: NextPage = () => {
  const { selectedTheme } = useThemeContext();
  return (
    <div
      className={`${
        selectedTheme === "dark" ? "bg-[#000]/95" : "bg-[#fff]"
      } flex flex-col justify-center items-center w-screen h-screen gap-7`}
    >
      <Header />
    </div>
  );
};

export default Home;
