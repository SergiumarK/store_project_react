const Footer = () => {
    return <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="app-logo">
                            <img className="cursor-pointer" src="/images/play-store.png" alt="img2" />
                            <img className="cursor-pointer" src="/images/app-store.png" alt="img2" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img className="cursor-pointer" src="/images/iuvas_logo.png" alt="img2" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aliquid?</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">All rights reserved 2024</p>
            </div>
        </div>
    </>
}

export default Footer