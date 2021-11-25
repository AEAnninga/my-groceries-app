import React from 'react';
import ListItem from './ListItem'

const List = props => {
    const {
        items, 
        onClick, 
        shoppingList, 
        id,
        groceryClass,
        shopClass,
        addIcon
    } = props
    
    const groceryItems = items.groceryItems
    const shoppingListItems = items.shoppingListItems
   
    if (!shoppingList) {
        return (
            <ul className={groceryClass}>
                {groceryItems.map(item => {
                    return (
                        <ListItem 
                            key={item.id} 
                            item={item}
                            onClick={onClick}
                            addIcon={addIcon}
                        />
                    )
                })}
            </ul>
        )
    } else {
        return (
            <ul className={shopClass}>
                {shoppingListItems.map(item => {
                    return (
                        <ListItem 
                            key={item.id} 
                            item={item}
                            noClick={true}
                            id={id}
                        />
                    )
                })} 
            </ul>
        )
    }    
}
 
export default List;
