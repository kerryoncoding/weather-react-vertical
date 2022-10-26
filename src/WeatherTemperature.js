import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [units, setUnits] = useState ("fahrenheit");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnits("fahrenheit");

    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnits("celsius");
    }

    if (units === 'fahrenheit') {
        return(
        <span className="WeatherTemperature">
            <span className="temperature-current">{Math.round(props.fahrenheit)}</span><span className="units"><strong>°F </strong>|
            <a href="/" id="celsius" onClick={convertToCelsius}>°C</a></span>
        </span>
    );
    } else {
        return(
        <span className="WeatherTemperature">
            <span className="temperature-current">{Math.round(((props.fahrenheit)-32)*5/9)}</span><span className="units"><a href="/" id="fahrenheit" onClick={convertToFahrenheit}>°F</a> | <strong>°C</strong></span>
        </span>
    );
    }
}