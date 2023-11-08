import React from "react";
import styles from "./styles.module.scss";

export const TitlePresentation: React.FC = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}> Your favorite movie is here</h1>
      <label className={styles.subtitle}>
        Explore and discover amazing movies! Search, find, and watch your
        favorite films on our website
      </label>
    </div>
  );
};
