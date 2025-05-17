const API_KEY = process.env.REACT_APP_OWM_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchCurrentWeather(city, units = "metric") {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(
    city
  )}&units=${units}&appid=${API_KEY}`;
  console.log("🌐 Fetching URL:", url);

  const res = await fetch(url);
  console.log("👀 Response status:", res.status);

  if (!res.ok) throw new Error("City not found");
  return res.json();
}

export async function fetchFiveDayForecast(city, units = "metric") {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(
      city
    )}&units=${units}&appid=${API_KEY}`
  );
  if (!res.ok) throw new Error("Forecast not available");
  return res.json();
}
