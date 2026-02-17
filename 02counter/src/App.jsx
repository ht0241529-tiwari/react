import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter=5
let [counter,setCounter]=useState(15);
// let [counter,harsh]=useState(15);
//     variable hai  ,ya function hai jo state ko represent krta hai
//it not only that setcounter you can write ant thing 
const addValue=()=>{
  console.log("clicked",Math.random());
  counter=counter+1;
// harsh(counter);
setCounter(counter);
}
const DeleteValue=()=>{
  if(counter<0){
    alert("counter cant be negative");
    return;
  }
  else{
 console.log("clicked",Math.random());
  counter=counter-1;
  // harsh(counter);
  setCounter(counter);
  }
}
  return (
    <>
<h1>hello bhai our kya hal chal</h1>
<h2>Counter Value {counter}</h2>
<button
onClick={addValue}
>Add Value</button>
<br/>
<button 
onClick={DeleteValue}
>Decrease Value</button>
    </>
  )
}

export default App
