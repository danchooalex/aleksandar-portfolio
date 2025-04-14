import React from "react";
import styles from "../homePageComponents/LeftSide.module.css";
import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import Button from "./Button";

function LeftSide() {
  return (
    <main className={styles.leftContainer}>
      <img className={styles.image} src="./mug.jpg" />
      <p className={styles.info}>
        {`I can craft elegant digital experiences and i'm proficient with
        programing languages and technologies bellow . . .`}
      </p>

      <div className={styles.icoSettings}>
        <TiHtml5 className={styles.icoAnimation} title="HTML5" />
        <FaCss3Alt className={styles.icoAnimation} title="CSS3" />
        <IoLogoJavascript className={styles.icoAnimation} title="JS" />
        <FaReact className={styles.icoAnimation} title="ReactJS" />
        <SiTailwindcss className={styles.icoAnimation} title="TailwindCSS" />
        <SiNextdotjs className={styles.icoAnimation} title="NextJS" />
        <SiRedux className={styles.icoAnimation} title="Redux" />
        <SiReactrouter className={styles.icoAnimation} title="ReactRouter" />
        <SiAdobephotoshop
          className={styles.icoAnimation}
          title="AdobePhotoShop"
        />
      </div>

      <Button />
    </main>
  );
}

export default LeftSide;
