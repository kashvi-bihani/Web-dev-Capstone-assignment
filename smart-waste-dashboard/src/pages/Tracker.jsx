import { useState } from "react";

function Tracker() {
  const [activities, setActivities] = useState([]);
  const [input, setInput] = useState("");

  const addActivity = () => {
    if (input.trim() === "") return;

    setActivities([...activities, input]);
    setInput("");
  };

  const deleteActivity = (index) => {
    const newList = activities.filter((_, i) => i !== index);
    setActivities(newList);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">📝 Eco Activity Tracker</h1>

      <div className="mt-4 flex gap-2">
        <input
          className="border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter activity"
        />
        <button
          onClick={addActivity}
          className="bg-green-500 text-white px-4"
        >
          Add
        </button>
      </div>

      <ul className="mt-4">
        {activities.map((item, index) => (
          <li key={index} className="flex justify-between mt-2">
            {item}
            <button
              onClick={() => deleteActivity(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;