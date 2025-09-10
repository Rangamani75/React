import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim()) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
