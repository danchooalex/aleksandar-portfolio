import React from "react";
import styles from "./LeftSide.module.css";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

import Button from "./Button";

function LeftSide() {
  return (
    <main className={styles.leftContainer}>
      <img className={styles.image} src="./mug.jpg" />
      <p className={styles.leftP}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat
        consequatur quae non. Nisi officia quae nemo. Harum blanditiis alias
        ducimus eos sint, facere nisi quisquam rem iure voluptate. Magnam?
      </p>
      <div className={styles.icoSettings}>
        <TiHtml5 className={styles.icoAnimation} />
        <FaCss3Alt className={styles.icoAnimation} />
        <IoLogoJavascript className={styles.icoAnimation} />
        <FaReact className={styles.icoAnimation} />
        <SiTailwindcss className={styles.icoAnimation} />
        <SiRedux className={styles.icoAnimation} />
        <SiReactrouter className={styles.icoAnimation} />
        <SiAdobephotoshop className={styles.icoAnimation} />
      </div>
      <Button />
    </main>
  );
}

export default LeftSide;
