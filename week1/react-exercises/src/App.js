import React from 'react';
import HobbyList from './hobbyList'
import Guarantee from './Guarantee'
import Counter from './Counter'
import chat from './assets/exercises/chat.png'
import Shipping from './assets/exercises/f-delivery.png'
import MoneyBack from './assets/exercises/coin.png'

function App() {
  return (
    <div className="App">
    <HobbyList />
    <Guarantee 
    img = {chat}
    title = "Contact"
    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    />
     <Guarantee 
    img = {Shipping}
    title = "Shipping"
    description = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below"
    />
     <Guarantee 
    img = {MoneyBack}
    title = "Money Back"
    description = "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    />
   
    <Counter />
    </div>
  );

}

export default App;
