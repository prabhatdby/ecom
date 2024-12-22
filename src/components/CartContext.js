import { Children, createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (item) => {
        setCart((prev) => [...prev, item])
    }
    function removeCartItem(index) {
        console.log(index, "======cart index")
        return setCart((prev) => prev.filter((_, i) => i !== index));
    }
    return (
        <CartContext.Provider value={{ cart, addCart, removeCartItem }}>
            {children}
        </CartContext.Provider>
    )

}
