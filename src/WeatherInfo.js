import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6 leftSide">
                  <div className="current-weather-side">
                    <ul className="current-list">
                      <li className="city-current">{props.data.city}</li>
                      <li className="time-current"><FormatDate date={props.data.date} /></li>
                      <li className="description-current">{props.data.description}</li>
                    </ul>
                    <div className="row">
                      <div className="col left-col">
                        <img
                          src="http://openweathermap.org/img/wn/10d@2x.png"
                          alt="weather-icon"
                          className="icon-current"
                        />
                        <span className="temperature-current">{Math.round(props.data.temperature)}</span><span className="units"
                          ><a href="/" id="fahrenheit" className="active">°F</a> |
                          <a href="/" id="celsious">°C</a></span>
                      </div>
                    </div>
                    <ul className="current-conditions">
                      <li>
                        Humidity: <span className="humidity-current">{props.data.humidity}</span>%
                      </li>
                      <li>
                        Wind: <span className="wind-current">{props.data.wind}</span> mph
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
                            src="http://openweathermap.org/img/wn/10d@2x.png"
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
    );
}