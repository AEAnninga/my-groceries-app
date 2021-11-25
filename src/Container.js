import React, { Component, Fragment } from 'react';
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header'

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                {id: 1, title: 'Apples', amount: 1},
                {id: 2, title: 'Oranges', amount: 1},
                {id: 3, title: 'Bread', amount: 1},
                {id: 4, title: 'Beer', amount: 1},
            ],
            shoppingListItems: [
            ], 
            buttonText: 'Leeg de winkelmand',
            buttonId: 'delete',
            groceryClass: 'grocery-list',
            shopClass: 'shop-list',
            idCount: 100,
            pageHeader: 'BOODSCHAPPENLIJSTJE',
            pageHeaderIconLeft: 'fa fa-shopping-bag',
            pageHeaderIconRight: 'fa fa-cart-arrow-down',
            groceryHeader: 'Boodschappenlijst',
            shopHeader: 'Winkelwagen',
            addIcon: 'fa fa-cart-plus', 
        }
    }

    handleClick = item => {
        const { id, title } = item
        const { groceryItems, shoppingListItems } = this.state
        const newShoppingListItems = shoppingListItems
        const newShoppingListItem = groceryItems.filter(groceryItem => groceryItem.id === id)
        const newGroceryItems = groceryItems.filter(groceryItem => groceryItem.id !== id)
        const foundShop = newShoppingListItems.some(item => (item.title).toUpperCase() === title.toUpperCase())
        if (foundShop) {
            const foundItem = newShoppingListItems.filter(item => { 
                return (item.title).toUpperCase() === title.toUpperCase()
            })
            const index = newShoppingListItems.findIndex(item => {
                return (item.title).toUpperCase() === (foundItem[0].title).toUpperCase()
            })
            const amount = newShoppingListItems[index].amount + 1
            newShoppingListItems[index].amount = amount
            this.setState({
                groceryItems: newGroceryItems,
                shoppingListItems: newShoppingListItems
            })     
        } else if (!foundShop) {
            newShoppingListItems.push(newShoppingListItem[0])
            this.setState({
                groceryItems: newGroceryItems,
                shoppingListItems: newShoppingListItems
            })
        }   
    }

    handleDelete = () => {
        const resetShoppingListItems = []
        this.setState({shoppingListItems: resetShoppingListItems})
    }

    handleAddItem = (inputValue) => {
        const newId = this.state.idCount
        const newIdCount = this.state.idCount + 1
        const newObject = {id: newId, title: inputValue, amount: 1}
        const newGroceries = [...this.state.groceryItems, newObject]
        this.setState({groceryItems: newGroceries, idCount: newIdCount})
    }

    componentDidMount() {
        const input = document.getElementById('input')
        input.addEventListener('keypress', event => {
            if (event.key === 'Enter') {
                const inputValue = document.getElementById('input').value
                return this.handleAddItem(inputValue)
            }
        })
    }

    render() {
        const {
            buttonText,
            buttonId,
            groceryClass,
            shopClass,
            pageHeader,
            pageHeaderIconLeft: iconLeft,
            pageHeaderIconRight: iconRight,
            groceryHeader,
            shopHeader,
            addIcon
        } = this.state

        return (
            <Fragment>
                <Header 
                    text={pageHeader}
                    leftIcon={iconLeft}
                    rightIcon={iconRight}
                />

                <main className='list-and-cart'>
                    <GroceryList
                        items={this.state}
                        onClick={item => this.handleClick(item)}
                        groceryClass={groceryClass}
                        onAddItem={() => this.handleAddItem(document.getElementById('input').value)}
                        groceryHeader={groceryHeader}
                        addIcon={addIcon}
                    />
                    <ShoppingCart 
                        items={this.state}
                        onDelete={this.handleDelete}
                        id='delete'
                        buttonText={buttonText}
                        buttonId={buttonId}
                        shopClass={shopClass}
                        shopHeader={shopHeader}
                    />
                </main>
            </Fragment>
        );
    }
}
 
export default Container