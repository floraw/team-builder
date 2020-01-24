import React, { useState } from 'react';

const TeamList = props => {
    return (
        <div className="team-list">
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>Role: {member.role} | Email: {member.email}</p>
                </div>
            ))}
        </div>
    )
};

export default TeamList;