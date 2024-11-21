import React from "react";
import styles from "./Button.module.css";
import resume from "../../../public/Resume.pdf";

function Button() {
  return (
    <button className={styles.btn}>
      <a href={resume} download="Aleksandar Dancu CV">
        Download CV
      </a>
    </button>
  );
}

export default Button;
