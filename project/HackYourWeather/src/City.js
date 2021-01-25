import React from "react";

export default function City({ city }) {
  return (
    <>
      <div className="card text-dark bg-light mb-3">
        <div className="card-body">
          <h4 className="card-title">
            {city.sys.country}, {city.name}
          </h4>
          <p className="card-text">{city.weather[0].main}</p>
          <p className="card-text">{city.weather[0].description}</p>
          <p className="card-text">Temp min :{city.main.temp_min}</p>
          <p className="card-text">Temp max :{city.main.temp_max}</p>
          <p className="card-text">
            Location :{city.coord.lon} ,{city.coord.lat}
          </p>
        </div>
      </div>
    </>
  );
}
