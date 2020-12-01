import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
 return (
  <div className="row">
      <div className="col">
        <p className="Current-weather">
          <span className="Current-date"> <FormattedDate date={props.data.date}/> </span>
          <br />
          <img src="#" alt={props.data.description} />
        </p>
        <div className="Temp">
    <span className="Description"> {props.data.description} </span> {props.data.temperature}
      <a href="/"> °C</a> |{" "}
      <a href="/">
        °F
      </a>
    </div>
      </div>
      <div className="col">
        <p className="Wind">
          Humidity: <span id="Humidity">{props.data.humidity} %</span> <br />
          Wind: <span id="Wind"> {Math.round(props.data.wind)} km/h</span>
        </p>
    </div>
</div>
 );  
}