import React, { useEffect, useState } from "react";
import Joke from "./Joke";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(false);
  const URL = "https://official-joke-api.appspot.com/random_joke";

  function getJoke() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        if (data) {
          setError(false);
          setJoke(data);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <Joke joke={joke} />
      {error && <p>Error 404</p>}
    </div>
  );
}
