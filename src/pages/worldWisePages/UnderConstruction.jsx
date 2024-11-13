import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import styles from "./UnderConstruction.module.css";
import React from "react";

function UnderConstruction() {
  return (
    <div>
      <PageNavPortfolio />
      <div className={styles.construction}>
        <h1>
          <span>🚧</span> Page is currently under developement...Thank you for
          your patience!
        </h1>
      </div>
    </div>
  );
}

export default UnderConstruction;
