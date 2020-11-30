import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
    <div className="Weather">
            <h2>Katowice</h2>
            <form className="Form">
               <input className="Search" type="search" placeholder="Enter a city" />
                <input className="Search-button" type="submit" value="Search" />
                <input className="Current-button" type="submit" value="Current location" /> 
            </form>
            <div className="row">
      <div className="col">
        <p className="Current-weather">
          <span className="Current-date">Sunday 18:35</span>
          <br />
          <i className="fas fa-cloud main"></i>
        </p>
        <div className="Temp">
      <span className="Description">Cloudy</span> 12
      <a href="/"> °C</a> |{" "}
      <a href="/">
        °F
      </a>
    </div>
      </div>
      <div className="col">
        <p className="Wind">
          Humidity: <span id="Humidity">80%</span> <br />
          Wind: <span id="Wind">5 km/h</span>
        </p>
        </div>
        </div>
    </div> 
    );  
}