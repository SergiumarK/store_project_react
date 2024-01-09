import React, {useState, useEffect, useContext} from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { Ctx } from '../data/Context';
import { Link } from 'react-router-dom';


const Home = () => {
  const {content} = useContext(Ctx)
  const topProducts = content.slice(3, 6)
  const featuredProducts = content.slice(16, 20)
  const latestProducts = content.slice(14, 22)

  const images = [
    {
      src: '/images/ch1.png',
      alt: 'img2'
    },
    {
      src: '/images/ch2.png',
      alt: 'img3'
    },
    {
      src: '/images/ch3.png',
      alt: 'img4'
    },
    {
      src: '/images/ch4.png',
      alt: 'img5'
    },
    {
      src: '/images/ch5.png',
      alt: 'img6'
    },
    {
      src: '/images/ch6.png',
      alt: 'img6'
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect (() => {
    const intervalId = setInterval
  })
  
  

  return (
  <div>
    <div className='header'>
      <div className='container'>
        <div className="row">
          <div className="col-2">
              <h1>Dress to impress this holiday season.</h1>
              <p>Our chic collection is the perfect gift to yourself.</p>
              <Link to={`/products`} className="btn">Explore Now &#8594;</Link>
          </div>
          <div className="col-2 ">
            <div key={images} className=' h-[110vh] w-[90%] m-auto  object-contain overflow-hidden rounded-md'>
              <img className='size-full' src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="categories">
        <div className="small-container">
            <div className="row">
              {
                topProducts.map(obj => (
                  <div key={obj.id} className='col-3'>
                    <img src={obj.image} alt={obj.id} />
                  </div>
                ))
              }
            </div>
        </div>
    </div>

    {/* Featured products */}

    <div className="small-container">
    <h2 className="title">Featured Products</h2>
    <div className="row">
      {
        featuredProducts.map(obj => (
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


{/* latest products */}
      <h2 className="title">Latest Produsts</h2>
        <div className="row">
          {
            latestProducts.map(obj => (
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

      {/* offer */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
              <div className="col-2">
                <img src="/images/exclusive.png" alt="img2" />
              </div>
              <div className="col-2">
                  <p>Exclusively Available on iuvas</p>
                  <h1 className='font-extrabold'>Smart Band 5</h1>
                  <small>The MI Smart Band 5 features a 39.9% larger than MI Band 4 AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.</small>
                      <br />
                  <Link to={`/account`} className="btn">Buy Now &#8594;</Link>    
              </div>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="testimonial">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas hic animi numquam impedit. Doloremque optio pariatur tempore!</p>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <img src="/images/user-1.png" alt="img2" />
                    <h3>Claire Parker </h3>
                </div>
                <div className="col-3">
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis repudiandae laudantium maiores voluptatum nemo illum. Eligendi, fuga labore?</p>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <img src="/images/user-2.png" alt="img2" />
                    <h3>Will Smith </h3>
                </div>
                <div className="col-3">
                    
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quidem consequatur sed ab soluta repellat minima fugiat eius?</p>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <img src="/images/user-3.png" alt="img2" />
                    <h3>Madison Ivy </h3>
                </div>
            </div>
        </div>
      </div>

      {/* brands */}
      <div className="brands">
        <div className="small-container">
            <div className="row">
                <div className="col-5">
                    <img src="images/logo-godrej.png" alt=""/>
                </div>
                <div className="col-5">
                    <img src="images/logo-oppo.png" alt=""/>
                </div>
                <div className="col-5">
                    <img src="images/logo-coca-cola.png" alt=""/>
                </div>
                <div className="col-5">
                    <img src="images/logo-paypal.png" alt=""/>
                </div>
                <div className="col-5">
                    <img src="images/logo-philips.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home


