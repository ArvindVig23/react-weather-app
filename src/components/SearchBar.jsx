import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSearch(input.trim());
        setInput("");
      }}
      style={{ margin: "1.5rem auto", textAlign: "center" }}
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "0.5rem 1rem",
          width: "220px",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          marginLeft: "0.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "none",
          background: "#0077cc",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}
