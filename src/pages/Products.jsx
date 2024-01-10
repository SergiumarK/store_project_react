import React, { useState, useEffect, useContext } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Ctx } from '../data/Context';
import { Link } from 'react-router-dom';

const Products = () => {
  const { content, addToCart } = useContext(Ctx);
  const [data, setProducts] = useState(content);
  const productsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const [brandFilter, setBrandFilter] = useState(""); // Adăugat filtrul după marcă
  const [categoryFilter, setCategoryFilter] = useState(""); // Adăugat filtrul după marcă

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Aplică filtrul după marcă
  const filteredProducts = data.filter(pr =>
    (brandFilter ? pr.brand === brandFilter : true) &&
    (categoryFilter ? pr.category === categoryFilter : true)
  );

  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
 

  useEffect(() => {
    setProducts(content);
    setCurrentPage(1);
  }, [content]);

  return (
    <div className="small-container">
      <div className="row row-2">
        <h2>All products</h2>

        {/* Filtru după marcă */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="brandFilter"><small className='font-bold'>Filter by brand</small></label>
          <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} id='brandFilter'>
            <option value="">All Brands</option>
            {/* Adaugă opțiunile de filtru aici */}
            <option value="H&M">H&M</option>
            <option value="levi's">Levi's</option>
            <option value="Zara">Zara</option>
          </select>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="categoryFilter"><small className='font-bold'>Category</small></label>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} id='categoryFilter'>
            <option value="">All categories</option>
            {/* Adaugă opțiunile de filtru aici */}
            <option value="babies">Babies</option>
            <option value="Children">Children</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>
      </div>

      <div className="row">
        {currentProducts.map((obj) => (
          <div className='col-4' key={obj.id}>
            <Link to={`/view/${obj.id}`}>
              <img src={obj.image} alt={obj.id} />
            </Link>
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
            <button onClick={() => addToCart(obj.id)} className='hover:underline underline-[#ff523b] font-semibold'><small>Add to cart</small></button>
          </div>
        ))}
      </div>

      <div className="page-btn">
        {Array.from({ length: totalPages }, (_, index) => (
          <span key={index + 1} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </span>
          
        ))}
        <span>&#8594;</span>
      </div>
    </div>
  );
};

export default Products;

