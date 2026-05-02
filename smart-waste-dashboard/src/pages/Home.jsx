import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAirData } from "../features/airSlice";
import { debounce } from "../utils/debounce";
import AirChart from "../components/AirChart";
import styles from "./Home.module.css";

function Home() {
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.air);

  const debouncedFetch = debounce((value) => {
    if (!value) return;
    dispatch(getAirData(value));
  }, 500);

  useEffect(() => {
    debouncedFetch(city);
  }, [city]);

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.container}>
        
      
        <h1 className={styles.title}> Air Quality Dashboard</h1>

        <button
          className={styles.toggleBtn}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : " Dark Mode"}
        </button>

        <div className={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter city (e.g. Delhi)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {loading && (
          <p style={{ textAlign: "center" }}>Loading...</p>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.results}>
          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>AQI: {item.main?.aqi}</h3>
              <p>PM2.5: {item.components?.pm2_5}</p>
              <p>PM10: {item.components?.pm10}</p>
              <p>CO: {item.components?.co}</p>
            </div>
          ))}
        </div>

        {data.length > 0 && <AirChart data={data} />}

      </div>
    </div>
  );
}

export default Home;