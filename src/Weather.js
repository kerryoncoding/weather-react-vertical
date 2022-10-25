import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"; 
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


export default function Weather(props){
  const [weatherData, setweatherData] = useState({ready:false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
    console.log(response.data);
    setweatherData({
      ready: true,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed)
    }); 
  }

  function search(){
  const apiKey = "ca47e9200d90350ad07692b8ce034ca3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiUrl}`).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

if (weatherData.ready) {
  
    return(
      <div className="Weather">
          <div className="card">
              <div className="row">
                  <div className="col">
                  <form className="input-city" onSubmit={handleSubmit}>
                      <div className="row mt-3">
                          <div className="col-1"></div>
                          <div className="col-8">
                              <div className="mb-3">
                                  <input type="text" className="form-control" id="city-name-input" placeholder="Enter a city..." onChange={handleCityChange} />
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
  search();
  return "Loading..."
}

     
}