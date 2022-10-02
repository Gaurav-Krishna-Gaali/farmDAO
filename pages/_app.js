import "../styles/globals.css";
import { FarmDAOProvider } from "../context/context";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <FarmDAOProvider>
        <Component {...pageProps} />;
      </FarmDAOProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
