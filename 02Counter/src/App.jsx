import { useState } from 'react';


function App() {
 let [counter,setCounter]= useState(0)
 
//let counter = 0
const addValue = () =>{
 // counter +=1;
  setCounter(counter+ 1)
 // console.log("Add",counter);
}

const removeValue = ()=>{
  setCounter(counter--)
 // console.log("Remove",counter);
}
  return (
    <>
      <h1>HELLO NITESH</h1>
      <h2>Counter value :{counter}</h2>

    <button onClick={addValue}>
      ADD VALUE {counter}
    </button>

    <button onClick={removeValue}>
      REMOVE VALUE {counter}
    </button>



    </>
  )
}

export default App
