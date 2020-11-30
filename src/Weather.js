import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: "Sunday 18:00",
      description: response.data.weather[0].main,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weather.ready) {
     return (
    <div className="Weather">
            <h2> {weather.city} </h2>
            <form className="Form">
               <input className="Search" type="search" placeholder="Enter a city" />
                <input className="Search-button" type="submit" value="Search" />
                <input className="Current-button" type="submit" value="Current location" /> 
            </form>
            <div className="row">
      <div className="col">
        <p className="Current-weather">
          <span className="Current-date"> {weather.date} </span>
          <br />
          <img src="#" alt={weather.description} />
        </p>
        <div className="Temp">
    <span className="Description"> {weather.description} </span> {weather.temperature}
      <a href="/"> °C</a> |{" "}
      <a href="/">
        °F
      </a>
    </div>
      </div>
      <div className="col">
        <p className="Wind">
          Humidity: <span id="Humidity">{weather.humidity} %</span> <br />
          Wind: <span id="Wind"> {weather.wind} km/h</span>
        </p>
        </div>
        </div>
    </div> 
    ); 
  } else {
    const apiKey = "dc47e5d5ff6f5cb1e2548e5a30cb1a26";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";  
  } 
}