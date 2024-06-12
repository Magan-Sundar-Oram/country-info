import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import CountryDetailSkeleton from '../skeleton/CountryDetailSkeleton';
import CountryNotFound from '../components/CountryNotFound';
import '../assets/css/CountryDetail.css'
import { ThemeContext } from '../ThemeContext';

export default function CountryDetail() {
    const params = useParams();
    const countryName = params.country
    // const location = useLocation();
    // const state = location.state;

    const [countryData, setCountryData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const { isDarkMode } = useContext(ThemeContext)

    const fetchWithRetry = async (url, retries = 3) => {
        for (let i = 0; i <= retries; i++) {
            try {
                // console.log(`Attempting to fetch ${url}, try ${i + 1}`);
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);
                return await response.json();
            } catch (error) {
                // console.error(`Error fetching ${url}: ${error.message}`);
                if (i === retries) throw error;
                // console.log(`Retrying... (${retries - i} attempts left)`);
            }
        }
    };

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const data = await fetchWithRetry(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                const country = data[0];

                const countryInfo = {
                    name: country.name.common,
                    nativeName: Object.values(country.name.nativeName || {})[0]?.common || 'N/A',
                    population: country.population,
                    region: country.region,
                    subregion: country.subregion,
                    capital: country.capital || 'N/A',
                    flag: country.flags.svg,
                    tld: country.tld.join(', '),
                    languages: Object.values(country.languages).join(', '),
                    currencies: Object.values(country.currencies).map(currency => currency.name).join(', '),
                    borders: []
                };

                if (country.borders) {
                    const borderCountries = await Promise.all(
                        country.borders.map(async (border) => {
                            try {
                                const borderData = await fetchWithRetry(`https://restcountries.com/v3.1/alpha/${border}`);
                                return borderData[0].name.common;
                            } catch (error) {
                                console.log(error);
                                return 'Unknown';
                            }
                        })
                    );
                    countryInfo.borders = borderCountries;
                }
                setCountryData(countryInfo);
            } catch (error) {
                console.log(error);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, [countryName]);


    if (loading) {
        return <CountryDetailSkeleton />
    }

    if (notFound) {
        return <CountryNotFound />
    }



    return countryData ? (
        <div className={`country-details-main ${isDarkMode ? 'dark' : ''}`}>
            <div className="country-details-container">
                <span className="back-button" onClick={() => window.history.back()}>
                    <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
                </span>
                <div className="country-details">
                    <img src={countryData.flag} alt={`${countryData.name} flag`} />
                    <div className="details-text-container">
                        <h1>{countryData.name}</h1>
                        <div className="details-text">
                            <p><b>Native Name: </b>{countryData.nativeName}</p>
                            <p><b>Population: </b>{countryData.population.toLocaleString('en-IN')}</p>
                            <p><b>Region: </b>{countryData.region}</p>
                            <p><b>Sub Region: </b>{countryData.subregion}</p>
                            <p><b>Capital: </b>{Array.isArray(countryData.capital) ? countryData.capital.join(', ') : countryData.capital}</p>
                            <p><b>Top Level Domain: </b>{countryData.tld}</p>
                            <p><b>Currencies: </b>{countryData.currencies}</p>
                            <p><b>Languages: </b>{countryData.languages}</p>
                        </div>
                        {countryData.borders.length > 0 && (
                            <div className="border-countries">
                                <b>Border Countries: </b>
                                {countryData.borders.map((border) => (
                                    <Link key={border} to={`/${border.toLowerCase()}`}>{border}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : null;

}



