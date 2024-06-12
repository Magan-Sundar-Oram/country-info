import React, { useContext, useState } from 'react'
import '../assets/css/Appbar.css'
import { ThemeContext } from '../ThemeContext'
import { Link } from 'react-router-dom'

const Appbar = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
 
    return (
        <header className={`header-container ${isDarkMode ? 'dark' : ''}`}>
            <div className="header-content">
                <h2 className="title">
                    <Link to={'/'}>Where in the world?</Link>
                </h2>
                <p className="theme-changer" onClick={toggleTheme}>
                    <i className={`fa-regular ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>&nbsp;&nbsp;
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </p>
            </div>
        </header >
    )
}

export default Appbar