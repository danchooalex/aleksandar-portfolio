import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./SocialMedia.module.css";

export default function SocialMedia() {
  return (
    <aside className={styles.aside}>
      <section className={styles.section}>
        <ul>
          <li className={styles.lies}>
            <a
              className={styles.az}
              href="https://www.instagram.com/maria_konsonanca?igsh=dXcweTZvMzlvNTVp&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <FaGithub className={styles.components} />
            </a>
          </li>
          <li className={styles.lies}>
            <a
              className={styles.az}
              href="https://t.me/mari_muzi"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin className={styles.components} />
            </a>
          </li>
          <li className={styles.lies}>
            <a className={styles.az} href="#">
              Instagram <FaInstagram className={styles.components} />
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}
