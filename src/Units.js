import React, { useState } from "react";

export default function Units(props) {
    const [unit, setUnit] = useState("celsius");
    function changeToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function changeToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
    return (
        <div className="Current-weather">
            <span className="Description"> {props.description} </span>
            <strong className="temperature"> {Math.round(props.celsius)} </strong>
            <span className="Unit">°C</span> <span className="Divider">|</span>{" "}
            <a href="/" className="Unit" onClick={changeToFahrenheit}>
             °F
      </a>
      </div>
    );
    } else {
        return (
        <div className="Current-weather">
            <span className="Description"> {props.description} </span>
            <strong className="temperature"> {Math.round(fahrenheit())} </strong>
            <a href="/" className="Unit" onClick={changeToCelsius}>°C</a> <span className="Divider">|</span>{" "}
            <span className="Unit">
             °F
      </span>
      </div>
    );
    }
}