import React from 'react';
import PropTypes from 'prop-types';
import './ProfileSideBar.scss';
import ProfileBg from '../../../assets/images/profile-bg.png';
import { NavLink } from 'react-router-dom';


// SideBar Icons
import LogoutIcon from '../../../assets/images/logout.svg';
import ProfileIcon from '../../../assets/images/profile.svg';
import OrderIcon from '../../../assets/images/orders.svg';
import ChatIcon from '../../../assets/images/chatwithus.svg';
import Address from '../../../assets/images/address.svg'


const ProfileSideBar = () => {
  return (
    <div className="ProfileSideBar">
      <div className="inner-profile-sidebar rounded-3xl overflow-hidden bg-white">
        <div className="top-image-section-prof relative">
          <img src={ProfileBg} className='max-h-60 object-cover' alt="" />
          <div className="inner-profile-section absolute bottom-6 left-6">
            <h2 className='text-white font-semibold text-3xl'>Hi, Mr. Sai Ganesh</h2>
            <p className='text-white italic'>Your outfit speaks before you do</p>
          </div>
        </div>
        <div className="bottom-menu-section">
          <ul className='flex flex-col gap-4'>
            <li>
              <NavLink className={'w-full bg-white duration-500 hover:bg-gray-200'} to={'/profile'}>
                <div className="inner-single-nav flex items-center px-6 py-4 gap-4">
                  <div className="left-logo-sec">
                    <img src={ProfileIcon} className='w-7 h-7' alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className='font-medium font-Poppins text-lg text-Primary'>My Profile</h6>
                    <p className='text-sm opacity-70'>Change your profile details</p>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className={'w-full bg-white duration-500 hover:bg-gray-200'} to={'/orders'}>
                <div className="inner-single-nav flex items-center px-6 py-4 gap-4 ">
                  <div className="left-logo-sec">
                    <img src={OrderIcon} className='w-7 h-7' alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className='font-medium font-Poppins text-lg text-Primary'>My Orders</h6>
                    <p className='text-sm opacity-70'>Check your order status</p>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className={'w-full bg-white duration-500 hover:bg-gray-200'} to={'/address'}>
                <div className="inner-single-nav flex items-center px-6 py-4 gap-4 ">
                  <div className="left-logo-sec">
                    <img src={Address} className='w-7 h-7' alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className='font-medium font-Poppins text-lg text-Primary'>My Addresses</h6>
                    <p className='text-sm opacity-70'>Save Address for quick Checout</p>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <button type='button' className={'w-full bg-white duration-500 hover:bg-gray-200'}>
                <div className="inner-single-nav flex items-center px-6 py-6 gap-4 ">
                  <div className="left-logo-sec">
                    <img src={ChatIcon} className='w-7 h-7' alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className='font-medium font-Poppins text-lg text-Primary'>Chat with us</h6>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <button type='button' className={'w-full bg-white duration-500 hover:bg-gray-200'}>
                <div className="inner-single-nav flex items-center px-6 py-6 gap-4 ">
                  <div className="left-logo-sec">
                    <img src={LogoutIcon} className='w-7 h-7' alt="" />
                  </div>
                  <div className="right-nav-text">
                    <h6 className='font-medium font-Poppins text-lg text-red-400'>Log Out</h6>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ProfileSideBar.propTypes = {};

ProfileSideBar.defaultProps = {};

export default ProfileSideBar;
