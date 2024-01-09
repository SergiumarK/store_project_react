import { createContext, useState } from "react";
import contentJSON from "./Data.json"

export const Ctx = createContext()

const Context = ({children}) => {
    const [content, setContent] = useState(contentJSON)
    const [cart, setCart] = useState([])

    const addToCart = (id) => {
        const product = content.find(obj => obj.id === id)

        const cartProduct = cart.find(obj => obj.id === id)//verificam daca obiectul exista in tablu
        if (cartProduct) {
            setCart(cart.map(obj => {
                if (obj.id === cartProduct.id) {
                    return{...obj, quantity: obj.quantity +1}
                } else {
                    return obj
                }
            }))
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }
        console.log(cart)
    }

    return (
        <Ctx.Provider value={{content: content, cart: cart, addToCart: addToCart}}>
            {children}
        </Ctx.Provider>
    )
}

export default Context