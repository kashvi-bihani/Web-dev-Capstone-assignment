import axios from "axios";

const API_KEY = "fbf2fd0357a1f5fc7bab6fced1ec12ab";

export const fetchAirQuality = async (city) => {
  try {

    const geoRes = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );

    if (!geoRes.data.length) return [];

    const { lat, lon } = geoRes.data[0];

    const airRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    return airRes.data.list;
  } catch (error) {
    console.error(error);
    return [];
  }
};