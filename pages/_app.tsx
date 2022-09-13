import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApeDaoProvider } from "../context/context";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ApeDaoProvider>
        <Component {...pageProps} />;
      </ApeDaoProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
