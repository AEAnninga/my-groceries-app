import React from 'react';

const Header = props => {
    const { text, leftIcon, rightIcon } = props
    return (  
        <header className='title'>
            <h1>
                <i className={leftIcon}/>
                {text}
                <i className={rightIcon}/>
            </h1>
        </header>
    );
}
 
export default Header;