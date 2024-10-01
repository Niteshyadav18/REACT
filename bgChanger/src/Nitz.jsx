import { useState } from 'react'

//import './App.css'

function Nitz() {
  let [color, setColor] = useState("White")

  return (
    <> 
    
    <div className="w-full h-screen duration- " style={{backgroundColor: color}} >
        <div className=" rounded fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>

          <button onClick={() => setColor("red")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}
          >RED</button>

            <button onClick={() => setColor("Orange")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'Orange'}}
            >Orange</button>

            <button onClick={() => setColor("blue")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}}
            >BLUE</button>

            <button onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}
            >GREEN</button>

            <button onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'pink'}}
            >PINK</button>

            <button onClick={() => setColor("black")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}}
            >BLACK</button>
            </div>
        </div>
      </div> 

      
    </>
  )
}

export default Nitz
