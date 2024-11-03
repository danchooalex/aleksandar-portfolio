import { useQuiz } from "../../contexts/QuizContext";

import styles from "./Quiz.module.css";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className={styles.start}>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className={`${styles.btn} ${styles.btnui}`}
        onClick={() => dispatch({ type: "start" })}
      >
        {`Let's start`}
      </button>
    </div>
  );
}

export default StartScreen;
