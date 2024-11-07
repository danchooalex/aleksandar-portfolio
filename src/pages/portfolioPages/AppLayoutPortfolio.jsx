import LeftSide from "../../components/homePageComponents/LeftSide";
import styles from "./AppLayoutPortfolio.module.css";

function AppLayoutPortfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftSide />
      </div>
      <div className={styles.right}>RIGHT</div>
    </div>
  );
}

export default AppLayoutPortfolio;
