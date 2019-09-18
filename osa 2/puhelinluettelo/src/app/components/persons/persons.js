import React from "react";
import Person from "./person/person";

const Persons = (props) => {
    const personsToShow =
        props.data.filter(person => {
            if (person.name.toUpperCase().includes(props.filter.toUpperCase())) {
                return person
            }
            return null
        });

    const rows = () => personsToShow.map(person =>
        <Person
            key={person.name}
            data={person}
            deletePerson={props.deletePerson}
        />
    );

    return (
        <div>
            {rows()}

        </div>

    )
}

export default Persons
