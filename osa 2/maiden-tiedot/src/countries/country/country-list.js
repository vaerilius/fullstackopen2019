import React from "react";

const CountryList = (props) => {

    return(
        <div>
            {props.data.name}
            <button
                onClick={props.setSelected(props.data.name)}>show
            </button>
        </div>
    )
}
export default CountryList
