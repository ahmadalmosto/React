import React, { useState, useEffect } from "react";

function Weather() {
  const [cityInput, setCityInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [controlEffect, setControlEffect] = useState([1]);

  const fetchData = (cityInput) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=108f014bfe0cd46be80da260931deb11`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData({
            name: data.name,
            country: data.sys.country,
            main: data.weather[0].main,
            description: data.weather[0].description,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            lon: data.coord.lon,
            lat: data.coord.lat,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData(cityInput);
    setCityInput("");
  }, [controlEffect]);

  const handleOnChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setControlEffect[0] === 1 ? setControlEffect([0]) : setControlEffect([1]);
  };

  return (
    <div className='forminfo'> 
      <form onSubmit={handleOnSubmit}>
        <label>
          City Name:
          <input type="text" value={cityInput} onChange={handleOnChange} />
        </label>
        <input type="submit" value="Get Weather" className='button'/>
      </form>

      <RenderCity weatherData={weatherData}/>
    </div>
  );
}
const RenderCity = ({ weatherData }) => {
  return (
   
        <div className='info'>
      <p>
        {weatherData.name} {weatherData.country}
      </p>
      <p>{weatherData.main}</p>
      <p>{weatherData.description}</p>
      <p>{weatherData.tempMin}</p>
      <p>{weatherData.tempMax}</p>
      <p>{weatherData.lon}</p>
      <p>{weatherData.lat}</p>
      </div>
    
  );
};
export default Weather;
