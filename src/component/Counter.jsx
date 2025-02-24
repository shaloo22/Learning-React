
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
    const [inputValue, setInputValue] = useState("")

    const increment =  () => setCount(count + step)
    const dcrement = () => {
        if (count - step  >= 0) setCount(count - step)
    }
    const reset = () => setCount(0)
    const double = () => setCount(count * 2)
    const half = () => setCount(Math.floor(count / 2))
    
    const handleStepChange = (e) =>{
        const value = Number(e.target.value)
        if (!isNaN(value) && value > 0){
            setStep(value)
        }
        setInputValue("")
    }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Count: {count}</h1>
      <input
        type='number'
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        onBlur={handleStepChange} placeholder='Enter step value'
        style={{padding: '5px', marginBottom: '10px'}}
      />
      <p>Current Step: {step}</p>
      <br/>
      <button onClick={increment} style={{marginRight: '10px'}}>Increment</button>
      <button onClick={dcrement} style={{marginRight: '10px'}}>Dcrement</button>
      <button onClick={double} style={{marginRight: '10px'}}>Double</button>
      <button onClick={half} style={{marginRight: '10px'}}>Half</button>
      <button onClick={reset} style={{marginRight: '10px'}}>Reset</button>
    </div>
  )
}

export default Counter
