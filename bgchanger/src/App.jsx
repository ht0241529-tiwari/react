import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button onClick={()=> setColor("red")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg" 
            style={{ backgroundColor: "red" }}
            >Red</button>
             <button onClick={()=> setColor("orange")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg" 
            style={{ backgroundColor: "orange" }}
            >Red</button>
             <button onClick={()=> setColor("green")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg" 
            style={{  backgroundColor: "green" }}
            >Red</button>
             <button onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1 rounded-full
            text-white shadow-lg" 
            style={{ backgroundColor: "blue" }}
            >Red</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
// https://www.perplexity.ai/search/import-usestate-from-react-fun-s7fWfgHnRTyZwInJe5sW0A#6 for reference
