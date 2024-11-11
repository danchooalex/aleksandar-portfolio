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
              <div className={styles.imageContainer}>
                <img className={styles.image} src="./coder.JPG" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

export default RightSide;
