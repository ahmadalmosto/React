import React from "react";
const Hobbies = ({ props }) => {
  return <>{props}</>
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
    {hobbies.map((hobby,index)=>{
      return <h2 key={index}><Hobbies props={hobby} /></h2>
    })}
    </>
  )
};

export default HobbyList;
