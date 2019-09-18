import React from "react";

const Person = ({data,deletePerson}) => {

    return(
        <div>
            {data.name} - {data.number}
            <button
                value={data.id}
                onClick={deletePerson}>delete</button>
        </div>
    )
}




export default Person
