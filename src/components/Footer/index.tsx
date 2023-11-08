import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <img src={logo} style={{ height: 30 }} />
      <label>{currentYear}</label>
    </footer>
  );
};
