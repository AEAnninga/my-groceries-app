import React from 'react';

const NavShoppingCart = props => {
    const { buttonId, onDelete, buttonText, shopHeader} = props
    return ( 
        <nav className='navBar'>
            <header>
            <h1>{shopHeader}</h1>
            </header>
            <button
                id={buttonId} 
                onClick={onDelete}
            >
                {buttonText}    
            </button>
        </nav>
    );
}
 
export default NavShoppingCart;