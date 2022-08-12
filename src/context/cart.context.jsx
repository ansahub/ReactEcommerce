import { useEffect } from 'react';
import { createContext, useState } from 'react';

/*
1. Set value in the Context
2. Create method initialization in the PROVIDER
3. Create appropriate method seperately
*/

//Initialization
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    total: 0
});



//Method to add item to cart
const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd by comparing id (i.e if the item already is in the cart)
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //If found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );
    }

    //return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}

//Method to remove items from cart
const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
    
    //check if quantity is equal to 1, if remove that item from cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    
    //return back cartitems with matching cart item with REDUCED quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        );
    }    
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}


//Provider
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    //Reducing from quantities to total and set that to the 'newCartCount'
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount); //setCartCount = newCartCount
    },[cartItems]);

    //Set total price of the cart
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal); //setCartTotal = newCartTotal
    },[cartItems])


    // ADDING Items to cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    //REMOVING items from cart
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    //Clear items from cart
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    //value is what you want to expose in the context
    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, cartItems, cartCount, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

