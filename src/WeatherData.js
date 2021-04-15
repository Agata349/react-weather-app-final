import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Units from "./Units";


export default function WeatherData(props) {
 return (
  <div className="row">
      <div className="col">
        <p className="Current-weather">
          <span className="Current-date"> <FormattedDate date={props.data.date}/> </span>
          <WeatherIcon code={props.data.icon} alt={props.data.description} size={52} />
          <Units celsius={props.data.temperature} description={props.data.description} />
        </p>
      </div>
      <div className="col">
        <p className="Wind">
          Humidity: <span id="Humidity">{props.data.humidity}%</span> <br />
          Wind: <span id="Wind"> {Math.round(props.data.wind)} km/h</span>
        </p>
    </div>
</div>
 );  
}