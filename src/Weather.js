import React, { useState } from "react";
import axios from "axios"; 
import "./Weather.css";


export default function Weather(){
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
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
          <div className="row">
              <div className="col-6 leftSide">
                  <div className="current-weather-side">
                    <ul className="current-list">
                      <li className="city-current">{weatherData.city}</li>
                      <li className="time-current">{weatherData.date}</li>
                      <li className="description-current">{weatherData.description}</li>
                    </ul>
                    <div className="row">
                      <div className="col left-col">
                        <img
                          src="http://openweathermap.org/img/wn/10d@2x.png"
                          alt="weather-icon"
                          className="icon-current"
                        />
                        <span className="temperature-current">{Math.round(weatherData.temperature)}</span><span className="units"
                          ><a href="/" id="fahrenheit" className="active">°F</a> |
                          <a href="/" id="celsious">°C</a></span>
                      </div>
                    </div>
                    <ul className="current-conditions">
                      <li>
                        Humidity: <span className="humidity-current">{weatherData.humidity}</span>%
                      </li>
                      <li>
                        Wind: <span className="wind-current">{weatherData.wind}</span> mph
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 flex rightSide">
                  <div className="row">
                    <div id="forecast">
                      
                      <div className="row card-future">
                      <div className="col-4 day-future">Wed</div>
                      <div className="col-4">
                        <img
                          src="http://openweathermap.org/img/wn/${futureDay.weather[0].icon}@2x.png"
                          alt="weather-icon"
                          className="icon-future"
                        />
                      </div>
                      <div className="col-4 temperature-future">
                      <span className="high-future">56° </span><span className="low-future">| 34°</span>                
                      </div>
                    </div>


                      
                      </div>
                  </div>
                </div>
              </div>




          </div>
      </div>
  );

} else {

  let city = "new york";
  const apiKey = "ca47e9200d90350ad07692b8ce034ca3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiUrl}`).then(handleResponse);

  return "Loading..."
}


        
      }