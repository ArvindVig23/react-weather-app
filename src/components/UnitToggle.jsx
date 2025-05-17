import React from "react";
import Switch from "react-switch";

export default function UnitToggle({ units, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <span style={{ marginRight: "0.5rem" }}>°C</span>
      <Switch
        onChange={() => onChange(units === "metric" ? "imperial" : "metric")}
        checked={units === "imperial"}
      />
      <span style={{ marginLeft: "0.5rem" }}>°F</span>
    </div>
  );
}
