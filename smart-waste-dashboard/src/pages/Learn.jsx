
import styles from "./Learn.module.css";

function Learn() {
  return (
    <div>
      <h1 className={styles.title}> Waste Guide</h1>

      <ul className={styles.list}>
        <li> Organic Waste</li>
        <li> Recyclable Waste</li>
        <li> Hazardous Waste</li>
      </ul>
    </div>
  );
}

export default Learn;