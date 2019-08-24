import React, {useState} from "react";

const PersonForm = (props) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (e) => setNewName(e.target.value);
    const handleNumberChange = (e) => setNewNumber(e.target.value);

    const addPerson = (e) => {
        e.preventDefault();

        const arr = props.persons.map(person => {
            return person.name.toUpperCase()
        });

        if (arr.includes(newName.toUpperCase())) {
            alert(`${newName} is already added to phonebook`);
            return
        }

        const personObject = {
            name: newName,
            number: newNumber
        };

        props.setPerson(props.persons.concat(personObject))
    };

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>Name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>

                <br/>
                <div>number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                /></div>
                <br/>
                <button>add</button>
            </form>
        </div>

    )
};

export default PersonForm
