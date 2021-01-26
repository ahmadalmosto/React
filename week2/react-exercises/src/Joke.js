import React from 'react'

export default function Joke({joke}) {
    return (
        <div>
           <p>{joke.setup}</p>
           <p>{joke.punchline}</p> 
        </div>
    )
}
