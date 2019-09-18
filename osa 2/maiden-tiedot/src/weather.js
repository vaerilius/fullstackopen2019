import React, {useState, useEffect} from "react";
import axios from "axios";


const Weather = ({name}) => {
    const [weather, setWeather] = useState({});

    const isEmpty = (obj) => {
        return !obj || Object.keys(obj).length === 0;
    }

    const checkHasProperty = () => {
        return (isEmpty(weather)
                ? <div>
                    <p>Weather is loading</p>
                </div>
                : <div>
                    <h2>Weather in {name}</h2>
                    <p><strong>temperature: </strong>{weather.current.temp_c} Celcius</p>
                    <img src={weather.current.condition.icon} alt=""/>
                    <p><strong>wind: </strong>{weather.current.wind_kph} {weather.current.wind_dir}</p>
                </div>
        )
    }

    useEffect(() => {
        axios
            .get(
                `http://api.apixu.com/v1/current.json?key=b2960fad3aeb427996a105736192608&q=${name}`)
            .then(response => {
                setWeather(response.data)
            })
    }, [])

    return checkHasProperty()

}

export default Weather
