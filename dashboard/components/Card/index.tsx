import { useEffect, useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useThemeContext } from "../../theme/themeContext";

type ICardProps = {
  getHeight: (url: string) => Promise<number>;
  chainId: number;
  chainName: string;
  currency: string;
  url: string;
};

// Source: https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
const useInterval = (callback: () => any, delay?: number) => {
  const intervalRef = useRef(null as any);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (!!delay) {
      intervalRef.current = setInterval(tick, delay);
      return () => clearInterval(intervalRef.current);
    }
  }, [delay]);
  return intervalRef;
};

export default function Card({ getHeight, chainId, chainName, currency, url }: ICardProps) {
  const [height, setHeight] = useState<number>(0);
  const { selectedTheme } = useThemeContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await getHeight(url);
        setHeight(res);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, [getHeight, url]);

  useInterval(() => {
    (async () => {
      try {
        const res = await getHeight(url);
        setHeight(res);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, 10000);

  return (
    <div
      className={`${
        selectedTheme === "light" ? "bg-[#fff]" : "bg-[#000]/70"
      } shadow-lg shadow-[#000]/50 rounded-[5px] border-[#dcdcdc] border px-4 py-2 w-full`}
    >
      <div
        className={`flex font-poppins flex-col justify-center items-center gap-3 w-full ${
          selectedTheme === "light" ? "text-[#000]" : "text-[#fff]"
        }`}
      >
        <div className="flex justify-between items-center gap-3 w-full">
          <span className="font-[700]">Chain Name:</span>
          <span className="text-[16px] font-[500] break-all">{chainName}</span>
        </div>
        <div className="flex justify-between items-center gap-3 w-full">
          <span className="font-[700]">Chain ID:</span>
          <span className="text-[16px] font-[500]">{chainId}</span>
        </div>
        <div className="flex justify-between items-center gap-3 w-full">
          <span className="font-[700]">Currency:</span>
          <span className="text-[16px] font-[500]">{currency}</span>
        </div>
        <div className="flex justify-between items-center gap-3 w-full">
          <span className="font-[700]">Chain Height:</span>
          <span className="text-[16px] font-[500]">{height}</span>
        </div>
        <div className="flex justify-between items-center gap-3 w-full">
          <span className="font-[700]">URL:</span>
          <div className="flex justify-center gap-1 items-center">
            <span className="text-[16px] font-[500] break-all">{url}</span>
            <CopyToClipboard text={url}>
              <button className="border-0 bg-transparent focus:bg-[#000]/20 px-1 py-1">
                <FiCopy />
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}
