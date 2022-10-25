import React from "react";
import axios from "axios";

export default function WeatherForecast(){

    function handleResponse(response){
        console.log(response.data);

    }

    let apiKey = "ca47e9200d90350ad07692b8ce034ca3";
    let lat = 70;
    let lon = 40;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return (        
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
               
    );
}