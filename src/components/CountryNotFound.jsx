import React from 'react'
import '../assets/css/CountryNotFound.css'
const CountryNotFound = () => {
  return (
    <div className="country-not-found-container">
            <h1>Country Not Found</h1>
            <p>We're sorry, but the country you are looking for does not exist or could not be found By Server.</p>
            <button onClick={() => window.history.back()} className="back-button">
                <i className="fa-solid fa-arrow-left"></i>&nbsp; Go Back
            </button>
        </div>
  )
}

export default CountryNotFound