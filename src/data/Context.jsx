import { createContext, useEffect, useState } from "react"
import contentJSON from "./Data.json"

export const Ctx = createContext()

const Context = ({children}) => {
    const [content, setContent] = useState(contentJSON)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

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

        
        
    }

    return (
        <Ctx.Provider value={{content: content, cart: cart, addToCart: addToCart, setCart: setCart}}>
            {children}
        </Ctx.Provider>
    )
}

export default Context