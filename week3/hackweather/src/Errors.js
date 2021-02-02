import React from "react";
import { useLocation, useHistory } from "react-router-dom";
export default function Errors() {
  const location = useLocation();
  let history = useHistory();
  function handleOnClick() {
    history.push("/");
  }
  return (
    <div style={{ height: 70, color: "white", backgroundColor: "red" }}>
      <p>Whoops 404</p>
      <p>{location.pathname}</p>
      <button onClick={handleOnClick}>Go Back</button>
    </div>
  );
}
