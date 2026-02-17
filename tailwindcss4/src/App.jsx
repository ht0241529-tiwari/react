import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
import Col from '../bgchanger.jsx'


function App() {
  const [count, setCount] = useState(0)
 let myobj={
  name:"harsh",
  age:34

 }
  return (
    <>
   {/* <h1 className="bg-green-400 text-black p-4
   rounded-2xl alingn">hello wold</h1> */}
   {/* <Card username="chai our code" btx="dont clik me !!"/>,
<Card username="harsh bhai"  /> */}
<Col/>
    </>
  )
}

export default App
