import { NavLink } from "react-router-dom";
import styles from "./PageNavPortfolio.module.css";

const styleNav = {
  textDecoration: "none",
  color: "#a8a29e",
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
                ? {
                    color: "#41dcff",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }
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
                ? {
                    color: "#41dcff",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }
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
                ? {
                    color: "#41dcff",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }
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
                ? {
                    color: "#41dcff",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }
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
                ? {
                    color: "#41dcff",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }
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
