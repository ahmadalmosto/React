import React from "react";

import { Link } from "react-router-dom";

const RenderCity = ({ oneCity, weatherData, setWeatherData }) => {
  const {
    name,
    weather: [{ main, description }],
    coord: { lon, lat },
    main: { temp_min, temp_max },
    sys: { country },
    id,
  } = oneCity;

  const deleteWeather = (index) => {
    const newCity = [...weatherData];
    newCity.splice(index, 1);
    setWeatherData(newCity);
  };
  return (
    <div className="card">
      <button onClick={deleteWeather} id={id} className="button">
        Delete
      </button>
      <Link to={`/${id}`} className="link">
        {name}, {country}
      </Link>
      <p>{main}</p>
      <p>{description}</p>
      <p>{temp_min}</p>
      <p>{temp_max}</p>
      <p>
        {lat} {lon}
      </p>
    </div>
  );
};

export default RenderCity;


//  const deleteWeather = (e)=>{
  //   console.log(e.target.id)
  //   const cityArr = weatherData.filter((aCity) => aCity.id !== e.target.id);

  //   setWeatherData(cityArr)
  // }