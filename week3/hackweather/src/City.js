import React from "react";
import "./App.css";

import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

export default function City({ city, handleDeleteCity = (f) => f }) {
  console.log(city);
  return (
    <div className="App">
      {city ? (
        <div>
          <Card className="card">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteCity(city.id)}
            >
              <FaTrash />
            </Button>
            <CardContent className="content">
              <Typography className="heading" variant={"h6"} gutterBottom>
                {city.name}
              </Typography>
              <Typography className="subheading" variant={"caption"}>
                <p>{city.weather[0].description}</p>
                <img
                  src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                  alt={city.weather[0].icon}
                />
                <p>
                  {Math.round(city.main.temp_min)}° ||{" "}
                  {Math.round(city.main.temp_max)}°
                </p>
                <p>
                  Location :{city.coord.lon} || {city.coord.lat}
                </p>
                <Link to={`/more/${city.id}`}>
                  <p>More >></p>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : (
        <p>{city.message}</p>
      )}
    </div>
  );
}
