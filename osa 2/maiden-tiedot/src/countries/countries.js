import React from "react";
import CountryDetail from "./country/country-detail"
import CountryList from "./country/country-list";

const Countries = (props) => {

    const data = props.countriesData.filter(country => {
        if (country.name.toUpperCase().includes(props.filter.toUpperCase())) {
            return country
        }
        return null
    })

    if (data.length > 1 && data.length < 11) {
        return data.map(country =>
            <CountryList
                key={country.name}
                data={country}
                setSelected={props.setSelected}/>
        )

    } else if (data.length === 1) {
        return data.map(country =>
            <CountryDetail
                key={country.name}
                data={country}
            />
        )

    } else {
        return <div> Too many matches, specify another filter</div>
    }
}

export default Countries
