import { useState } from "react";
import styles from "./Tracker.module.css";

function Tracker() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!task.trim()) return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
  };

  // simple filtering
  const filteredList = list.filter((item) => {
    if (filter === "all") return true;
    return item.toLowerCase().includes(filter);
  });

  const total = list.length;
  const plastic = list.filter((t) => t.toLowerCase().includes("plastic")).length;
  const organic = list.filter((t) => t.toLowerCase().includes("organic")).length;
  const ewaste = list.filter((t) => t.toLowerCase().includes("ewaste") || t.toLowerCase().includes("e-waste")).length;

  return (
    <div className={styles.container}>
      <h1> Waste Tracker</h1>

      <div className={styles.stats}>
        <p>Total: {total}</p>
        <p>Plastic: {plastic}</p>
        <p>Organic: {organic}</p>
        <p>E-Waste: {ewaste}</p>
      </div>

      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Add waste activity..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className={styles.filters}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("plastic")}>Plastic</button>
        <button onClick={() => setFilter("organic")}>Organic</button>
        <button onClick={() => setFilter("ewaste")}>E-Waste</button>
      </div>

      <ul className={styles.list}>
        {filteredList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;