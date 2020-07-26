import React,{useState} from 'react'

const Counter = ()=>{
const [count,setCount]= useState(0) 
return(
    <div>
        
       <button onClick = {()=>setCount(count +1)}>Add 1</button>
       <Count count = {count}/>
    </div>
)
};
const Count = ({ count }) => {
	return count <= 10 ? (
		<p> Keep counting...</p>
    ) : (
		<p> It's higher than 10 </p>
	);
};



export default Counter