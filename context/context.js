import { createContext } from "react";
import { useMetamask, useDisconnect, useAddress } from "@thirdweb-dev/react";

export const FarmDAOContext = createContext();
export const FarmDAOProvider = ({ children }) => {
  const currentUserAddress = useAddress();
  let connectWithMetamask = useMetamask();
  let disconnectWallet = useDisconnect();

  return (
    <FarmDAOContext.Provider
      value={(currentUserAddress, connectWithMetamask, disconnectWallet)}
    >
      {children}
    </FarmDAOContext.Provider>
  );
};
