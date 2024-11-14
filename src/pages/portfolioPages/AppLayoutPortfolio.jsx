import React from "react";
import LeftSide from "../../components/homePageComponents/LeftSide";
import RightSide from "../../components/homePageComponents/RightSide";
import styles from "./AppLayoutPortfolio.module.css";

function AppLayoutPortfolio() {
  return (
    <main className={styles.container}>
      <aside className={styles.left}>
        <h1 className={styles.h1Left}>
          Hello! my name is Alex Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ea reiciendis vitae commodi earum veritatis hic
          beatae minus, iusto praesentium ipsam perspiciatis vel, aspernatur ut?
          Ea atque quae nesciunt dolore eum?
        </h1>
      </aside>
      <aside className={styles.right}>
        <LeftSide />
        <RightSide />
      </aside>
    </main>
  );
}

export default AppLayoutPortfolio;
