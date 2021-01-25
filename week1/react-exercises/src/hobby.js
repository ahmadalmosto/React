import React from "react";
const Hobbies = ({ hobby }) => {
  return <>{hobby}</>;
};

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <>
      {hobbies.map((hobby, index) => {
        return (
          <h2 key={index}>
            <Hobbies hobby={hobby} />
          </h2>
        );
      })}
    </>
  );
};

export default HobbyList;
