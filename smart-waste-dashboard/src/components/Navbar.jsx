import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
        Home
      </NavLink>

      <NavLink to="/learn" className={({ isActive }) => isActive ? styles.active : ""}>
        Learn
      </NavLink>

      <NavLink to="/tracker" className={({ isActive }) => isActive ? styles.active : ""}>
        Tracker
      </NavLink>
    </nav>
  );
}

export default Navbar;