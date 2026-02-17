import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'

function App() {

  let [count, setCount] = useState(0)
let myobj={
  name:"harsh",
  age:"23"
}
let arr=[1,2,3,4,5]
const addValue=()=>{
  count=count+1;
  setCount(count);
}
const DeleteValue=()=>{
  count=count-1;
  setCount(count);
}
  return (
    <>
      <h1 className="bg-red-400 p-4 font-sans text-lg">hello</h1>
    
    <Card username="chaiaurcode" btnText="click me"/>
   <button>{addValue}</button>
<button>{DeleteValue}</button>
    </>
  )
}

export default App