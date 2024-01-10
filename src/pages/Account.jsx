import React, { useState } from 'react';

const Account = () => {
  const [formType, setFormType] = useState('login');

  const switchToLogin = (e) => {
    e.preventDefault();
    setFormType('login');
    setIndicatorTransform('translateX(0px)');
  };

  const switchToRegister = (e) => {
    e.preventDefault();
    setFormType('register');
    setIndicatorTransform('translateX(100px)');
  };

  const [indicatorTransform, setIndicatorTransform] = useState('translateX(0px)');

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
      <div className="account-page">
        <div className="container">
          <div className="row mx-[150px]">
            <div className="col-2">
              <img src="images/ch.tree.png" className='w-[70%]'  alt="Christmas-tree" />
            </div>

            <div className="col-2">
              <div className="form-container z-0">
                <div className="form-btn">
                  <span onClick={switchToLogin}>Login</span>
                  <span onClick={switchToRegister}>Register</span>
                  <hr id="Indicator" style={{ transform: indicatorTransform }} />
                </div>

                <form onSubmit={handleSubmit}>
                  {formType === 'login' && (
                    <>
                      <input className='input1' type="text" placeholder="UserName" />
                      <input className='input1' type="password" placeholder="Password" />
                      <button type="submit" className="btn">
                        Login
                      </button>
                      <a href="">Forgot Password</a>
                    </>
                  )}

                  {formType === 'register' && (
                    <>
                      <input className='input1' type="text" placeholder="UserName" />
                      <input className='input1' type="email" placeholder="email" />
                      <input className='input1' type="password" placeholder="Password" />
                      <button type="submit" className="btn">
                        Register
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;



