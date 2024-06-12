import React from 'react'
import '../assets/css/CountryCardSkeleton.css'
const CountryCardSkeleton = () => {
    return (
        <div className="country-card skeleton">
            <div className="skeleton-img"></div>
            <div className="skeleton-text">
                <div className="skeleton-title"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
            </div>
        </div>
    )
}

export default CountryCardSkeleton