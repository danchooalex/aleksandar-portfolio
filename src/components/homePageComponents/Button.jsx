import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.btn} onClick={() => alert("NOT ready FREDDY")}>
      download CV
    </button>
  );
}

export default Button;
