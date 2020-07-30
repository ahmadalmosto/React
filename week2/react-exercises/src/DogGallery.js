import React, { useState } from "react";

const DogGallery = () => {
  const [dogPhoto, setDogPhoto] = useState([]);
  const GetDogPhoto = () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setDogPhoto([...dogPhoto, response.message]);
      });
  };

  return (
    <div>
      <DogPhotos dogPhoto={dogPhoto} />
      <Button GetDogPhoto={GetDogPhoto} />
    </div>
  );
};

const Button = ({ GetDogPhoto }) => {
  return <button onClick={GetDogPhoto}>Get A Dog</button>;
};

function DogPhotos({ dogPhoto }) {
  console.log(dogPhoto);
  return (
    <div>
      <img src={dogPhoto} />
    </div>
  );
}
export default DogGallery;
