import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(5)

  const increaseValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const decreseValue = ( ) => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React with Vite | Rahul Kapoor</h1>
      <h4>Instructor: Mr. Hitesh Choudhary</h4>
      <p>Counter value: {counter}</p>
      <button onClick={increaseValue}>Increment</button>
      <br></br>
      <button onClick={decreseValue}>Decrement</button>
    </>
  )
}

export default App