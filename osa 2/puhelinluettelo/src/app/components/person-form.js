import React from "react";

const PersonForm = ({addPerson, setNewName,setNewNumber, name, number}) => {


    const handleNameChange = (e) => setNewName(e.target.value);
    const handleNumberChange = (e) => setNewNumber(e.target.value);

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>Name:
                    <input
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <br/>
                <div>number: <input
                    value={number}
                    onChange={handleNumberChange}
                /></div>
                <br/>
                <button>add</button>
            </form>
        </div>

    )
};

export default PersonForm
