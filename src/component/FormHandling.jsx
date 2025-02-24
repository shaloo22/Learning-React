import React, { useState } from 'react'

const FormHandling = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData)
    }

    const handleReset = () => {
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h2> Contact Form</h2>
            <from onSubmit={handleSubmit}>
                <input type='text' name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    required
                />

                <input type='email' name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                    required
                />

                <br />
                <textarea name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Your Message'
                    required />
                <br />
                <button type='submit' onClick={handleSubmit}>Submit</button>
                <button type='button' onClick={handleReset}>Reset</button>
            </from>
        </div>

    )
}

export default FormHandling
