import { useEffect } from 'react';
import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd by comparing id
    const exisingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //If found, increment quantity
    if(exisingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );
    }

    //return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount); //setCartCount = newCartCount
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    //value is what you want to expose in the context
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};