import React from 'react';
import List from './List'
import NavShoppingCart from './NavShoppingCart'

const ShoppingCart = props => {
    const { 
        items, 
        onDelete, 
        id, 
        buttonText, 
        buttonId, 
        shopClass,
        shopHeader 
    } = props

    if (items.shoppingListItems.length >= 1) {
        return ( 
            <section>
                <NavShoppingCart 
                    buttonId={buttonId}
                    onDelete={onDelete}
                    buttonText={buttonText}
                    shopHeader={shopHeader}
                />
                <List 
                    items={items}
                    shoppingList={true}
                    id={id}
                    onDelete={onDelete}
                    buttonText={buttonText}
                    buttonId={buttonId}
                    shopClass={shopClass}
                />  
            </section>
        );
    } else {
        return (
            <section>
                <NavShoppingCart 
                    buttonId={buttonId}
                    onDelete={onDelete}
                    buttonText={buttonText}
                    shopHeader={shopHeader}
                />
                <section>
                    <h1>
                        Geen items...
                    </h1>
                </section>
            </section>
        );
    }
}
 
export default ShoppingCart;