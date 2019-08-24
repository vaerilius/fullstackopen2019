import React, {useState} from 'react';
import PersonForm from "./person-form";
import Persons from "./persons/persons";



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

    return (
        <div>
            <h2>Phonebook</h2>

            {/*<Filter  />*/}

            <h3>Add a new</h3>

            <PersonForm persons={persons} setPerson={setPersons}/>

            <h3>Numbers</h3>

            <Persons data={persons}/>
        </div>
    )
}
export default App;
