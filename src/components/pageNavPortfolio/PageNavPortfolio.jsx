import { NavLink } from "react-router-dom";
import styles from "./PageNavPortfolio.module.css";

const styleNav = {
  textDecoration: "none",
  color: "#f1f3f5",
  fontWeight: "normal",
};

function PageNavPortfolio() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#ced4da", fontWeight: "bold" }
                : styleNav;
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#ced4da", fontWeight: "bold" }
                : styleNav;
            }}
            to="/rating"
          >
            Star rating
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#ced4da", fontWeight: "bold" }
                : styleNav;
            }}
            to="/counter"
          >
            Date counter
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#ced4da", fontWeight: "bold" }
                : styleNav;
            }}
            to="/react"
          >
            React quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "#ced4da", fontWeight: "bold" }
                : styleNav;
            }}
            to="/world"
          >
            World travel
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNavPortfolio;
