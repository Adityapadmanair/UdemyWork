import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-orange dib br3 pa3 ma3 grow bw2 shadow-10'>
            <img alt= 'robots' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>

    );
}

export default Card;