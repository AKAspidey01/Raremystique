import React from 'react';
import './MyOrders.scss';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import BrownShirt from '../../../assets/images/dummy-prod-front.jpg';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {


  const navigate = useNavigate();

  return (
    <div className="MyOrders bg-gray-200 bg-opacity-70" >
       <div className="inner-addressbg-section py-16">
          <div className="shop-container">
            <div className="grid grid-cols-12 profile-grid-section gap-8">
              <div className="left-profile-sidebar-sec col-span-4">
                <ProfileSideBar/>
              </div>
              <div className="right-profile-section bg-white rounded-3xl col-span-8 overflow-hidden relative">
                <div className="inner-right-profile-section relative">
                  <div className="top-add-address-sec top-order-detail-backsec flex  items-center justify-between gap-4 z-[999] bg-white px-8 py-5 w-full sticky top-0">
                    <div className="backbutton-header flex items-center gap-x-4">
                      <button type="button" onClick={() => navigate(-1)} className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'><i className="bi bi-arrow-left-short text-2xl"></i></button>
                      <h2 className='text-2xl font-Manrope font-bold '>ORDER DETAILS</h2>
                    </div>
                    <p>Ordered On : <span className='text-lg'>10 Mar 2025</span></p>
                  </div>
                  <div className="profile-page-form-section px-8 pb-8 flex flex-col gap-y-4">
                    <div className="top-order-destination-section border relative flex flex-col gap-y-8 border-Primary border-opacity-20 rounded-3xl p-5">
                        <div className="top-pikup-point-section relative z-10 flex items-center gap-x-5">
                            <div className="left-pickup-icon w-10 h-10 flex items-center justify-center bg-emerald-500 border border-emerald-500  rounded-full">
                                <i className="bi text-xl bi-arrow-down text-white "></i>
                            </div>
                            <div className="right-pickup-details-section">
                                <h6 className='text-lg font-medium'>Rare Mystique Warehouse</h6>
                                <p className='italic text-Primary opacity-60'>Pickup Point</p>
                            </div>
                        </div>
                        <div className="top-pikup-point-section relative z-10 flex items-center gap-x-5">
                            <div className="left-pickup-icon w-10 h-10 flex items-center justify-center border border-Primary border-opacity-20 bg-white rounded-full">
                                <i className="bi bi-geo-alt-fill text-xl text-Primary "></i>
                            </div>
                            <div className="right-pickup-details-section">
                                <h6 className='text-lg font-medium'>327 Avenue , 3rd street ....</h6>
                                <p className='italic text-Primary opacity-60'>Destination</p>
                            </div>
                        </div>
                        <div className="divider-reached h-[60%] bg-Primary bg-opacity-20 w-[2px] absolute top-1/2 left-[40px]">
                        </div>
                    </div>
                    <div className="product-details-section">
                      <div className="single-order-section-right flex items-center justify-between bg-gray-200 bg-opacity-60 py-5 pl-5 pr-8 rounded-3xl">
                        <div className="left-image-description-section flex items-center gap-x-4">
                          <div className="order-image">
                            <img src={BrownShirt} className='w-16 h-16 rounded-lg object-cover' alt="" />
                          </div>
                          <div className="order-description">
                            <h2 className='text-xl font-semibold font-DMSans text-Primary '>Printed Graphic Brown Shirt</h2>
                            <p className='text-lg opacity-70 text-Primary'>Brown <span className='mx-2'>|</span> XL</p>
                          </div>
                        </div>
                        <div className="center-quantity">
                          <p className='text-lg font-semibold text-Primary'>1x</p>
                        </div>
                        <div className="right-pricing-sec">
                          <h4 className='text-3xl font-semibold text-Primary font-WorkSans'>₹ 999</h4>
                        </div>
                      </div>
                    </div>
                    <div className="address-details-section">
                      <h2 className='text-xl font-semibold font-Manrope text-Primary'>Mr.Sai Ganesh</h2>
                      <p className='text-sm text-Primary opacity-60'>sg83362@gmail.com</p>
                      <div className="inner-address-section order-details-address-sec">
                        <p>204 , Ganapathi Apartment, Manthripragada street , Suryanarayana puram , Kakinada H.O, Kakinada - 533001 </p>
                        <div className="bottom-state-city-sec flex items-center gap-x-5">
                          <h4>Kakinada</h4>
                          <h4>Andhra Pradesh</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OrderDetails