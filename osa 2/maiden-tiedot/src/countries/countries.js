import React from "react";
import Country from "./country/country"
import CountryDetail from "./country/country-detail"

const Countries = (props) => {

    const data = props.countriesData.filter(country => {
        if (country.name.toUpperCase().includes(props.filter.toUpperCase())) {
            return country
        }

    })


    let output;
    if (data.length > 1 && data.length < 11) {
        output = data.map(country =>
            <Country
                key={country.name}
                data={country}
            />
        )
    } else if (data.length === 1) {
        output = data.map(country =>
            <CountryDetail
                key={country.name}
                data={country}
            />
        )
    } else {
        output = 'Too many matches, specify another filter'
    }

    return (
        <>
            {output}
        </>

    )
}

export default Countries
