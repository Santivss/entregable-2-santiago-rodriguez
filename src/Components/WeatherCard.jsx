import React, { useState } from "react";

export const WeatherCard = ({ weather, temp }) => {
  const [isCelcius, setisCelcius] = useState(true);

  const handClick = () => setisCelcius(!isCelcius);

  return (
    <article className="card">
      <div className="card_item1">
        <h1 className="card_temp">
          {isCelcius ? `${temp?.celcius}°` : `${temp?.farenheit} °`}{" "}
        </h1>
        <h2 className="card_location">{weather?.name}, {weather?.sys.country}</h2>
        <button onClick={handClick} className="card_btn">Change to {isCelcius ? `C` : `F`}
        </button>
      </div>
      <div className="card_item2">
        <h2 className="card_info">"{weather?.weather[0].description}"</h2>
        <img className="card_image" src={weather &&`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}alt=""/>
        <ul>
          <li>
            <span className="card_wind2">Wind Speed {weather?.wind.speed}m/s</span>
          </li>
          <li>
            <span className="card_clouds">Clouds {weather?.clouds.all}%</span>
          </li>
          <li>
            <span className="card_pressure"> Pressure {weather?.main.pressure} hPa</span>
          </li>
        </ul>
      </div>
    </article>
  );
};
