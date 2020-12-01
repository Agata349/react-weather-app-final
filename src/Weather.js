import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "dc47e5d5ff6f5cb1e2548e5a30cb1a26";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
     return (
    <div className="Weather">
            <h2> {weather.city} </h2>
            <form className="Form" onSubmit={handleSubmit}>
               <input className="Search" type="search" placeholder="Enter a city" onChange={handleCityChange}/>
                <input className="Search-button" type="submit" value="Search" />
                <input className="Current-button" type="submit" value="Current location" /> 
            </form>
            <WeatherData data={weather}/>
             </div> 
    ); 
  } else {
    search();
    return "Loading..."; 
  }     
}