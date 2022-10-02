import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FarmDAOContext } from "../context/context";
import FarmDAO from "../assets/FarmDAO.png";

const Header = () => {
  const { disconnectWallet } = useContext(FarmDAOContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image height={150 / 1.5} width={500 / 1.5} alt="logo" src={FarmDAO} />
      </div>
      <button className={styles.disconnectBtn} onClick={disconnectWallet}>
        Disconnect Wallet 👋
      </button>
    </div>
  );
};

export default Header;
