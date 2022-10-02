import React, { useContext } from "react";
import { FarmDAOContext } from "../context/context";
import Image from "next/image";
import FarmDAO from "../assets/FarmDAO.png";
import styles from "../styles/Login.module.css";

const Login = () => {
  const { connectWithMetamask } = useContext(FarmDAOContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Image src={FarmDAO} alt="logo" />
      </div>
      <button className={styles.button} onClick={connectWithMetamask}>
        Connect with Metmask
      </button>
    </div>
  );
};

export default Login;
