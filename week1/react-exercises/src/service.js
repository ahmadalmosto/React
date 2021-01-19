import React from 'react'
import chat from './assets/exercises/chat.png'
import coin from './assets/exercises/coin.png'
import delivery from './assets/exercises/delivery.png'
function Guarantee(props) {
    return (
        <>
         <img src={props.img} alt={props.name}/> 
         <h1>{props.title}</h1>
         <p>{props.description}</p>  
        </>
    )
}
const renderServices = ()=>{
    return(
        <>
        <Guarantee img = {delivery} title=" delivery service" description=" best in delivery"/>
        <Guarantee img = {coin} title=" delivery service" description=" best in delivery"/>
        <Guarantee img = {chat} title=" delivery service" description=" best in delivery"/>
        </>
    )
}
export default renderServices