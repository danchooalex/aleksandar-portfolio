import React from "react";
import GitHubCalendar from "react-github-calendar";

import styles from "../homePageComponents/GitCalendar.module.css";

function GitCalendar() {
  return (
    <div className={styles.calendar}>
      <GitHubCalendar username="danchooalex" year="last" maxLevel={9} />
    </div>
  );
}

export default GitCalendar;
