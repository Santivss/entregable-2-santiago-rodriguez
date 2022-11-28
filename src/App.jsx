import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { WeatherCard } from "./Components/WeatherCard";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const succes = (pos) => {
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  useEffect(() => {
    if (coords) {
      const apiKey = `f5807eaf203cb0b5cf44ed371ec57935`;
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`;
      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          const celcius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celcius * (9/5) + 32).toFixed(1);
          setTemp({celcius,farenheit})
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [coords]);

  return (
    <div className="App">
      <WeatherCard weather={weather}
      temp={temp}
       />
    </div>
  );
}

export default App;
