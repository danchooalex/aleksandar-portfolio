import styles from "./RightSide.module.css";

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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                architecto aspernatur modi corrupti ullam nostrum ipsam dolorem
                tempore necessitatibus sapiente, nihil, sed excepturi?
                Temporibus incidunt facilis dicta hic doloribus itaque.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

export default RightSide;
