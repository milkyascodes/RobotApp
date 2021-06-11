import React from 'react';

const Searchbox = ({searchfield, searchChange}) =>{
    return(
        <div>
            <input 
                className='ba b--green bg-lightest-blue pa3'
                type='search' 
                placeholder='Search robots' 
                onChange={searchChange}
            />
        </div>
    )
}
export default Searchbox;