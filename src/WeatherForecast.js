import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastCard from "./WeatherForecastCard";


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response){
        console.log(response.data);
        setForecastData(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
    return (
        <div className="WeatherForcast">    
            {forecast.map(function (dailyForcast, index){
                if (index < 5){
                return(
                    <div id="forecast" key={index}>
                        <WeatherForecastCard data={dailyForcast} />                
                    </div>
                );
                } else {
                    return null;
                } 
            })}            
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