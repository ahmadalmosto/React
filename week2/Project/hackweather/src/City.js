import React from "react";
import "./App.css";
import { Card, CardContent, Typography } from "@material-ui/core";

export default function City({ city }) {
  return (
    <>
      <div className="App">
        <Card className="card">
          <CardContent className="content">
            <Typography className="heading" variant={"h6"} gutterBottom>
              {city.sys.country},{city.name}
            </Typography>
            <Typography className="subheading" variant={"caption"}>
              <p>{city.weather[0].description}</p>
              <p>Temp min :{city.main.temp_min}</p>
              <p>Temp max :{city.main.temp_max}</p>
              <p>
                Location :{city.coord.lon} ,{city.coord.lat}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
