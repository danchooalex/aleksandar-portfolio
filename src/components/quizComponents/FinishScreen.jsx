import React from "react";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Quiz.module.css";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

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
