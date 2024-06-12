# React Country Information React Application

## Description
This repository contains a React application for exploring information about different countries around the world. The application fetches data from the Rest Countries API to provide details such as population, region, capital, and more. It includes features like searching for countries, filtering by region, and displaying detailed information about each country.

## Components
1. **Appbar**: Renders the application header with a toggle for switching between light and dark themes.
2. **CountriesContainer**: Fetches and displays a list of countries based on search queries and filters.
3. **CountryCard**: Displays information about a single country including its name, flag, population, region, and capital.
4. **CountryNotFound**: Displays a message when a searched country is not found.
5. **Filter**: Provides a dropdown menu for filtering countries by region.
6. **SearchBar**: Renders a search input for filtering countries by name.
7. **SearchFilterWrapper**: Wraps the search bar and filter components for better organization.
8. **CountryDetail**: Displays detailed information about a single country including its native name, population, region, subregion, capital, top-level domain, languages, currencies, and border countries.
9. **Home**: Main page component rendering the search bar, filter, and country container.
10. **CountryCardSkeleton**: Skeleton loader for simulating loading states of country cards.
11. **CountryDetailSkeleton**: Skeleton loader for simulating loading states of country detail page.

## Styles
The CSS files contain styles for various components including the app bar, country cards, search and filter components, and skeleton loaders. The application supports both light and dark themes with appropriate color schemes and styles.

## For Installation and Usage
1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
