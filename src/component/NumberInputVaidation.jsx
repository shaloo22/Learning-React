import React, { useState } from 'react'

const NumberInputVaidation = () => {

    const [number, setNumber] = useState("")
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setNumber(value)
            setError("")
        } else {
            setError("Please enter only numbers.")
        }
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Number Input Validation</h2>
            <input type='text' value={number}
                onChange={handleChange}
                placeholder="Enter a number..."
                style={{ padding: '5px', width: '200px' }} />

            <button onClick={() => setNumber("")} style={{ marginLeft: '10px' }}>Clear</button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

            <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                {number ? `You entered: ${number}` : "Enter a number..."}
        </p>        
        </div>
    )
}

export default NumberInputVaidation
