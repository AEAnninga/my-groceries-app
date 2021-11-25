import React from 'react';

const InputField = props => {
    const { onAddItem } = props

    return (  
        <section className='input'>
            <input 
                type='text'
                placeholder='Voer boodschap in'
                id='input'
            />
            <button onClick={onAddItem}>
                Voeg toe
            </button>
        </section>
    );
}
 
export default InputField;