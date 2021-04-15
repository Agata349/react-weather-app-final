import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

       if (loaded) {
           return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index < 6) {
                 return (
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                </div>
                 );
                    } else{
                        return null;
                    }
                 })}
            </div>
        </div>
    );
       } else {
           let apiKey = "dc47e5d5ff6f5cb1e2548e5a30cb1a26";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
  
    Axios.get(apiUrl).then(handleResponse);

    return null;
}
}