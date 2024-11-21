import React from "react";
import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import Quiz from "../../components/quizComponents/Quiz";

import styles from "../../components/quizComponents/Quiz.module.css";
import SocialMedia from "../../components/socialMediaComponent/SocialMedia";
import { QuizProvider } from "../../contexts/QuizContext";
import BackToTop from "../../components/homePageComponents/BackToTop";

function ReactQuizPage() {
  return (
    <div>
      <PageNavPortfolio />
      <QuizProvider>
        <div className={`${styles.quiz} ${styles.mtquiz}`}>
          <Quiz />
        </div>
      </QuizProvider>
      <BackToTop />
      <SocialMedia />
    </div>
  );
}

export default ReactQuizPage;
