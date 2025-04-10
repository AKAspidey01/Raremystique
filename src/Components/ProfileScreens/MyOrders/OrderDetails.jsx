import React from 'react';
import './MyOrders.scss';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import BrownShirt from '../../../assets/images/dummy-prod-front.jpg';

const OrderDetails = () => {
  return (
    <div className="MyOrders bg-gray-200 bg-opacity-70" >
       <div className="inner-addressbg-section py-16">
          <div className="shop-container">
            <div className="grid grid-cols-12 profile-grid-section gap-8">
              <div className="left-profile-sidebar-sec col-span-4">
                <ProfileSideBar/>
              </div>
              <div className="right-profile-section bg-white rounded-3xl col-span-8 h-[696px] relative overflow-y-auto overflow-hidden">
                <div className="inner-right-profile-section relative">
                  <div className="top-add-address-sec flex  items-center justify-between gap-4 z-[999] bg-white px-8 py-5 w-full sticky top-0">
                    <h2 className='text-2xl font-Manrope font-bold '>ORDER DETAILS</h2>
                  </div>
                  <div className="profile-page-form-section px-8 pb-8 ">
                    <div className="top-order-destination-section border relative flex flex-col gap-y-10 border-Primary border-opacity-20 rounded-3xl p-6">
                        <div className="top-pikup-point-section relative z-10 flex items-center gap-x-5">
                            <div className="left-pickup-icon w-12 h-12 flex items-center justify-center bg-emerald-500 border border-emerald-500  rounded-full">
                                <i class="bi text-xl bi-arrow-down text-white "></i>
                            </div>
                            <div className="right-pickup-details-section">
                                <h6 className='text-xl font-medium'>Rare Mystique Warehouse</h6>
                                <p className='italic text-Primary opacity-60'>Pickup Point</p>
                            </div>
                        </div>
                        <div className="top-pikup-point-section relative z-10 flex items-center gap-x-5">
                            <div className="left-pickup-icon w-12 h-12 flex items-center justify-center border border-Primary border-opacity-20 bg-white rounded-full">
                                <i class="bi bi-geo-alt-fill text-xl text-Primary "></i>
                            </div>
                            <div className="right-pickup-details-section">
                                <h6 className='text-xl font-medium'>327 Avenue , 3rd street ....</h6>
                                <p className='italic text-Primary opacity-60'>Destination</p>
                            </div>
                        </div>
                        <div className="divider-reached h-[70%] bg-Primary bg-opacity-20 w-[2px] absolute top-1/2 left-12">
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