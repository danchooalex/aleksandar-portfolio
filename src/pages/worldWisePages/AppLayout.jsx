import Map from "../../components/worldWiseComponents/Map";
import Sidebar from "../../components/worldWiseComponents/Sidebar";

import styles from "../worldWisePages/AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
