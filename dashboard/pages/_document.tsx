/* eslint-disable @next/next/no-sync-scripts */
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* <link rel="apple-touch-icon" href="/static/favicon.ico" /> */}
          {/* <link rel="icon" href="/static/favicon.ico" /> */}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={undefined} />
          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
          <link rel="icon" href="/images/logo.ico" />
          <meta
            name="description"
            content="The Vefi Ecosystem is a blockchain-pertinent ecosystem with the sole aim of permeating known sectors with decentralized paradigms."
          />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="keywords"
            content="dapps, vefi, dex, launchpad, multisig, staking pools, stake, bitgert, binance, brise, bsc, omax, gatechain, multichain, nodes"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
