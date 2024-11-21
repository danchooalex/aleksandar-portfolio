import React from "react";
import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import StarRating from "../../components/starRatingComponents/StarRating";
import SocialMedia from "../../components/socialMediaComponent/SocialMedia";
import styles from "./StarRatingPage.module.css";
import BackToTop from "../../components/homePageComponents/BackToTop";

function StarRatingPage() {
  return (
    <>
      <PageNavPortfolio />
      <div className={styles.rate}>
        <StarRating />
      </div>
      <BackToTop />
      <SocialMedia />
    </>
  );
}

export default StarRatingPage;
