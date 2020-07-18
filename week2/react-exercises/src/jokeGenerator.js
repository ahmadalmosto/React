import React,{useState,useEffect} from 'react'

const RandomJoke = ()=>{
    const [joke,setJoke] = useState({})

    const jokeFetch = ()=>{
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            setJoke({setup :response.setup , 
         punchline : response.punchline})
        })
    }
    useEffect(()=>{
       jokeFetch()
    },[])
    return(
          <div>
            
              <Joke joke={joke}/>
          </div>
    )
};
const Joke = ({joke})=>{
    return(
        <div>
            <p>jjjj</p>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    )
}
export default RandomJoke