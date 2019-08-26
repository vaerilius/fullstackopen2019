import React from "react";

const CountryDetail = ({data}) => {
    const languages = () => data.languages.map(language => {
        return <li key={language.name}> {language.name} </li>
    })

    return(
        <div>
            <h1> {data.name} </h1>
            <p>capital {data.capital} </p>
            <p>population {data.population} </p>
            <h3> Languages</h3>
            <ul>
                {languages()}
            </ul>
            <img src={data.flag} alt="" width="100" height="70"/>

        </div>

    )
}
export default CountryDetail
