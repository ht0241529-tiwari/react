import { useState } from 'react';

function Col() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
        {/* <div className="fixed flex flex-wrap text-center
        justify-center bottom-12 insert-x-0 px-2">test</div> whats the wrong find in this*/}
        <div className="fixed inset-x-0 bottom-12 flex justify-center text-center px-2">
  


    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-red-300 px-3 py-2 rounded-2px">
        <button onClick={()=>setColor("red")}
        className="outline-none px-4 py-1 rounded-2xl"style={{backgroundColor:"red"}}>red</button></div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-blue-300 px-3 py-2 rounded-2px">
        <button onClick={()=>setColor("blue")} 
        className="outline-none px-4 py-1 rounded-2xl"style={{backgroundColor:"blue"}}>blue</button>
    </div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-orange-500 px-3 py-2 rounded-2px">
        <button onClick={()=>setColor("orange")}
        className="outline-none px-4 py-1 rounded-2xl"style={{backgroundColor:"orange"}}>orange</button>
    </div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-500 px-3 py-2 rounded-2px ">
        <button onClick={()=>setColor("yellow")}
         className="outline-none px-4 py-1 rounded-2xl"style={{backgroundColor:"yellow"}}>yellow</button>
    </div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-green-500 px-3 py-2 rounded-2px">
        <button onClick={()=>setColor("green")}
        className="outline-none px-4 py-1 rounded-2xl"style={{backgroundColor:"green"}}>green</button>
    </div>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-500 px-3 py-2 rounded-2px">
        <button onClick={()=>setColor("gray")}
        className="outline-none px-4 py-1 rounded-2xl"style={{backgroundColor:"gray"}}>gray</button>
    </div>
</div>  
 
    
    </div>
  );
}

export default Col;