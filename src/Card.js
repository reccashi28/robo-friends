import React from 'react';
import 'tachyons';

const Card = () => {
    return (
        <div>
            <img src="https://robohash.org/test?100x100" alt="robots"/>
            <div>
                <h2 className="tc">Bec Mey</h2>
                <p>becmey@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;