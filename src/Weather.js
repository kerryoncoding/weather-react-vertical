import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"; 
import "./Weather.css";


export default function Weather(props){
  const [weatherData, setweatherData] = useState({ready:false });
  function handleResponse(response){
    console.log(response.data);
    setweatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: "Friday 7:05pm",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed)
    });    
  }

if (weatherData.ready) {
    return(
      <div className="Weather">
          <div className="card">
              <div className="row">
                  <div className="col">
                  <form className="input-city">
                      <div className="row mt-3">
                          <div className="col-1"></div>
                          <div className="col-8">
                              <div className="mb-3">
                                  <input type="text" className="form-control" id="city-name-input" placeholder="Enter a city..." />
                              </div>
                          </div>
                          <div className="col-3">
                              <button type="submit" className="btn btn-secondary">Submit</button>
                          </div>
                      </div>
                  </form>
                  </div>
              </div>
              <WeatherInfo data={weatherData} />
          </div>
      </div>
  );

} else {
  const apiKey = "ca47e9200d90350ad07692b8ce034ca3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiUrl}`).then(handleResponse);

  return "Loading..."
}


        
      }