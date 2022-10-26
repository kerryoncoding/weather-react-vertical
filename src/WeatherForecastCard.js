import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastCard(props){
    function day(){
        let date = new Date(props.forecast.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return(
    <div className="row card-future">
        <div className="col-4 day-future">{day()}</div>
        <div className="col-4">
            <WeatherIcon code={props.forecast.weather[0].icon} />
        </div>
        <div className="col-4 temperature-future">
            <span className="high-future">{Math.round(props.forecast.temp.max)}° </span><span className="low-future">| {Math.round(props.forecast.temp.min)}°</span>                
        </div>
    </div> 
    );
}




