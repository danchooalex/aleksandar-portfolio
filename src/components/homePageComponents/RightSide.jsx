import React from "react";
import styles from "./RightSide.module.css";

const coder = [{}];

function RightSide() {
  return (
    <aside className={styles.rightContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <div className={styles.btn}></div>
              <div className={styles.btn1}></div>
              <div className={styles.btn2}></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.text}>
                <aside className="mb-6 ml-4 flex flex-row gap-3">
                  <p className="text-sky-300">const</p>
                  <p className="text-sky-500">coder</p>
                  <p className="text-purple-500">=</p>
                  <p className="text-purple-500">{`{`}</p>
                </aside>
                <div className="ml-8 mt-2 flex flex-row">
                  <p className="ml-3 gap-3 text-stone-100">name:</p>
                  <p className="ml-3">"Aleksandar Dancu",</p>
                </div>
                <div className="ml-8 mt-2 flex flex-row">
                  <p className="ml-3 gap-3 text-stone-100">gender:</p>
                  <p className="ml-3">"Male",</p>
                </div>
                <div className="ml-8 mt-2 flex flex-row">
                  <p className="ml-3 gap-3 text-stone-100">age:</p>
                  <p className="ml-3 text-purple-500">41,</p>
                </div>
                <div className="ml-8 mt-2 flex flex-row">
                  <p className="ml-3 gap-3 text-stone-100">company:</p>
                  <p className="ml-3 text-sky-500">null,</p>
                </div>
                <div className="ml-8 mt-2 flex flex-row">
                  <p className="ml-3 gap-3 text-stone-100">location:</p>
                  <p className="ml-3">"Belgrade, Serbia",</p>
                </div>
                <div className="ml-8 mt-2 flex flex-row">
                  <p className="ml-3 gap-3 text-stone-100">followers:</p>
                  <p className="ml-3 text-purple-500">29,</p>
                </div>
                <div className="ml-8 mt-2 flex flex-row">
                  <p className="ml-3 gap-3 text-stone-100">following:</p>
                  <p className="ml-3 text-purple-500">12,</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

export default RightSide;
