import React from 'react';

const Searchbox = ({searchfield , searchChange}) => {
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightesh-blue'
             type = 'search' placeholder ='search for your robots here'
             onChange={searchChange}
             />
        </div>
    );
}

export default Searchbox;