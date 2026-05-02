import { useState } from "react";
import styles from "./Tracker.module.css";

function Tracker() {
  const [activities, setActivities] = useState([]);
  const [input, setInput] = useState("");

  const addActivity = () => {
    if (!input) return;
    setActivities([...activities, input]);
    setInput("");
  };

  const deleteActivity = (index) => {
    const newList = activities.filter((_, i) => i !== index);
    setActivities(newList);
  };

  return (
    <div>
      <h1 className={styles.title}>Tracker</h1>

      <div className={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter activity"
        />
        <button onClick={addActivity}>Add</button>
      </div>

      <ul>
        {activities.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteActivity(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;