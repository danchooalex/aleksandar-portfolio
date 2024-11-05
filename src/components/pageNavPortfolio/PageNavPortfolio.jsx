import { NavLink } from "react-router-dom";
import styles from "./PageNavPortfolio.module.css";

function PageNavPortfolio() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            H O M E
          </NavLink>
        </li>
        <li>
          <NavLink to="/rating">R A T I N G</NavLink>
        </li>
        <li>
          <NavLink to="/counter">C O U N T E R</NavLink>
        </li>
        <li>
          <NavLink to="/react">React Quiz</NavLink>
        </li>
        <li>
          <NavLink to="/world">W O R L D</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNavPortfolio;
