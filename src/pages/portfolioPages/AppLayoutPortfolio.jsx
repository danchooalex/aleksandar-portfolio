import React from "react";
import LeftSide from "../../components/homePageComponents/LeftSide";
import RightSide from "../../components/homePageComponents/RightSide";
import styles from "./AppLayoutPortfolio.module.css";

function AppLayoutPortfolio() {
  return (
    <main className={styles.container}>
      <aside className={styles.left}>
        <LeftSide />
      </aside>
      <aside className={styles.right}>
        <RightSide />
      </aside>
    </main>
  );
}

export default AppLayoutPortfolio;
