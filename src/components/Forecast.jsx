import React from "react";

export default function Forecast({ data, units }) {
  const unitLabel = units === "metric" ? "°C" : "°F";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        margin: "1rem auto",
        maxWidth: "600px",
      }}
    >
      {data.map((item) => (
        <div
          key={item.dt}
          style={{
            background: "#fff",
            padding: "0.75rem",
            margin: "0.5rem",
            borderRadius: "8px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
            width: "100px",
          }}
        >
          <p style={{ fontSize: "0.9rem", margin: "0.25rem 0" }}>
            {new Date(item.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt={item.weather[0].description}
          />
          <p style={{ margin: "0.25rem 0" }}>
            {Math.round(item.main.temp)}
            {unitLabel}
          </p>
        </div>
      ))}
    </div>
  );
}
