import React, { useState, useContext } from 'react'
import CountriesContainer from '../components/CountriesContainer'
import SearchFilterWrapper from '../components/SearchFilterWrapper'
import { ThemeContext } from '../ThemeContext'


const Home = () => {
    const [query, setQuery] = useState('')
    const [region, setRegion] = useState('')
    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div className={`main-container ${isDarkMode ? 'dark' : ''}`}>
            <SearchFilterWrapper setRegion={setRegion} setQuery={setQuery} />
            <CountriesContainer region={region} query={query} />
        </div>
    )
}

export default Home