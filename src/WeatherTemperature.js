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
        <div>
            <span className="temperature-current">{Math.round(props.fahrenheit)}</span><span className="units">°F |
            <a href="/" id="celsius" onClick={convertToCelsius}>°C</a></span>
        </div>
    );
    } else {
        return(
        <div>
            <span className="temperature-current">{Math.round(((props.fahrenheit)-32)*5/9)}</span><span className="units"><a href="/" id="fahrenheit" onClick={convertToFahrenheit}>°F</a> | °C</span>
        </div>
    );



    }

}