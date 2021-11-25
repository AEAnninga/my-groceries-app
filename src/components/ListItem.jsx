import React from 'react';

const ListItem = props => {
    const { item, onClick, noClick, addIcon } = props
    
    if (!noClick) {
        return ( 
            <li
                key={item.id} 
                className='grocery-list-item'
                onClick={() => onClick(item)}
                value={item.title}     
            >
                <p>{item.title}</p>
                <p>
                    <i className={addIcon}/> 
                </p>
            </li>   
        );
    } else {
        return ( 
            <li
                key={item.id} 
                className='shop-list-item'
                value={item.title}     
            >
                <p>{item.title}</p>
                <p>Hoeveelheid: {item.amount}</p>
            </li>   
        );
    }
}
 
export default ListItem;