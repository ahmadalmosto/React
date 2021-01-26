import React, { useState } from "react";
import Button from "./DogButton";
import DogPhoto from "./DogPhoto";

export default function DogGallery() {
  const [dogPhoto, setDogPhoto] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const URL = "https://dog.ceo/api/breeds/image/random";

  function getDogPhoto() {
    fetch(URL)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        if (data) {
          setLoading(false);
          setDogPhoto([data.message, ...dogPhoto]);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }
  return (
    <div>
      <Button getDogPhoto={getDogPhoto} />
      {dogPhoto.length ? (
        dogPhoto.map((dog) => {
          return <DogPhoto dog={dog} />;
        })
      ) : (
        <p>Get your first dog by clicking the button!</p>
      )}
      {error && <p>Error 404</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
}
