import React from 'react'

const Hobbies = ()=>{
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
return(
    <div key={Date.now()}>
      {hobbies.map(hobby=>{
          return <p>{hobby}</p>
      }) }
    </div>
)
};


export default Hobbies