import React from "react";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Quiz.module.css";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  // console.log(numQuestion);

  return (
    <header className={styles.progress}>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question:<strong> {index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Points: <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
