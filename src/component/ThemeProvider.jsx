import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light')

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
    return (
        <div className={theme}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div style={{
                    background: theme === 'light' ? "#fff" : '#333',
                    color: theme === 'light' ? '#000' : '#fff',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    transform: '0.3s ease'

                }}>
                    {children}
                </div>

            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeProvider
