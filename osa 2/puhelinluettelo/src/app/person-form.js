import React, {useState} from "react";

const PersonForm = (props) => {
    const [newName, setNewName] = useState('');
    const [onList, setonList] = useState(false);

    const handlePersonChange = (e) => {
        setNewName(e.target.value)
    }

    const addPerson = (e) => {
        e.preventDefault()

        const arr =  props.persons.map(person => {
           return  person.name.toUpperCase()
        })

        if (arr.includes(newName.toUpperCase())) {
            alert(`${newName} is already added to phonebook` );
            return
        }

        const personObject = {
            name: newName,
            number: ''
        }






        props.setPerson(props.persons.concat(personObject))
    }

    return (
        <div>
            <form onSubmit={addPerson}>
                <input
                    value={newName}
                    onChange={handlePersonChange}
                />
                <br/>
                <button>add</button>
            </form>
        </div>

    )
}
export default PersonForm
