import React, {useState} from "react";

const PersonForm = (props) => {
    const [newPerson, setNewPerson] = useState('');

    const handlePersonChange = (e) => {
        console.log(e.target.value)
        setNewPerson(e.target.value)
    }
    const addPerson = (e) => {
        e.preventDefault()
        const personObject = {
            name: newPerson,
            number: ''
        }
        props.setPerson(props.persons.concat(personObject))
    }

    return (
        <div>
            <form onSubmit={addPerson}>
                <input
                    value={newPerson}
                    onChange={handlePersonChange}
                />
                <br/>
                <button>add</button>
            </form>
        </div>

    )
}
export default PersonForm
