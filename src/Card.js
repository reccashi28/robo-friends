import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green pa3 dib ma3 grow shadow-2">
            <img src={`https://robohash.org/${id}?100x100`} alt="robots"/>
            <div className="tc ma2">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;