import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div
      style={{
        textAlign: "center",
        color: "#c00",
        background: "#fee",
        padding: "0.75rem",
        margin: "1rem auto",
        width: "fit-content",
        borderRadius: "4px",
      }}
    >
      {message}
    </div>
  );
}
