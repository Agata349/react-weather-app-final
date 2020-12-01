import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherData(props) {
 return (
  <div className="row">
      <div className="col">
        <p className="Current-weather">
          <span className="Current-date"> <FormattedDate date={props.data.date}/> </span>
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
           <span className="Description"> {props.data.description}</span> <strong> {props.data.temperature} </strong>
      <a href="/" className="Unit">°C</a> <span className="Divider">|</span>{" "}
      <a href="/" className="Unit">
        °F
      </a>
        </p>
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