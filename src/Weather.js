import React from "react";
import axios from "axios"; 
import "./Weather.css";


export default function Weather(){
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
                <li className="city-current">Philadelphia</li>
                <li className="time-current">Sunday 1:22 PM</li>
                <li className="description-current">Clear Sky</li>
              </ul>
              <div className="row">
                <div className="col left-col">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="weather-icon"
                    className="icon-current"
                  />
                  <span className="temperature-current">67</span><span className="units"
                    ><a href="/" id="fahrenheit" className="active">°F</a> |
                    <a href="/" id="celsious">°C</a></span>
                </div>
              </div>
              <ul className="current-conditions">
                <li>
                  Humidity: <span className="humidity-current">62</span>%
                </li>
                <li>
                  Wind: <span className="wind-current">4</span> mph
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
}