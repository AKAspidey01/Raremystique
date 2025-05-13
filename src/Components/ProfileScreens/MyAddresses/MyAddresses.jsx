import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MyAddresses.scss';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import MobileTopBar from '../ProfileSideBar/MobileTopBar';

const MyAddresses = () => {

  const [addressAdd , setAddressAdd] = useState(false);



  return (
    <div className="MyAddresses bg-gray-200 bg-opacity-70">
      <div className="inner-addressbg-section py-16">
          <div className="shop-container">
            <div className="grid grid-cols-12 profile-grid-section gap-8">
              <div className="left-profile-sidebar-sec col-span-4">
                <ProfileSideBar/>
              </div>
              <div className="left-mobile-side-bar-section col-span-12">
                <MobileTopBar/>
              </div>
              <div className="right-profile-section bg-white rounded-3xl col-span-8 h-[696px] relative overflow-y-auto overflow-hidden">
                <div className="inner-right-profile-section relative">
                  <div className="top-add-address-sec new-top-address-header-bar flex  mb-5 items-center justify-between gap-4 z-[999] bg-white px-8 py-5 w-full sticky top-0">
                    <h2 className='text-2xl font-Manrope font-bold '>ADDRESSES</h2>
                    {addressAdd ? 
                      <button type="button" onClick={() => setAddressAdd(false)} className='text-lg font-semibold text-red-500'><i className="bi bi-x-circle mr-2 text-red-500"></i> Cancel</button> : 
                      <button type="button" onClick={() => setAddressAdd(true)} className='text-lg font-semibold text-blue-500'> <i className="bi bi-plus-circle mr-2"></i> Add Address</button>
                    }
                    {/* <button type="button" className={`text-lg font-semibold duration-300  ${addressAdd ? 'text-red-400' : 'text-blue-500'}`} onClick={() => setAddressAdd(!addressAdd)}> <i className={`bi bi-plus-circle mr-2 ${addressAdd ? 'rotate-45' : 'rotate-0'}`}></i> {addressAdd ? "Cancel" : 'Add Address'}</button> */}
                  </div>
                  <div className="profile-page-form-section px-8 pb-8">
                    {addressAdd ?
                      <div className="address-add-form-section">
                        
                      </div> : 
                      <div className="address-section-main-right grid grid-cols-12 gap-6">
                        <div className="single-address-section-blk bg-gray-200 bg-opacity-70 p-5 col-span-6 rounded-xl relative">
                        <div className="inner-single-address-card">
                          <div className="top-address-type-number-sec flex items-center gap-6">
                              <div className="address-type-sec flex items-center gap-2 bg-white rounded-full px-[18px] py-[6px]">
                                <div className="address-type-icon">
                                  <i className='ri-home-4-line text-[#696969]'></i>
                                </div>
                                <div className="addresstype-text">
                                  <p className='text-[#494949] font-medium'>Home</p>
                                </div>
                              </div>
                              <div className="address-number-sec">
                                  <p className='text-Black font-medium'></p>
                              </div>
                          </div>
                          <div className="middle-complete-address-sec mt-5 mb-3">
                            <p className='text-[#777777]'>Route 239 , 345 , Richards Street Parking Lot Area , Sruvivor 23 ,Area 51 , New Los Santos , USA</p>
                          </div>
                          <div className="bottom-address-city-state-pin-section flex gap-10 items-center justify-between flex-wrap gap-y-2">
                            <div className="address-city-pin flex items-center gap-5">
                              <div className="address-city">
                                <p className='text-Black font-medium'>USA , America</p>
                              </div>
                              <div className="address-pin">
                                <p className='text-Black'>45002</p>
                              </div>
                            </div>
                            <div className="address-state-sec">
                              <p className='font-medium text-Black'>Washington DC</p>
                            </div>
                          </div>
                        </div>
                        <div className="address-delete-edit-section absolute top-5 right-5">
                          <div className="address-delete-edit-inner-sec flex items-center gap-4">
                            <div className="address-delete-btn">
                              <button type="button" className=''><i className="bi bi-trash3 text-red-500 text-lg"></i></button>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div> 
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

MyAddresses.propTypes = {};

MyAddresses.defaultProps = {};

export default MyAddresses;
