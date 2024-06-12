import React, { useContext, useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryCardSkeleton from '../skeleton/CountryCardSkeleton'
import { ThemeContext} from '../ThemeContext'


const CountriesContainer = ({ query, region }) => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const { isDarkMode } = useContext(ThemeContext)

    useEffect(() => {

        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all')
                const data = await response.json()
                setCountries(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                setLoading(false)
            }
        }
        fetchCountries()

    }, [])

    return (

        <div className={`countries-container ${isDarkMode ? 'dark' : ''}`}>


            {loading ? (
                [...Array(8)].map((_, index) => (
                    <CountryCardSkeleton key={index} />
                ))
            ) : (
                countries
                    .filter((country) =>
                        country.name.common.toLowerCase().includes(query)
                        && (!region || country.region.toLowerCase() === region.toLowerCase())
                    ).map((country) => {
                        return <CountryCard
                            key={country.name.common}
                            name={country.name.common}
                            flag={country.flags.svg}
                            population={country.population}
                            region={country.region}
                            capital={country.capital?.[0]}
                            data={country}
                        />
                    }))
            }

        </div>

    )
}

export default CountriesContainer