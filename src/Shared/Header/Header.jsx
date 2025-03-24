import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Header = () => {

  const navigate = useNavigate()

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
          <div className="inner-header-section-inner-grid flex items-center relative justify-between py-8 px-[30px] gap-8">
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
                <div className="cart-button-section">
                  <button type="button">
                    <i className="bi bi-cart3 text-white text-2xl "></i>
                  </button>
                </div>
                <div className="profile-button">
                  <button type="button">
                    <i className="bi bi-person-circle text-white text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
