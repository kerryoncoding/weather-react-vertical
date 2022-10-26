import React, { useState } from "react";
import axios from "axios";
import WeatherForecastCard from "./WeatherForecastCard";


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
                <WeatherForecastCard forecast={forecast[0]} />
                      
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