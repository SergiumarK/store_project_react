import React, { useContext } from 'react'
import { Ctx } from '../data/Context'



const Cart = () => {
  const { cart, setCart } = useContext(Ctx)

  const changeQnt = (id, type) => {
    setCart(cart.map(obj => {
      if (obj.id === id) {
        if (type === "minus") {
          return {...obj, quantity: obj.quantity - 1}
        } else {
          return {...obj, quantity: obj.quantity + 1}
        }
      } else {
        return obj
      }
    }))
  }

  const deleteProduct = (id) => {
    setCart(cart.filter(obj => obj.id !== id))
  }


  return (
    <div>
      <div className="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            {
              cart.map(obj => (
                <tr key={obj.id}>
                    <td>
                        <div className="cart-info">
                            <img className='object-cover' src={obj.image} alt="Product image" />
                            <div>
                                <p>{obj.name}</p>
                                <small>
                                  {
                                    obj.quantity > 1 ? 
                                    `${obj.quantity} x ${obj.price} MDL` :
                                    `${obj.price} MDL`
                                  }
                                </small>
                                <br/>
                                <button onClick={() => deleteProduct(obj.id)} to="/" className='hover:underline underline-[#ff523b] '>Remove</button>
                            </div>
                        </div>
                    </td>
                    <button onClick={() => changeQnt(obj.id, "plus")}>+</button>
                    <h2>{obj.quantity}</h2>
                    <button onClick={() => changeQnt(obj.id, "minus")} className={`${obj.quantity <= 1 ? "hidden" : ""}`}>-</button>
                    <td>{`${obj.quantity * obj.price} MDL`}</td>
                </tr>
              ))
            }
        </table>

        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Total</td>
                <td>{`${cart.reduce((total, obj) => total + obj.quantity * obj.price, 0)} MDL`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
    </div>
    </div>
  )
}

export default Cart