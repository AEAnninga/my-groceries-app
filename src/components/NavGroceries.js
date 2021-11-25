import React from 'react';
import InputField from './InputField'

const NavGroceries = props => {
    const { onAddItem, groceryHeader } = props

    return ( 
        <nav className='navBar'>
            <header>
                <h1>{groceryHeader}</h1>
            </header>
            <InputField 
                onAddItem={onAddItem}
            />
        </nav>
    );
}
 
export default NavGroceries;