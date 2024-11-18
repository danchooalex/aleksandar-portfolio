import React from "react";

import styles from "../homePageComponents/Footer.module.css";

function Footer() {
  return (
    <footer className="mt-auto">
      <p className={styles.footerText}>
        &copy; Copyright {new Date().getFullYear()} by Alex Inc.
      </p>
    </footer>
  );
}

export default Footer;
