import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastPreview from "./ForecastPreview";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState (null);

    function handleForecast(response) {
        setForecast(response.data);
        setLoaded(true);
    }
        

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="Forecast row">
                    {forecast.list.slice(0, 6).map(function (forecastItem) {
                        return <ForecastPreview data={forecastItem}/>;
                    })}
            </div>
        );
    } else {
    let apiKey = "dc47e5d5ff6f5cb1e2548e5a30cb1a26";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return null;

    }  
}