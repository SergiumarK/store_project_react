import React, {useState, useEffect} from 'react'



const Home = () => {
  const images = [
    {
      src: '/images/ch.tree.png',
      alt: 'img2'
    },
    {
      src: '/images/ch.3.png',
      alt: 'img3'
    },
    {
      src: '/images/ch.1.png',
      alt: 'img4'
    },
    {
      src: '/images/gift.png',
      alt: 'img5'
    },
    {
      src: '/images/ch.2.png',
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
              <a href="" class="btn">Explore Now &#8594;</a>
          </div>
          <div className="col-2 ">
            <div key={images} className=' h-[110vh] w-[90%] m-auto  object-contain overflow-hidden rounded-md'>
              <img className='size-full ' src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="categories">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                  <img src="/images/produs1.webp" alt="img2" /> 
                </div>
                <div className="col-3">
                  <img src="/images/produs2.webp" alt="img2" />
                </div>
                <div className="col-3">
                  <img src="/images/produs3.webp" alt="img2" />
                </div>
            </div>
        </div>
    </div>

    {/* Featured products */}

    <div class="small-container">
    <h2 class="title">Featured Products</h2>
    <div class="row">
        <div class="col-4">
            {/* <Link to="/details"><img src="/images/produs3.webp" alt="img2" /></Link>
            <Link to="/details"><img src="/images/produs3.webp" alt="img2" /></Link> */}
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class=" fa-regular fa-star"></i>
            </div>
            <p>$50.00</p>
        </div>
        <div class="col-4">
            <img src="/images/set-femei5.webp" alt="img2" />
            <h4>Red Primted T-Shirt</h4>
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <p>$64.00</p>
        </div>
        <div class="col-4">
            <img src="/images/set-femei5.webp" alt="img2" />
            <h4>Red Primted T-Shirt</h4>
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class=" fa-regular fa-star"></i>
            </div>
            <p>$52.00</p>
        </div>
        <div class="col-4">
            <img src="/images/set-femei5.webp" alt="img2" />
            <h4>Red Primted T-Shirt</h4>
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p>$76.00</p>
        </div>
    </div>



    <h2 className="title">Latest Produsts</h2>
        <div className="row">
            <div className="col-4">
            <img src="/images/set-femei1.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className=" fa-regular fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div className="col-4">
            <img src="/images/set-femei2.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p>$64.00</p>
            </div>
            <div className="col-4">
            <img src="/images/set-femei3.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div class="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className=" fa-regular fa-star"></i>
                </div>
                <p>$52.00</p>
            </div>
            <div className="col-4">
            <img src="/images/set-femei4.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p>$76.00</p>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
            <img src="/images/set-femei5.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className=" fa-regular fa-star"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div className="col-4">
            <img src="/images/set-femei6.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p>$64.00</p>
            </div>
            <div className="col-4">
            <img src="/images/set-femei7.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className=" fa-regular fa-star"></i>
                </div>
                <p>$52.00</p>
            </div>
            <div className="col-4">
            <img src="/images/set-femei8.webp" alt="img2" />
                <h4>Red Primted T-Shirt</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p>$76.00</p>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Home


