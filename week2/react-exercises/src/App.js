import React from 'react';
import Friend from './friend'
import DogGallery from'./DogGallery'
import RandomJoke from './jokeGenerator'


function App() {
  return (
    <div className="App">
     <Friend/>
     <DogGallery/>
     <RandomJoke/>
    </div>
  );
}

export default App;
