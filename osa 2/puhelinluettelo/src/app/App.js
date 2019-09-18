import React, {useState, useEffect} from 'react';
import PersonForm from "./components/person-form";
import Persons from "./components/persons/persons";
import Filter from "./components/filter";
import personsService from './services/phonebook'
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newFilter, setFilter] = useState('');
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        personsService
            .getAll()
            .then(response => {
                console.log(response)
                setPersons(response);
            })
    }, []);

    const clearInpunts = () => {
        setNewName('')
        setNewNumber('')
    }

    const showMessage = (message) => {
        setMessage(message)
        setTimeout(() => {
            setMessage(null)
        }, 3000)
    }

    const addPerson = (e) => {
        e.preventDefault()

        const personObject = {
            name: newName,
            number: newNumber
        };

        const arr = persons.map(person => {
            return person.name.toUpperCase()
        });

        if (arr.includes(newName.toUpperCase())) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                personsService
                    .update(persons.length, personObject)
                    .then(response => {
                        setError(false)
                        showMessage(`${newName} phone number updated`)
                        personsService
                            .getAll()
                            .then(response => {
                                setPersons(response);
                                clearInpunts()
                            })
                    })
                    .catch(err => {
                        setError(true)
                        showMessage(`Information of ${newName} has already been removed from server`)
                        personsService
                            .getAll()
                            .then(response => {
                                setPersons(response);
                                clearInpunts()
                            })
                    })
                return;
            }
        }

        personsService
            .create(personObject)
            .then(response => {
                setError(false)
                showMessage(`Added ${newName}`)
                setPersons(persons.concat(personObject))
                clearInpunts()
            })
    };


    const deletePerson = (e) => {
        e.preventDefault()
        const id = +e.target.value;
        const findedPerson = persons.find(person => person.id === id)
        console.log(findedPerson)
        if (!window.confirm(`Delete ${findedPerson.name}`)) {
            return
        }

        personsService
            .remove(findedPerson.id)
            .then(response => {
                personsService
                    .getAll()
                    .then(response => {
                        console.log(response)
                        setPersons(response);
                        setError(true)
                        showMessage(`${findedPerson.name} removed`)
                    })
            })
            .catch(err => {
                setError(true)
                showMessage(`Information of ${newName} has already been removed from server`)
                personsService
                    .getAll()
                    .then(response => {
                        setPersons(response);
                        clearInpunts()
                    })
            })
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification
                message={message}
                error={error}
            />
            <Filter
                filter={newFilter}
                setFilter={setFilter}/>
            <h3>Add a new</h3>
            <PersonForm
                addperson={addPerson}
                setNumber={setNewNumber}
                setName={setNewName}
                name={newName}
                number={newNumber}
            />
            <h3>Numbers</h3>

            <Persons data={persons}
                     filter={newFilter}
                     deletePerson={deletePerson}
            />
        </div>
    )
}

export default App;
