import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { fetchCurrentWeather, fetchFiveDayForecast } from "./api/openWeather";
import SearchBar from "./components/SearchBar";
import UnitToggle from "./components/UnitToggle";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [units, setUnits] = useState("metric");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  console.log("🔑 OWM key:", process.env.REACT_APP_OWM_API_KEY);

  const handleSearch = async (city) => {
    setError("");
    setCurrent(null);
    setForecast([]);
    try {
      const data = await fetchCurrentWeather(city, units);
      setCurrent(data);
      const fc = await fetchFiveDayForecast(city, units);
      setForecast(fc.list.filter((_, i) => i % 8 === 0));
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <GlobalStyles />
      <UnitToggle units={units} onChange={setUnits} />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {current && <CurrentWeather data={current} units={units} />}
      {forecast.length > 0 && <Forecast data={forecast} units={units} />}
    </>
  );
}
