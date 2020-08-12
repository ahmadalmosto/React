import React from 'react'

const RenderCity = ({oneCity,weatherData ,setWeatherData}) =>{  
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
  return(
    <div>
    <button onClick={deleteWeather} id={id}>Delete</button>
      <h2>{name}{country}</h2>
      <h3>{main}</h3>
      <p>{description}</p>
      <p>{temp_min}</p>
      <p>{temp_max}</p>
      <p>{lat} {lon}</p>
    </div>
    ) 
    }

    export default RenderCity


 