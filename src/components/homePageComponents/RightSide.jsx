import styles from "./RightSide.module.css";

const coder = [{}];

function RightSide() {
  return (
    <aside className={styles.rightContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <div className={styles.btn}>x</div>
              <div className={styles.btn1}>x</div>
              <div className={styles.btn2}>x</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.text}>
              <aside>
                <p>const</p>
                <p>asd</p>
              </aside>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

export default RightSide;
