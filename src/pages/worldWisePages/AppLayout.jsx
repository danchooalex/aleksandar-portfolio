import Map from "../../components/worldWiseComponents/Map";
import Sidebar from "../../components/worldWiseComponents/Sidebar";
import User from "../../components/worldWiseComponents/User";

import styles from "../worldWisePages/AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
