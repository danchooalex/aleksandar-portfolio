import React from "react";
import styles from "../homePageComponents/RightSide.module.css";

function CoderComponent() {
  return (
    <aside className={styles.text}>
      <div className="mb-6 ml-4 flex flex-row gap-3">
        <p className="text-sky-300">const</p>
        <p className="text-sky-500">coder</p>
        <p className="text-purple-400">=</p>
        <p className="text-purple-400">{`{`}</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">name:</p>
        <p className="ml-3">{`Aleksandar Dancu`},</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">gender:</p>
        <p className="ml-3">{`Male`},</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">age:</p>
        <p className="ml-3 text-purple-500">41,</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">company:</p>
        <p className="ml-3 text-sky-500">null,</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">location:</p>
        <p className="ml-3">{`Belgrade, Serbia`},</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">followers:</p>
        <p className="ml-3 text-purple-500">29,</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">following:</p>
        <p className="ml-3 text-purple-500">12,</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">repositories:</p>
        <p className="ml-3 text-purple-500">35,</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">hireable:</p>
        <p className="ml-3 text-sky-500">true,</p>
      </div>
      <div className="ml-8 mt-1 flex flex-row">
        <p className="ml-3 gap-3 text-stone-100">skills:</p>
        <p className="ml-3 text-sky-500">{`[`}</p>
      </div>
      <div className="ml-20 mt-2">
        <p>{`HTML5`},</p>
        <p>{`CSS3`},</p>
        <p>{`JavaScript`},</p>
        <p>{`ReactJS`},</p>
        <p>{`TailwindCSS`},</p>
        <p>{`Redux`},</p>
        <p>{`NextJS`},</p>
        <p>{`React Router`},</p>
        <p>{`Context API`},</p>
        <p>{`Adobe Photoshop`},</p>
      </div>
      <div className="ml-12 mt-3 flex flex-row gap-2">
        <p className="text-sky-500">{`]`}</p>
        <p className="text-stone-100">,</p>
      </div>
      <div className="ml-6 mt-3 flex flex-row gap-2">
        <p className="text-purple-400">{`}`}</p>
        <p className="text-stone-100">;</p>
      </div>
    </aside>
  );
}

export default CoderComponent;
