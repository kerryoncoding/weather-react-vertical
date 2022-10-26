import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecastData] = useState(null);
      function handleResponse(response){
        setForecastData(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
    return (
        <div className="WeatherForcast">
            <div id="forecast">
                <div className="row card-future">
                <div className="col-4 day-future">{forecast[0].dt}</div>
                <div className="col-4">
                    <WeatherIcon code={forecast[0].weather[0].icon} />
                </div>
                <div className="col-4 temperature-future">
                    <span className="high-future">{Math.round(forecast[0].temp.max)}° </span><span className="low-future">| {Math.round(forecast[0].temp.min)}°</span>                
                </div>
                </div>       
            </div>
        </div>        
    );

    } else {
        let apiKey = "ca47e9200d90350ad07692b8ce034ca3";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }




}