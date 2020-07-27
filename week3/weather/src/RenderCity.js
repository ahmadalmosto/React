import React from 'react'

const RenderCity = ({oneCity,deleteWeather}) =>{  
 const {
  name,
  weather: [{ main, description }],
  coord: { lon, lat },
  main: { temp_min, temp_max },
  sys: { country },
  id,
 } = oneCity;

console.log(id)
  return(
    <div>
    {/* here i dont know why the button dont have access to the delete function  */}
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


 