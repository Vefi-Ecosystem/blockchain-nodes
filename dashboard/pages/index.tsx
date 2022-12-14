import type { NextPage } from "next";
import { useThemeContext } from "../theme/themeContext";
import chainlist from "../chainlist";
import Card from "../components/Card";

const Home: NextPage = () => {
  const { selectedTheme } = useThemeContext();
  return (
    <div className="flex flex-col justify-start items-center gap-12 w-full h-full px-2 py-2">
      <span
        className={`${
          selectedTheme === "light" ? "text-[#000]" : "text-[#fff]"
        } font-[800] text-center text-[20px] md:text-[38px] font-poppins`}
      >
        Vefi Nodes is a collection of nodes run by the Vefi Ecosystem in support of the blockchain community.
      </span>
      <div className="flex flex-col md:flex-row justify-center flex-1 w-full gap-2 items-start px-3 py-3 flex-nowrap md:flex-wrap overflow-auto">
        {chainlist.map((item, index) => (
          <div key={index} className="w-full md:w-1/3">
            <Card
              chainId={item.chainId}
              getHeight={item.getHeight}
              chainName={item.chainName}
              currency={item.currency}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
