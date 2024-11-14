import React from "react";
import LeftSide from "../../components/homePageComponents/LeftSide";
import RightSide from "../../components/homePageComponents/RightSide";
import styles from "./AppLayoutPortfolio.module.css";

function AppLayoutPortfolio() {
  return (
    <main className={styles.container}>
      <aside className={styles.left}>
        <h3 className={styles.h3L}>{`<React developer/>`}</h3>
        <h1 className={styles.h1L}>Hello, I'm</h1>
        <h2 className={styles.h2L}>Aleksandar Dancu</h2>
      </aside>
      <aside className={styles.right}>
        <LeftSide />
        <RightSide />
      </aside>
    </main>
  );
}

export default AppLayoutPortfolio;
