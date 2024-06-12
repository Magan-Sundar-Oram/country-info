import React from 'react'

const Filter = ({ setRegion }) => {

    return (
        <div>
            <select className="filter-by-region"
                onChange={(e) => { setRegion(e.target.value) }}>
                <option hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter
