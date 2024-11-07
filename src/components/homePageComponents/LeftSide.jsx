import styles from "./LeftSide.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Button from "./Button";

function LeftSide() {
  return (
    <aside className={styles.leftContainer}>
      <img className={styles.image} src="./mug.jpg" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat
        consequatur quae non. Nisi officia quae nemo. Harum blanditiis alias
        ducimus eos sint, facere nisi quisquam rem iure voluptate. Magnam?
      </p>
      <div>
        <FaGithub />
        <FaLinkedin />
        <FaFacebook />
      </div>
      <Button />
    </aside>
  );
}

export default LeftSide;