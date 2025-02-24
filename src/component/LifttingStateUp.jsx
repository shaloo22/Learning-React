import React, { useState } from 'react'

const LifttingStateUp = () => {

  const [InputValue, setInputValue] = useState("")
  return (
    <>
      <Inputcomponent InputValue={InputValue} setInputValue={setInputValue} />
      <Displaycomponent InputValue={InputValue} />

    </>
  )
}

const Inputcomponent = ({ InputValue, setInputValue }) => {
  return (
    <>
      <input type='text' value={InputValue} placeholder='Enter value...' onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  )
}

const Displaycomponent = ({ InputValue }) => {
  return <p>current value: {InputValue}</p>
}

export default LifttingStateUp




