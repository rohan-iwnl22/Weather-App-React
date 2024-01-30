import axios, { Axios } from "axios";
import { useState } from "react";
import Weather from "./components/Weather";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_key = "897b2daa634793dddcdf4f09e8121106";

  const searchLocation = (event) => {
    if (event.key == "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_key}`;
  return (
    <div className="h-full w-full relative bg-orange-300">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}
