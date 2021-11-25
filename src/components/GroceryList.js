import React, { useEffect} from 'react';
import List from './List'
import NavGroceries from './NavGroceries';


const GroceryList = props => {
    const {
        items, 
        onClick, 
        groceryClass, 
        onAddItem, 
        groceryHeader,
        addIcon
    } = props

    return ( 
        <section>
            <NavGroceries 
                onAddItem={onAddItem}
                groceryHeader={groceryHeader}
            />
            <List 
                items={items}
                onClick={onClick}
                groceryClass={groceryClass}
                addIcon={addIcon}
            />
        </section>
    );
}
 
export default GroceryList;