import styles from "./Learn.module.css";

function Learn() {
  return (
    <div className={styles.container}>
      <h1> Waste Management Guide</h1>

      <div className={styles.section}>
        <h2> What is Waste Management?</h2>
        <p>
          Waste management involves collecting, transporting, and recycling waste
          materials to reduce environmental impact and improve sustainability.
        </p>
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          alt="waste"height="300"width="150"
        />
      </div>

      <div className={styles.section}>
        <h2> Types of Waste</h2>
        <ul>
          <li>Biodegradable (food, paper)</li>
          <li>Non-biodegradable (plastic, metal)</li>
          <li>Hazardous (chemicals, batteries)</li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
          alt="types"height="300"width="150"
        />
      </div>

      <div className={styles.section}>
        <h2> Tips to Reduce Waste</h2>
        <ul>
          <li>Use reusable bags</li>
          <li>Avoid single-use plastics</li>
          <li>Recycle properly</li>
          <li>Compost organic waste</li>
        </ul>
      </div>
    </div>
  );
}

export default Learn;