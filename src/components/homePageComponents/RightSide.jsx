import React from "react";
import styles from "./RightSide.module.css";
import CoderComponent from "../homePageComponents/CoderComponent";

function RightSide() {
  return (
    <aside className={styles.rightContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <div className={styles.btn}></div>
              <div className={styles.btn1}></div>
              <div className={styles.btn2}></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CoderComponent />
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

export default RightSide;
