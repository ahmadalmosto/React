import React from "react";
import City from './City'
import weatherData from "./city-weather.json";

export default function CityInfo() {
  return (
    <>
      {weatherData.map((city) => {
        return (
          <div key={city.id}>
          <City city={city}/>
          </div>
        );
      })}
    </>
  );
}
