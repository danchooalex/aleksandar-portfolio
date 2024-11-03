import styles from "./Quiz.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderc}>
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
