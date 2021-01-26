import React from 'react'

export default function Button({getFriend=f=>f}) {
  
    return (
        <div>
            <button onClick={getFriend} >Get Friend</button>
        </div>
    )
}
