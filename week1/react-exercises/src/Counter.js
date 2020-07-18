import React,{ useState} from 'react';

const Counter = ()=>{
const [count, setCount] = useState(0);
const Feedback = count>10 ? ("It's higher than 10!") 
: ("Keep counting...")

 const Counting = ()=> setCount(count+1)
// function Counting(){
//    setCount(prevcount=>prevcount+1)
// } 
return(
<div>
   <Button Counting={Counting} count={count} /> 
<h4>{count}</h4>
<p>{Feedback}</p> 
</div>
)
};
const Button = ({Counting})=>{
    return(
       <button onClick={()=>Counting()}>Add 1!</button>
    )
}


export default Counter
