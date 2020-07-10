        import React from 'react';
        import WeatherInfo from './city-weather.json'

        function Weather(){
            return(
                <div>
                    {
                        WeatherInfo.map((info)=>{
                            return(
                                <div>
                            <div className=" card card-body border-success">
                                <p>{info.name} {info.sys.country}</p>
                                <p>{info.weather[0].main}</p>
                                <p>{info.weather[0].description}</p>
                                <p>{info.main.temp_min}</p>
                                <p>{info.main.temp_max}</p>
                                <p>{info.coord.lon}</p>
                                <p>{info.coord.lat}</p>
                           </div>
                        </div>
                    )
                })
            }
         </div>
        )    
    }
        export default Weather
