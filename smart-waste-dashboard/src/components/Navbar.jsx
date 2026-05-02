import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/learn" className={styles.link}>Learn</Link>
      <Link to="/tracker" className={styles.link}>Tracker</Link>
    </nav>
  );
}

export default Navbar;