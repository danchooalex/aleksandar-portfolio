import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import StarRating from "../../components/starRatingComponents/StarRating";
import styles from "./StarRatingPage.module.css";

function StarRatingPage() {
  return (
    <>
      <PageNavPortfolio />
      <div className={styles.rate}>
        <StarRating />
      </div>
    </>
  );
}

export default StarRatingPage;
