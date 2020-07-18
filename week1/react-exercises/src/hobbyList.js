import React from "react";



const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return(
    <div>
    {hobbies.map((hobby) => {
      return <h2 key={Math.random()}>{hobby}</h2>;
    })}
  </div>

  )
    
  
};
export default HobbyList;

