import React from 'react';
import '../assets/css/CountryDetailSkeleton.css';


const CountryDetailSkeleton = () => {
    return (
        <div className="country-details-container-sk skeleton">
            <span className="skeleton-back-button"></span>
            <div className="country-details-sk">
                <div className="skeleton-img-sk"></div>
                <div className="details-text-container-sk">
                    <div className="skeleton-title"></div>
                    <div className="details-text-sk">
                        <div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                        </div>
                        <div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                            <div className="skeleton-line"></div>
                        </div>
                    </div>
                    <div className="border-countries-sk">
                        <span className="skeleton-link"></span>
                        <span className="skeleton-link"></span>
                        <span className="skeleton-link"></span>
                        <span className="skeleton-link"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailSkeleton;
