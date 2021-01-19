import React from "react";

import weatherData from "./city-weather.json";
export default function CityInfo() {
  return (
    <>
      {weatherData.map((city) => {
        return (
          <div class="card text-dark bg-light mb-3" key={city.id} >
            <div class="card-body">
              <h4 class="card-title">
                {city.sys.country}, {city.name}
              </h4>
              <p class="card-text">{city.weather[0].main}</p>
              <p class="card-text">{city.weather[0].description}</p>
              <p class="card-text">Temp min :{city.main.temp_min}</p>
              <p class="card-text">Temp max :{city.main.temp_max}</p>
              <p class="card-text">
                Location :{city.coord.lon} ,{city.coord.lat}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
