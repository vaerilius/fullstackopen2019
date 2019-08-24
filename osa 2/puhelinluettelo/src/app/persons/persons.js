import React from "react";
import Person from "./person/person";

const Persons = ({data}) => {


        const rows = () => data.map(person =>
            <Person
                key={person.name}
                data={person}
            />
        )
    return (
        <div>
            {rows()}

        </div>

    )
}
export default Persons
