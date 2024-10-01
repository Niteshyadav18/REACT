import { useState } from 'react'

//import './App.css'

function App() {
  let [colora, setColor] = useState("teal")

  return (
    <>
    <div className="w-full h-screen duration- " style={{backgroundColor: colora}} >
        <div className=" rounded fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>

          <button onClick={() => setColor("olive")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'olive'}}
          >olive</button>

            <button onClick={() => setColor("grey")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'grey'}}
            >grey</button>

            <button onClick={() => setColor("maroon")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'maroon'}}
            >maroon</button>

            <button onClick={() => setColor("aqua")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'aqua'}}
            >aqua</button>

            <button onClick={() => setColor("navy")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'navy'}}
            >navy</button>

            <button onClick={() => setColor("lime")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'lime'}}
            >lime</button>
            </div>
        </div>
      </div>

      
    </>
  )
}

export default App
