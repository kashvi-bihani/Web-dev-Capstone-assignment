import styles from "./AirChart.module.css";

function AirChart({ data }) {
  if (!data || data.length === 0) return null;

  const item = data[0];

  const chartData = [
    { name: "PM2.5", value: item.components.pm2_5 },
    { name: "PM10", value: item.components.pm10 },
    { name: "CO", value: item.components.co },
  ];

  return (
    <div className={styles.chartContainer}>
      <h2>Pollution Levels</h2>

      {chartData.map((d, index) => (
        <div key={index} className={styles.barItem}>
          <span>{d.name}</span>
          <div className={styles.bar}>
            <div
              className={styles.fill}
              style={{ width: `${Math.min(d.value, 100)}%` }}
            ></div>
          </div>
          <span>{d.value}</span>
        </div>
      ))}
    </div>
  );
}

export default AirChart;