import React, {useState, useEffect} from 'react';
import PersonForm from "./person-form";
import Persons from "./persons/persons";
import Filter from "./filter";
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newFilter, setFilter] = useState('');

    useEffect(() => {
            axios
                .get('http://localhost:3001/persons')
                .then(response => {
                    console.log(response.data)
                    setPersons(response.data);

                })
    }, []);


    return (
        <div>
            <h2>Phonebook</h2>

            <Filter
                filter={newFilter}
                setFilter={setFilter}/>

            <h3>Add a new</h3>

            <PersonForm
                persons={persons}
                setPerson={setPersons}
            />

            <h3>Numbers</h3>

            <Persons data={persons}
                     filter={newFilter}
            />
        </div>
    )
}

export default App;
