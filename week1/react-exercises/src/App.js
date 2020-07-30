import React from 'react';
import HobbyList from './hobbies'
// import Guarantee from './Guarantee'
// import coin from './assets'
// import chat from './assets'
// import delivery from './assets'
import Counter from './counter'
import './App.css';


function App() {
  return (
    <div className="App">
     <HobbyList />
     <Counter />
     {/* <Guarantee img={delivery} name="delivery icon" title="delivery" desc= "s simply dummy text of the printing and typesetting industry" />
    //  <Guarantee img={coin} name="coin icon" title="money back" desc= "s simply dummy text of the printing and typesetting industry" />
    //  <Guarantee img={chat} name="chat icon" title="Contact" desc= "s simply dummy text of the printing and typesetting industry" /> */}
    </div>
  );
}

export default App;
