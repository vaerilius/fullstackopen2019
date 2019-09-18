import React from "react";

const PersonForm = ({addperson, setName,setNumber, name, number}) => {

    const handleNameChange = (e) => setName(e.target.value);
    const handleNumberChange = (e) => setNumber(e.target.value);

    return (
        <div>
            <form onSubmit={addperson}>
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
