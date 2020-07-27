import React from 'react'

const HandleErrors = ({error,cityInput, loading})=>{
  
    return(
        <div>     
      {cityInput.length === 0 ? (
          <p>put city name to get weather </p>
      ) : (null)}
      
      {!error && <p>{error.message}</p>}
     
      {!loading && <p>Loading...</p>}
        </div>
    )
 
}
export default HandleErrors
