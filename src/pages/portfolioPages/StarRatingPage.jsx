import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import StarRating from "../../components/starRatingComponents/StarRating";
import SocialMedia from "../../components/socialMediaComponent/SocialMedia";
import styles from "./StarRatingPage.module.css";

function StarRatingPage() {
  return (
    <>
      <PageNavPortfolio />
      <div className={styles.rate}>
        <StarRating />
      </div>
      <SocialMedia />
    </>
  );
}

export default StarRatingPage;
