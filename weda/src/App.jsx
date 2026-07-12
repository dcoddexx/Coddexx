// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <div className="bg-[#020202] text-white h-screen margin-0">
//         <div class="logo-continer">
//           <img
//             src="./Images/logo.png"
//             alt="Weather App logo featuring a stylized sun and cloud design"
//             class="logo"
//           />
//         </div>
//         <div className="flex justify-center items-center h-screen">
//           <div className="bg-[#1E1E1E] p-5 rounded-[10px] w-100 text-center justify-center items-center">
//             <h1 className="mb-5 text-[24px] text-orange-600">Weather App</h1>
//             <div className="flex justify-between mb-5">
//               <input
//                 className="w-[70%] p-2.5 bg-[#333333] border-none rounded-[5px] text-white outline-none mr-2"
//                 type="text"
//                 id="city-input"
//                 placeholder="Enter city name"
//               />
//               <button
//                 id="get-weather-btn"
//                 className="w-[30%] p-2.5 bg-orange-800 border-none rounded-[5px] text-white cursor-pointer text-[12px] font-extrabold hover:bg-orange-950"
//               >
//                 Get Weather
//               </button>
//             </div>
//             <div id="weather-info" className="mr-5" class="hidden">
//               <h2 id="city-name"></h2>
//               <p id="temperature"></p>
//               <p id="description"></p>
//             </div>
//             <p id="error-message" className="text-[#FF5252]" class="hidden">
//               City not found. Please try again
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

// MY API KEY FOR OPEN WEATHER
const API_KEY = "21a7ad13471c2971ba56fda0e425fc86";

// FUNCTION THAT TRANSFORMS THE DATA FROM THE SERVER
function transformForecast(list) {
  const seen = new Set();
  return list
    .filter((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (seen.has(date)) return false;
      seen.add(date);
      return true;
    })
    .slice(0, 5)
    .map((item) => ({
      date: new Date(item.dt_txt).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      temp: Math.round(item.main.temp),
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    }));
}

// I NEED A FUNCTION THAT HANDLES THE LABEL AND COLOR FOR UV VALUE DEPENDING ON THE NUMBER
function getUVLabel(uv) {
  if (uv <= 2) return { label: "Low", color: "text-green-400" };
  if (uv <= 5) return { label: "Moderate", color: "text-yellow-400" };
  if (uv <= 7) return { label: "High", color: "text-orange-400" };
  if (uv <= 10) return { label: "Very High", color: "text-red-400" };
  return { label: "Extreme", color: "text-purple-400" };
}

// ── Main Component ────────────────────────────────────────────────────────────
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // MY FIRST API CALL FOR FETCHING CURRENT DATA
  async function fetchCurrentWeather(cityName) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`,
    );
    if (!res.ok) throw new Error("City not found. Please try again.");
    return res.json();
  }

  // MY SECOND API CALL TO GET THE DAYS FORECAST DATA
  async function fetchForecast(cityName) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`,
    );
    if (!res.ok) throw new Error("Could not load forecast.");
    return res.json();
  }

  // MY THIRD API CALL TO GET THE UV OF THE CITY
  async function fetchUVIndex(lat, lon) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    );
    if (!res.ok) throw new Error("Could not load UV index.");
    return res.json();
  }

  // MY FETCH HANDLER, I NEED TO GET RID OF ANY SPACE THAT USER TPYES WHEN TYPING THE CITY NAME
  async function handleGetWeather() {
    const trimmed = city.trim();
    if (!trimmed) return;

    // Reset state before new request
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);
    setUvIndex(null);

    try {
      // FETCHING CURRENT WEATHER
      const currentData = await fetchCurrentWeather(trimmed);
      setWeather(currentData);

      // GETTING THE LAT AND LON FOR THAT CITY SO UV CAN USE IT
      const { lat, lon } = currentData.coord;

      // I NEED TO FETCH FORECASR AND THE UV
      const [forecastData, uvData] = await Promise.all([
        fetchForecast(trimmed),
        fetchUVIndex(lat, lon),
      ]);

      const cleanForecast = transformForecast(forecastData.list);
      setForecast(cleanForecast);
      setUvIndex(uvData.value);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // ACTIVATES ENTER KEY IN USER KEYBOARD TO WORK THE SAME AS SEARCH BUTTON
  function handleKeyDown(e) {
    if (e.key === "Enter") handleGetWeather();
  }

  const uvInfo = uvIndex !== null ? getUVLabel(uvIndex) : null;

  // MY UI
  return (
    <div className="bg-[#020202] text-white min-h-screen flex justify-center items-center p-4">
      <div className="bg-[#1E1E1E] p-6 rounded-[10px] w-full max-w-md shadow-lg">
        <h1 className="mb-5 text-2xl text-orange-800 font-bold text-center">
          W<span className="text-white">eda</span>
        </h1>

        <div className="flex gap-2 mb-5">
          <input
            className="flex-1 p-2.5 bg-[#333333] border-none rounded-[5px] text-white outline-none"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleGetWeather}
            disabled={loading}
            className="px-4 py-2.5 bg-orange-800 border-none rounded-[5px] text-white cursor-pointer text-sm font-extrabold hover:bg-orange-950 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {/* HANDLES ERROR */}
        {error && <p className="text-[#FF5252] text-center mb-4">{error}</p>}

        {/* RENDERING CURRENT WEATHER */}
        {weather && (
          <div className="mb-5 p-4 bg-[#2a2a2a] rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-orange-400">
                  {weather.name}, {weather.sys.country}
                </h2>
                <p className="text-4xl font-bold mt-1">
                  {Math.round(weather.main.temp)}°C
                </p>
                <p className="text-gray-400 capitalize mt-1">
                  {weather.weather[0].description}
                </p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="w-16 h-16"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4 text-sm text-gray-300">
              <div className="bg-[#333] p-2 rounded text-center">
                <p className="text-gray-500 text-xs">Feels like</p>
                <p className="font-semibold">
                  {Math.round(weather.main.feels_like)}°C
                </p>
              </div>
              <div className="bg-[#333] p-2 rounded text-center">
                <p className="text-gray-500 text-xs">Humidity</p>
                <p className="font-semibold">{weather.main.humidity}%</p>
              </div>
              <div className="bg-[#333] p-2 rounded text-center">
                <p className="text-gray-500 text-xs">Wind</p>
                <p className="font-semibold">{weather.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}

        {/* THIRD API CALL TO RENDER THE UV INDEX */}
        {uvInfo && (
          <div className="mb-5 p-3 bg-[#2a2a2a] rounded-lg flex justify-between items-center">
            <span className="text-gray-400 text-sm">☀️ UV Index</span>
            <div className="text-right">
              <span className="font-bold text-lg">{uvIndex}</span>
              <span className={`ml-2 text-sm font-semibold ${uvInfo.color}`}>
                {uvInfo.label}
              </span>
            </div>
          </div>
        )}

        {/* RENDERS 5 DAYS FORECAST OF THE CITY */}
        {forecast && (
          <div>
            <h3 className="text-orange-400 font-bold mb-3 text-sm uppercase tracking-wide">
              5-Day Forecast
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {forecast.map((day, i) => (
                <div
                  key={i}
                  className="bg-[#2a2a2a] rounded-lg p-3 text-center min-w-[80px] flex-shrink-0"
                >
                  <p className="text-xs text-gray-400 mb-1">{day.date}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                    alt={day.description}
                    className="w-8 h-8 mx-auto"
                  />
                  <p className="text-sm font-bold text-orange-300">
                    {day.temp}°C
                  </p>
                  <p className="text-xs text-gray-500 capitalize mt-1">
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
