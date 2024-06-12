import React from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const SearchFilterWrapper = ({ setQuery, setRegion }) => {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <div className={`search-filter-container ${isDarkMode?'dark':''}`}>
            <SearchBar setQuery={setQuery} />
            <Filter setRegion={setRegion} />
        </div>
    )
}

export default SearchFilterWrapper