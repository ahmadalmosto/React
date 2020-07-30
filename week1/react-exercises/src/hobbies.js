import React from "react";

const Hobbies = ({ prop }) => {
  return <div>{prop}</div>;
};
const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <ol>
      {hobbies.map((hobby, key) => {
        return (
          <li>
            <Hobbies prop={hobby} key={key} />
          </li>
        );
      })}
    </ol>
  );
};

export default HobbyList;
