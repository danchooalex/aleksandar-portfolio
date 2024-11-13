import React from "react";

import styles from "./Quiz.module.css";

function Header() {
  return (
    <header className={styles.quiz}>
      <img src="logo512.png" alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
