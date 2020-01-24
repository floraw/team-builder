import React, { useState } from 'react';

const Form = props => {
    const [team, setTeam] = useState({
        name: "",
        role: "",
        email: ""
    });
    

    const handleTeam = event => {
        console.log(team);
        setTeam({
            ...team, 
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = event => {
        event.preventDefault();
        const newTeam = {
            ...team,
            id: Date.now(),
        }
        props.addNewMember(newTeam);
        setTeam({ name: "", email: "", role: ""});
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input 
                onChange={handleTeam} 
                id="name" 
                type="text" 
                name="name" 
                value={team.name}
                />

                <label htmlFor="email">Email</label>
                <input 
                onChange={handleTeam} 
                id="email" 
                type="text" 
                name="email" 
                value={team.email}
                />

                <label htmlFor="role">Role</label>
                <input 
                onChange={handleTeam} 
                id="role" 
                type="text" 
                name="role" 
                value={team.role}
                />

                <button type="submit">Add Team Member</button>

            </form>
        </div>
    )
}

export default Form;