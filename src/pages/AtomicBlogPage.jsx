import AtomicBlog from "../components/atomicComponents/AtomicBlog";
import PageNav from "../components/PageNav";

import styles from "../components/atomicComponents/AtomicBlog.module.css";

function AtomicBlogPage() {
  return (
    <div>
      <PageNav />
      <AtomicBlog className={styles} />
    </div>
  );
}

export default AtomicBlogPage;
