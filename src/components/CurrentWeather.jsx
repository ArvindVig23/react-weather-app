import React from "react";

export default function CurrentWeather({ data, units }) {
  const unitLabel = units === "metric" ? "°C" : "°F";
  return (
    <div
      style={{
        maxWidth: "320px",
        margin: "1rem auto",
        padding: "1rem",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <p style={{ fontSize: "2rem", margin: "0.5rem 0" }}>
        {Math.round(data.main.temp)}
        {unitLabel}
      </p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>
        Wind: {data.wind.speed} {units === "metric" ? "m/s" : "mph"}
      </p>
    </div>
  );
}
