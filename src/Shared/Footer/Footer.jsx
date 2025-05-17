import React from 'react';
import './Footer.scss';
import face from '../../assets/images/Facebook.svg';
import insta from '../../assets/images/Instagram.svg';
import telegram from '../../assets/images/social-media/telegram.svg';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
  

  const socialNavs = [
    {
      title: 'Facebook',
      icon: face,
      link: 'https://www.facebook.com/profile.php?id=61576302362508'
    },
    {
      title: 'Instagram',
      icon: insta,
      link: 'https://www.instagram.com/raremystique.in/'
    },
    {
      title: 'Telegram',
      icon: telegram,
      link: 'https://t.me/akaspidey'
    },
  ]

  return (
    <div className="Footer">
       <footer>
          <div className="footer-inner-section  pt-10">
              <div className="footer-content">
                {/* <div className="footer-top-section mb-14">
                  <div className="container">
                    <div className="top-footer-inner">
                        <div className="footer-header text-center">-
                          <h2 className='font-Inter text-3xl font-bold mb-3 text-white'>Learning Made Simple By SGCODES</h2>
                          <p className='font-Rubik text-lg text-white'>Wanna Contact Me , Just Submit Your Email</p>
                        </div>
                        <div className="footer-mail-section w-full max-w-[350px] mx-auto mt-3 relative">
                          <input type="email"  placeholder='Email Here' className='py-3 px-4 rounded-lg w-full outline-none focus:shadow-2xl font-Poppins focus:outline-none border-0 duration-500' />
                          <div className="submitter absolute top-1 right-1 h-full"><button className='h-[85%] px-4 bg-greenYellow rounded-lg font-Poppins'>Send</button></div>
                        </div>
                    </div>
                  </div>
                </div> */}
                <div className="footer-bottom-section pb-14 pt-10 px-[30px]">
                    <div className="">
                        <div className="footer-rounded-fill">
                          <div className="grid grid-cols-12 footer-main-grid-section">
                              <div className="bio-logo-section col-span-4 h-full">
                                  <div className="footer-logo flex flex-col justify-between h-full">
                                    <div className="top-footer-left-logo-part">
                                      <button className="sidemenu-logo-inner flex group">
                                        {/* stroke="#040C0C" */}
                                        <img src={Logo} className='max-w-64' alt="" />
                                      </button>
                                      <div className="footer-logo-desc mt-4 mb-5 w-10/12">
                                        <p className='font-Poppins text-base text-white opacity-60'>
                                          Exclusive online shopping experience where you can explore a huge 
                                          collection of stylish clothing at unbeatable deals. 
                                        </p>
                                      </div>
                                    </div>
                                    <div className="follow-me-section ">
                                      <div className="follow-icons flex items-end gap-7">
                                        {socialNavs.map((items , index) => {
                                          return (
                                            <div className="insta single-footer-socialer relative group" key={index}>
                                                <button type="button" className='' onClick={() => window.open(items.link , "_blank")}>
                                                  <img src={items.icon} className='w-8 h-8 object-contain' alt="" />
                                                </button>
                                                <div className="absolute-section-socialer absolute -top-12 -left-[20%] text-center bg-white px-2 py-1 rounded w-28 opacity-0  group-hover:opacity-100 group-hover:-top-10 duration-300 group-hover:z-10 -z-10">
                                                  <p className='text-Primary font-Manrope '>{items.title}</p>
                                                </div>
                                            </div>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="col-span-8  right-side-footer-menu-part">
                                <div className="grid grid-cols-6 gap-5 items-center h-full footer-menu-handler-grid">
                                    <div className="menu-navigation-section footer-menu-1 similar-footer-menu-sections pl-10 col-span-2"> 
                                        {/* <h2 className='font-semibold font-Poppins text-white'>Home</h2> */}
                                        <nav>
                                          <ul className='flex flex-col gap-4'>
                                            <li><NavLink className='font-Rubik text-white font-medium'to={'/about-us'}>About Us</NavLink></li>
                                            <li><NavLink className='font-Rubik text-white font-medium' to={'/shop'}>Shop</NavLink></li>
                                            <li><NavLink className='font-Rubik text-white font-medium' to={'/contact-us'}>Contact Us</NavLink></li>
                                          </ul>
                                        </nav>
                                    </div>
                                    <div className="menu-navigation-section footer-menu-2 similar-footer-menu-sections col-span-2">
                                        <nav>
                                          <ul className='flex flex-col gap-4'>
                                            <li><a href="mailto:raremystiquein@gmail.com" className='font-Rubik text-white font-medium'>Mail Us: raremystiquein@gmail.com</a></li>
                                            <li><a href="tel:+919014579785" className='font-Rubik text-white font-medium'>Call us: +91 9014579785</a></li>
                                            <li><a href="https://maps.app.goo.gl/nZZSnxGXukRrVPmp6" className='font-Rubik text-white font-medium' target='_blank'>Kakinada, Andhra Pradesh</a></li>
                                          </ul>
                                        </nav>
                                    </div>
                                    <div className="menu-navigation-section footer-menu-2 pr-10 col-span-2 last-footer-menu-section">
                                        <nav>
                                          <ul className='flex flex-col gap-4'>
                                            <li><NavLink className='font-Rubik text-white font-medium' to={'/terms-conditions'}>Terms & Conditions</NavLink></li>
                                            <li><NavLink className='font-Rubik text-white font-medium' to={'/privacy-policy'}>Privacy Policy</NavLink></li>
                                            <li><NavLink className='font-Rubik text-white font-medium' to={'/refund-policy'}>Refund Policy</NavLink></li>
                                          </ul>
                                        </nav>
                                    </div>
                                    {/* <div className="col-span-6 px-8 py-5 mt-10 copyright-columns-sec ">
                                      <div className="flex items-center justify-between bottom-flexer-copyright-sec">
                                        <div className="left-side-copyright">
                                          <p className='font-Poppins text-base text-white '>© Copyright Sai Ganesh  • 2023</p>
                                        </div>
                                        <div className="right-side-copyright">
                                          <p className='font-Poppins text-base text-white '>SGCODES</p>
                                        </div>
                                      </div>
                                    </div> */}
                                </div>  
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-section ">
                    <div className="copyright-inner border-t border-white border-opacity-50 py-6 px-[30px]">
                        <div className="">
                          <div className="flex items-center justify-between">
                            <div className="left-side-copyright">
                              <p className='font-Poppins text-base text-white '>© Copyright Rare Mystique  • 2025</p>
                            </div>
                            <div className="left-side-copyright">
                              <p className='font-Poppins text-base text-white '>RM</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </footer>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
