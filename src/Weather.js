import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
    <div className="Weather">
            <h2>Katowice</h2>
            <form>
               <input className="Search" type="search" placeholder="Enter a city" />
                <input className="SearchButton" type="submit" value="Search" />
                <input className="CurrentButton" type="submit" value="Current location" /> 
            </form>
            <div className="row">
      <div className="col">
        <p className="CurrentWeather">
          <span className="CurrentDate">Sunday 18:35</span>
          <br />
          <i className="fas fa-cloud main"></i>
        </p>
        <div className="Temp">
      <span className="Description">Cloudy</span> 12
      <a href="/"> °C</a> |{" "}
      <a href="/" id="fahrenheit">
        °F
      </a>
    </div>
      </div>
      <div className="col">
        <p className="wind">
          Humidity: <span id="humidity">80%</span> <br />
          Wind: <span id="wind">5 km/h</span>
        </p>
        </div>
        </div>
    </div> 
    );  
}