import './App.css'
import { useState } from 'react'

function App() {
  // let counter = 5;
  // let [variableName, 'set'VariableName] = useState(defaultValue or initial value)
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log(`Add Value`, counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
    console.log('Remove Value', counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Subtract Value</button>
    </>
  )
}

export default App
