import React from "react";
import LeftSide from "../../components/homePageComponents/LeftSide";
import RightSide from "../../components/homePageComponents/RightSide";
import styles from "./AppLayoutPortfolio.module.css";
import Footer from "../../components/homePageComponents/Footer";

function AppLayoutPortfolio() {
  return (
    <>
      <main className={styles.container}>
        <aside className={styles.left}>
          <h1 className={styles.h1L}>Hello, I'm</h1>
          <h2 className={styles.h2L}>Aleksandar Dancu</h2>
          <h3 className={styles.h3L}>{`<ReactDeveloper/>`}</h3>
        </aside>
        <aside className={styles.right}>
          <LeftSide />
          <RightSide />
        </aside>
        <Footer />
      </main>
    </>
  );
}

export default AppLayoutPortfolio;
