import React, { useContext } from 'react'
import { Ctx } from '../data/Context'
import { Link } from 'react-router-dom'


const Cart = () => {
  const { cart } = useContext(Ctx)


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
                        <div class="cart-info">
                            <img src={obj.image} alt="Product image" />
                            <div>
                                <p>{obj.name}</p>
                                <small>{obj.price} MDL</small>
                                <br/>
                                <button to="/" className='hover:underline underline-[#ff523b] '>Remove</button>
                            </div>
                        </div>
                    </td>
                    <button>+</button>
                    <h2>{obj.quantity}</h2>
                    <button>-</button>
                    
                </tr>
              ))
            }
        </table>

        <div className="total-price">
            <table>
                <tr>
                    <td>Total</td>
                    <td>$230.00</td>
                </tr>
            </table>
        </div>

    </div>
    </div>
  )
}

export default Cart