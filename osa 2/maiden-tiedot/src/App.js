import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Filter from "./filter/filter";
import Countries from "./countries/countries";

const App = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [filter, setFilter] = useState('');



    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountriesData(response.data)
            })
    }, [])

    const handleSelected = (selectedCountry) => () => {
        setFilter(selectedCountry)
    }

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter}/>
            <Countries
                countriesData={countriesData}
                filter={filter}
                setSelected={handleSelected}
            />
        </div>
    )
}

export default App;

