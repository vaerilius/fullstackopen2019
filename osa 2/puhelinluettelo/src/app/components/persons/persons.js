import React from "react";
import Person from "./person/person";

const Persons = (props) => {
    const personsToShow =
        props.data.filter(person => {
            if (person.name.toUpperCase().includes(props.filter.toUpperCase())) {
                return person
            }
        });

    const rows = () => personsToShow.map(person =>
        <Person
            key={person.name}
            data={person}
        />
    );

    return (
        <div>
            {rows()}

        </div>

    )
}

export default Persons
