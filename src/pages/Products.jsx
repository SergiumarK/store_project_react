import React, {useState, useEffect, useContext} from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { Ctx } from '../data/Context';
import { Link } from 'react-router-dom';



const Products = () => {
  const {content} = useContext(Ctx)
  const mainPage = content.slice(0, 20)

  return (
    <div class="small-container">

        <div class="row row-2">
            <h2>All products</h2>
            <select>
                <option>Default Shorting</option>
                <option>Short by price</option>
                <option>Short by popularity</option>
                <option>Short by rating</option>
                <option>Short by sale</option>
            </select>
        </div>

        <div class="row">
        {
          mainPage.map(obj => (
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

        <div class="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
        </div>
    </div>
  )
}

export default Products