import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

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
                          src= {props.data.icon}
                          alt="weather-icon"
                          className="icon-current"
                        />
                        <WeatherTemperature fahrenheit={props.data.temperature} />
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
                 <WeatherForecast />
              </div>
        </div>
    );
}