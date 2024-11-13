import React from "react";
import { Link } from "react-router-dom";
import styles from "../worldWiseComponents/Logo.module.css";

function Logo() {
  return (
    <Link to="/world">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
