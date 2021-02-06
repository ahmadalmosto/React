import React, { useState } from "react";
import City from "./City";
import Form from "./Form";

export default function CityInfo() {
  const [cityName, setCityName] = useState(" ");
  const [cityData, setCityData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchWeather = (cityName) => {
    setLoading(true);
    setError(false);
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_SECRET_CODE}`;
    fetch(WEATHER_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.cod === 200) {
          
          setCityData(data);
          setError(false);
          setLoading(false);
        } else {
          setError(data.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const isEmpty = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  const handleOnClick = () => {
    if (cityName !== "") fetchWeather(cityName);
  };
  const handleOnChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <>
      <Form handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
      {loading && <p>Loading...</p>}
      {error && <p>Error 404</p>}
      {isEmpty(cityData) === false && <City city={cityData} />}
    </>
  );
}
