import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Ctx } from '../data/Context'
import { Link } from "react-router-dom"
import { FaStar, FaRegStar } from "react-icons/fa";

const View = () => {
    const {content} = useContext(Ctx)
    const {id} = useParams()
    const viewDetails = content.find(obj => obj.id === id)
    const relatedProducts = content.slice(26, 30)
    
    

  return (
    <div>
        <div class="small-container single-product">
            {
                <div class="row">
                    <div className='col-2'>
                        <img src={viewDetails.image} alt={viewDetails.id} />
                    </div>
                    <div className='col-2'>
                        <p>Category: {viewDetails.category}</p>
                        <h1>{viewDetails.name}</h1>
                        <h4>{viewDetails.price} MDL</h4>
                        <select>
                            <option>Select Size</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>Large</option>
                            <option>Medium</option>
                            <option>Small</option>
                        </select>
                        <input type="number" value="1"/>
                        <a href="cart.html" class="btn">Add To Card</a>
                        <h3>Product details</h3>
                        <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe aspernatur officiis debitis minus tenetur magnam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    
                </div> 
            }
        </div>
            <div className="small-container">
            <div className="row row-2">
                <h2 className='font-bold'>Related Product</h2>
                <Link to="/products" className='no-underline hover:underline underline-[#ff523b]'><p >View More</p></Link>
            </div>
            <div className="small-container">
                <div className="row">
                    {
                        relatedProducts.map(obj => (
                        <Link to={`/view/${obj.id}`} className='col-4'>
                            <img src={obj.image} alt={obj.id} />
                            <h4>{obj.name}</h4>
                            <div className='rating'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                            </div>
                            <p>{obj.price} MDL</p>
                        </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default View