import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../theme/themeContext";

type ICardProps = {
  getHeight: () => Promise<number>;
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

  useInterval(() => {
    (async () => {
      try {
        const res = await getHeight();
        setHeight(res);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, 10000);

  return <div className="bg-[#fff]"></div>;
}
