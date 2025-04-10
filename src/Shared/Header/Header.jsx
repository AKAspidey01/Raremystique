import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { useAuth } from '../../utils/AuthContext';
// import { useAuth } from '../../utils/AuthContext';
import ProfileIcon from '../../assets/images/profile-icon.svg';

const Header = () => {

  const navigate = useNavigate();
  
  const {authToken} = useAuth();

  const [mobileMenu , setMobileMenu] = useState(false)

  const marqueeSlider = [
    {
        name: 'Great Discounts on New Arrivals'
    },
    {
        name: 'Best Deals on Shopping'
    },
    {
        name: 'Simple , Seamless & So Easy'
    },
    {
        name: 'Best Deals on every Saturday'
    },
    {
      name: 'Great Discounts on New Arrivals'
    },
    {
        name: 'Best Deals on Shopping'
    },
    {
        name: 'Simple , Seamless & So Easy'
    },
    {
        name: 'Best Deals on every Saturday'
    },
  ]


  console.log(authToken)

  return  (
    <div className="Header">
      <div className="inner-heaer-section">
        <div className="inner-header-marquee-section bg-white py-2 ">
            <Marquee
              gradient={false}
              gradientColor={'#181818'}
              gradientWidth={200}
              pauseOnHover
            >
              {marqueeSlider.map((items , index) => {
                return (
                  <div className="content-marquee" key={index}>
                    <div className='marquee-item-name-section flex items-center'>
                        <div className="dot-section-marquee mx-6">
                            <h4 className='text-Primary text-xl'>•</h4>
                        </div>
                        <h4 className='text-Primary text-sm font-medium'>{items.name}</h4>
                    </div>
                  </div>
                )
              })}
            </Marquee>
        </div>
        <div className="">
          <div className="inner-header-section-inner-grid flex items-center relative justify-between py-8 px-[30px] gap-x-12">
            <div className="main-header-logo-menu-sec">
              <button type='button' className="left-logo-section text-left" onClick={() => navigate('/')}><img src={Logo} className='w-[320px]' alt="" /></button>
            </div>
            <div className="center-menu-section flex items-center gap-16">
              <nav>
                <ul className='flex items-center bg-white bg-opacity-10 rounded-full gap-2 justify-center'>
                  <li>
                    <NavLink className={'px-6 py-[6px] uppercase text-sm rounded-full '} to={'/'}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink className={'px-6 py-[6px] uppercase text-sm rounded-full '} to={'/shop'}>Shop</NavLink>
                  </li>
                  <li>
                    <NavLink className={'px-6 py-[6px] uppercase text-sm rounded-full '} to={'/about-us'}>About</NavLink>
                  </li>
                  <li>
                    <NavLink className={'px-6 py-[6px] uppercase text-sm rounded-full '} to={'/contact-us'}>Contact</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="last-profile-cart-section flex items-center gap-8">
              {authToken ? 
                <div className="cart-button-section">
                  <button type="button">
                    <i className="bi bi-cart3 text-white text-2xl "></i>
                  </button> 
                </div> : null }
                <div className="profile-button">
                  <button type="button" onClick={() => navigate('/profile')}>
                    <i className="bi bi-person-circle text-white text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-menu-section">
                <button type="button" className='duration-300' onClick={() => setMobileMenu(true)}>
                  <i className="text-white text-3xl bi bi-list"></i>
                </button>
            </div>
            <div className={`mobile-fixed-header-section fixed bg-white top-0 w-[70%] duration-300 h-full z-[9999] ${mobileMenu ? 'right-0 opacity-100' : '-right-full opacity-0'}`}>
                <div className="inner-mobile-menu-section relative">
                    <button type="button" onClick={() => setMobileMenu(false)} className="w-8 h-8 bg-white absolute top-6 left-6 rounded-full flex items-center justify-center">
                      <i className="bi bi-arrow-left text-xl"></i>
                    </button>
                    <div className="account-status-displayer px-6 pt-20 pb-6">
                      {authToken ?  
                        <button className="mobile-profile-displayer text-left w-full flex items-center flex-wrap gap-4">
                          <div className="left-user-icon">
                              <img src={ProfileIcon} className='w-12 h-12' alt="" />
                          </div>
                          <div className="right-user-details">
                            <h2 className=' text-white text-xl font-medium'>Sai Ganesh</h2>
                            <p className=' text-white'>sg8332234@gmail.com</p>
                          </div>
                        </button> : 
                        <button className="mobile-profile-displayer flex items-center w-full flex-wrap gap-4">
                          <img src={ProfileIcon} className='w-10 h-10' alt="" />
                          <h2 className=' text-white text-xl'>Login</h2>
                        </button>
                      }
                    </div>
                    <div className="mobile-menu-navigation-section">
                      <ul>
                        <li>
                          <NavLink onClick={() => setMobileMenu(false)} to={'/'} className={'py-4 hover:bg-black hover:bg-opacity-15 duration-300 px-6 bg-white text-lg w-full'}>Home</NavLink>
                        </li>
                        <li>
                          <NavLink onClick={() => setMobileMenu(false)} to={'/shop'} className={'py-4 hover:bg-black hover:bg-opacity-15 duration-300 px-6 bg-white text-lg w-full'}>Shop</NavLink>
                        </li>
                        <li>
                          <NavLink onClick={() => setMobileMenu(false)} to={'/about-us'} className={'py-4 hover:bg-black hover:bg-opacity-15 duration-300 px-6 bg-white text-lg w-full'}>About</NavLink>
                        </li>
                        <li>
                          <NavLink onClick={() => setMobileMenu(false)} to={'/contact-us'} className={'py-4 hover:bg-black hover:bg-opacity-15 duration-300 px-6 bg-white text-lg w-full'}>Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
            <button onClick={() => setMobileMenu(false)} className={`mobile-fixed-overlay-section fixed top-0 z-[999] duration-300  w-full h-full ${mobileMenu ? 'left-0 opacity-100' : '-left-full opacity-0'}`}>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
