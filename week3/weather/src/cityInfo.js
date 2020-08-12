import React, { useState, useEffect } from "react";
import CityForm from "./cityForm";
import WeatherList from "./weatherList";
import HandleErrors from "./errors";

function Weather() {
  const [cityInput, setCityInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [controlEffect, setControlEffect] = useState([1]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false });
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const fetchData = (cityInput) => {
    setError({ status: false });
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setError({ status: false });
        setLoading(false);
        if (data.cod === 200) {
          const cityWeatherData = { ...data };
          setWeatherData([cityWeatherData, ...weatherData]);
        } else {
          setError({ status: true, message: data.message });
        }
      })
      .catch((error) => {
        setError({ status: true, message: error });
      });
  };

  useEffect(() => {
    if (cityInput !== "") fetchData(cityInput);
    setCityInput("");
    setError({ status: false });
  }, [controlEffect]);

  const handleOnChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setControlEffect[0] === 1 ? setControlEffect([0]) : setControlEffect([1]);
  };

  return (
    <div>
      <>
        <CityForm
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          cityInput={cityInput}
        />
        <WeatherList
          weatherData={weatherData}
          setWeatherData={setWeatherData}
        />
      </>
      <HandleErrors error={error} cityInput={cityInput} loadind={loading} />
    </div>
  );
}

export default Weather;
