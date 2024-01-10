import React, { useState, useEffect, useContext } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Ctx } from '../data/Context';
import { Link } from 'react-router-dom';

const Products = () => {
  // Extrage datele și funcția addToCart din context
  const { content, addToCart } = useContext(Ctx);

  // State-uri pentru gestionarea paginării și a filtrelor
  const [data, setData] = useState(content);
  const [currentPage, setCurrentPage] = useState(1);
  const [brandFilter, setBrandFilter] = useState(""); // Adăugat filtrul după marcă
  const [categoryFilter, setCategoryFilter] = useState(""); // Adăugat filtrul după categorie
  const [priceFilter, setPriceFilter] = useState({
    min: 0,
    max: 1000
  })// Adăugat filtrul după pret

  // Calculul indexului de început și sfârșit pentru produsele de pe pagina curentă
  const productsPerPage = 16;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Aplică filtrul după marcă și categorie
  const filteredProducts = data.filter(pr =>
    (brandFilter ? pr.brand === brandFilter : true) &&
    (categoryFilter ? pr.category === categoryFilter : true)
  );

  // Extrage produsele pentru pagina curentă
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Calculul numărului total de pagini
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Efect secundar pentru a reseta datele și pagina când se schimbă conținutul
  useEffect(() => {
    setData(content);
    setCurrentPage(1);
  }, [content]);

  useEffect(() => {
    if(priceFilter.min !== 0 || priceFilter.max !== 0) {
      setData(content.filter(pr => pr.price > priceFilter.min && pr.price < priceFilter.max))
    }
  }, [priceFilter])

  return (
    <div className="small-container">
      <div className="row row-2">
        {/* Butonul "All products" care reseta filtrul și datele */}
        <h2 onClick={() => { console.log('Clicked!'); setData(content); }} className='hover:underline underline-[#ff523b] cursor-pointer'>
          All products
        </h2>

        {/* Filtru după marcă */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="brandFilter"><small className='font-bold'>Filter by brand</small></label>
          <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} id='brandFilter'>
            <option value="">All Brands</option>
            <option value="H&M">H&M</option>
            <option value="levi's">Levi's</option>
            <option value="Zara">Zara</option>
          </select>
        </div>

        {/* Filtru după pret min */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="minPriceFilter"><small className='font-bold'>Filter by min-price</small></label>
          <input  type="number" placeholder="Min Ptice" value={priceFilter.min} onChange={(e) => setPriceFilter({...priceFilter, min: e.target.value})}/>
        </div>

        {/* Filtru după pret max */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="maxPriceFilter"><small className='font-bold'>Filter by max-price</small></label>
          <input  type="number" placeholder="Max Ptice" value={priceFilter.max} onChange={(e) => setPriceFilter({...priceFilter, max: e.target.value})}/>
        </div>

        
        

        {/* Filtru după categorie */}
        <div className='flex flex-col gap-1'>
          <label htmlFor="categoryFilter"><small className='font-bold'>Category</small></label>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} id='categoryFilter'>
            <option value="">All categories</option>
            <option value="babies">Babies</option>
            <option value="Children">Children</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>
      </div>

      {/* Butoanele de paginare */}
      <div className="page-btn">
        {Array.from({ length: totalPages }, (_, index) => (
          <span key={index + 1} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </span>
        ))}
        <span>&#8594;</span>
      </div>

      {/* Rândul de produse */}
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
            <button onClick={() => addToCart(obj.id)} className='hover:underline underline-[#ff523b] font-semibold'>
              <small>Add to cart</small>
            </button>
          </div>
        ))}
      </div>

      {/* Butoanele de paginare */}
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
