import React, { useState, useEffect} from "react";
import RenderCity from './RenderCity'
import CityForm from './cityForm'
import WeatherList from './weatherList'
import HandleErrors from "./errors";

// const key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
// console.log(process.env)
// .env dont work and idont know why

function Weather() {
  const [cityInput, setCityInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [controlEffect, setControlEffect] = useState([1]);
 const [loading , setLoading] = useState(false)
  const [error , setError] = useState({status : false})
 
  const fetchData = (cityInput) => {
  setError({status : false})
  setLoading(true)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=108f014bfe0cd46be80da260931deb11`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.cod === 200) {
          setError({status : false})
          setLoading(true)
          setWeatherData([...weatherData , data])
       }else{
         setLoading(false)
         setError({status : true , message: data.message })
       }
      })
      .catch((error) => {
       setError({status: true , message :error})
       setLoading(false)
      });
  };
  useEffect(() => {
    fetchData(cityInput);
    setCityInput("");
   setError({status : false})
  }, [controlEffect]);

  
   const deleteWeather =(e)=>{
    console.log(e.target.id)
    const cityArr = weatherData.filter(oneCity=> oneCity.id !== e.target.id)
      setWeatherData(cityArr)
  }
   
  const handleOnChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setControlEffect[0] === 1 ? setControlEffect([0]) : setControlEffect([1]);
  };
 
  return (
    <div>
      
      { weatherData.cod ===200 ? (
        <>
        <CityForm 
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        cityInput={cityInput}/>
         <RenderCity deleteWeather={deleteWeather}/>
         </>
      ) : (
        <>
        <CityForm 
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        cityInput={cityInput}/>
      
        <HandleErrors error = {error}  cityInput={cityInput}
        loadind={loading}
        />
       
        </>
      ) }
     
      <WeatherList weatherData={weatherData}/>
      
     </div>
  );
}

export default Weather;
