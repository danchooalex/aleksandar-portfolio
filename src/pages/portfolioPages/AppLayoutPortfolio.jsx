import LeftSide from "../../components/homePageComponents/LeftSide";
import RightSide from "../../components/homePageComponents/RightSide";
import styles from "./AppLayoutPortfolio.module.css";

function AppLayoutPortfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftSide />
      </div>
      <div className={styles.right}>
        <RightSide />
      </div>
    </div>
  );
}

export default AppLayoutPortfolio;
