import React from 'react'
import RenderCity from './RenderCity'

const WeatherList = ({weatherData})=>{
    return(
        <div>
            {weatherData
        .map((oneCity) => (
          <RenderCity oneCity={oneCity} />
        ))

    .reverse()} 
        </div>

    )
};

export default WeatherList