import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        
        <button onClick={toggleTheme} style={{
            background: theme === "light" ? '#fff' : '#333',
            color: theme === 'light' ? "#000" : "#fff",
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '5px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: '0.3s ease'
        }}
            onMouseOver={(e) => e.target.style.boxShadow = '0 6px 10px rgba(0,0,0,0.2)'}
            onMouseOut={(e) => e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}>Toggle Theme</button>
    )
}

export default ThemeButton
