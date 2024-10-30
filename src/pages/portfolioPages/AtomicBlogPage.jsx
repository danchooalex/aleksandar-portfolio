import AtomicBlog from "../../components/atomicComponents/AtomicBlog";
import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";

import styles from "../../components/atomicComponents/AtomicBlog.module.css";

function AtomicBlogPage() {
  return (
    <div>
      <PageNavPortfolio />
      <AtomicBlog className={styles} />
    </div>
  );
}

export default AtomicBlogPage;
