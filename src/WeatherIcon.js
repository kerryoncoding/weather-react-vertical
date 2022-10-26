import React from "react";

export default function WeatherIcon(props) {
    let iconCode= `http://openweathermap.org/img/wn/${props.code}@2x.png`;
    return (
        <div> 
            <img src={iconCode}
            alt="future-weather-icon"
            className="icon-future"/>
        </div>
    );
}