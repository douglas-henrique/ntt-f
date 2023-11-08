import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { Button } from "@ui5/webcomponents-react";

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} style={{ height: 30 }} />
      <Button className={styles.loginButton}> Login </Button>
    </div>
  );
};
