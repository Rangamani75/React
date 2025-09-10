import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Weather() {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.cod === 200) {
          setData(json);
          setError("");
        } else {
          setError(json.message);
        }
      })
      .catch(() => setError("Failed to fetch weather"));
  }, [city]);

  if (error) return <p style={{ padding: "2rem" }}>{error}</p>;
  if (!data) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>

      <iframe
        title="map"
        width="600"
        height="450"
        style={{ border: 0, marginTop: "1rem" }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${city}`}
      ></iframe>
    </div>
  );
}

export default Weather;
