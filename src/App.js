import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import SearchBar from "./components/SearchBar";
import UnitToggle from "./components/UnitToggle";

export default function App() {
  const [units, setUnits] = useState("metric");

  // placeholder until API is wired
  const handleSearch = (city) => {
    console.log("Searching weather for:", city, "with units:", units);
  };

  return (
    <>
      <GlobalStyles />
      <UnitToggle units={units} onChange={setUnits} />
      <SearchBar onSearch={handleSearch} />
    </>
  );
}
