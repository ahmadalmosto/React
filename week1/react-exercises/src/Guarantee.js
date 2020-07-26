import React from 'react'


const Guarantee = (props)=>{
  return (
    <div>
        <img src={props.img} alt={props.name} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>
)
}
export default Guarantee