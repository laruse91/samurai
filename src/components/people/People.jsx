import React from 'react';
import './People.css';
import UserBlock from './userBlock/UserBlock'

const People = (props) => {

    const people = props.peoplePage.people
        .map(user => <UserBlock key={user.id} id={user.id}
                                name={user.name}
                                lastName={user.lastName}
                                photo={user.photo}
                                location={user.location}
                                status={user.status}
                                followed={user.followed}/>)

    return (
            <div className="people">
                {people}
            </div>
    )
}

export default People;