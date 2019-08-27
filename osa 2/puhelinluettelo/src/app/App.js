import React, {useState, useEffect} from 'react';
import PersonForm from "./components/person-form";
import Persons from "./components/persons/persons";
import Filter from "./components/filter";
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newFilter, setFilter] = useState('');
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');


    useEffect(() => {
            axios
                .get('http://localhost:3001/persons')
                .then(response => {
                    console.log(response.data)
                    setPersons(response.data);

                })
    }, []);


    const addPerson = () => {

        const arr = persons.map(person => {
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

        setPersons(persons.concat(personObject))
    };


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                filter={newFilter}
                setFilter={setFilter}/>
            <h3>Add a new</h3>
            <PersonForm
                addperson={() => addPerson}
                setNumber={setNewNumber}
                setName={setNewName}
                name={newName}
                number={newNumber}
            />

            <h3>Numbers</h3>

            <Persons data={persons}
                     filter={newFilter}
            />
        </div>
    )
}

export default App;
