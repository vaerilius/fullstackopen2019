import React from "react";

const Filter = (props) => {

    const handleFilterChange = (e) => {
        props.setFilter(e.target.value)
    };

    return (
        <div>
            <form>
                <div>filter shown with
                    <input
                        value={props.newFilter}
                        onChange={handleFilterChange}
                    />
                </div>
            </form>

        </div>

    )
};

export default Filter
