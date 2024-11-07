import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.btn} onClick={() => alert("Stop poking me")}>
      Button
    </button>
  );
}

export default Button;
