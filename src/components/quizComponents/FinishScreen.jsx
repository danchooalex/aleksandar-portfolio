import styles from "./Quiz.module.css";

function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
  emoji,
}) {
  const percentage = Number((points / maxPossiblePoints) * 100);

  return (
    <>
      <p className={styles.result}>
        <span>{emoji}</span>
        You scored <strong>{points}</strong> points out of {maxPossiblePoints} (
        {Math.ceil(percentage)} % )
      </p>
      <p className={styles.highscore}>(Highscore: {highscore} points)</p>
      <button
        className={`${styles.btn} ${styles.btnui}`}
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
