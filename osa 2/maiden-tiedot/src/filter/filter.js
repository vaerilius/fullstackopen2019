import React from "react";

const Filter = (props) => {

    const handleChange = (e) => {
        props.setFilter(e.target.value)
    }

    return(
        <>
            <form>
                <label >find countries</label>
                <input
                    type="text"
                    value={props.filter}
                    onChange={handleChange}/>
            </form>
        </>
    )
}

export default Filter
