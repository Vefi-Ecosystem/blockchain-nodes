import axios from "axios";

const getHeightEvm: (url: string) => Promise<number> = (url: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { jsonrpc: "2.0", id: Math.floor(Math.random() * 4), method: "eth_blockNumber", params: [] })
      .then((res) => {
        if (res.data.result) resolve(parseInt(res.data.result));
        else reject(res.data.error);
      })
      .catch(reject);
  });
};

export default [
  {
    currency: "BRISE",
    chainId: 32520,
    chainName: "Bitgert Mainnet",
    url: "/bitgert",
    getHeight: getHeightEvm,
  },
  {
    currency: "BNB",
    chainId: 56,
    chainName: "Binance Smartchain Mainnet",
    url: "/smartchain",
    getHeight: getHeightEvm,
  },
  {
    currency: "ASTR",
    chainId: 592,
    chainName: "Astar",
    url: "/astar",
    getHeight: getHeightEvm,
  },
];
