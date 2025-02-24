import React, { useState } from 'react'

const inputhandling = () => {
  const [text, setText] = useState("")
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h1>Live input previwe </h1>
      <input  type=' number' value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Type something...'
      style={{padding: '5px', width: '200px'}}/>

      <button onClick={() => setText("")} style={{marginLeft: '10px'}}>Clear</button>
      <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold'}}>
        {text ? `You typed : ${text}` : "Start typing..."}</p>

    </div>
  )
}

export default inputhandling
