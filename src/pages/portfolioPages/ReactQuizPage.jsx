import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import Quiz from "../../components/quizComponents/Quiz";

import styles from "../../components/quizComponents/Quiz.module.css";
import { QuizProvider } from "../../contexts/QuizContext";

function ReactQuizPage() {
  return (
    <div>
      <PageNavPortfolio />
      <QuizProvider>
        <div className={`${styles.quiz} ${styles.mtquiz}`}>
          <Quiz />
        </div>
      </QuizProvider>
    </div>
  );
}

export default ReactQuizPage;
