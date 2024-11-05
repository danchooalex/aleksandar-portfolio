import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import Quiz from "../../components/quizComponents/Quiz";

import styles from "../../components/quizComponents/Quiz.module.css";

function ReactQuizPage() {
  return (
    <div>
      <PageNavPortfolio />
      <div className={`${styles.quiz} ${styles.mtquiz}`}>
        <Quiz />
      </div>
    </div>
  );
}

export default ReactQuizPage;
