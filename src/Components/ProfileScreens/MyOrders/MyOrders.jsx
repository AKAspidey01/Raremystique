import React from 'react';
import PropTypes from 'prop-types';
import './MyOrders.scss';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import BrownShirt from '../../../assets/images/dummy-prod-front.jpg';
import BrownBack from '../../../assets/images/dummy-prod-back.jpg';
import BrownFull from '../../../assets/images/dummy-prod-full.jpg';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {

  const navigate = useNavigate()

  const orders =  [
    {
      image: BrownShirt,
      name: 'Brown Graphic Printed Shirt',
      color: 'Black ',
      size: 'XL',
      price: '₹ 999.00',
      estimated: '12 Apr 2025',
      status: 'In-Transit',
      quantity: 1,
      id: 1
    },
    {
      image: BrownBack,
      name: 'Brown Graphic Printed Shirt',
      color: 'Black ',
      size: 'XL',
      price: '₹ 999.00',
      estimated: '12 Apr 2025',
      status: 'Delivered',
      quantity: 1,
      id: 2
    },
    {
      image: BrownFull,
      name: 'Brown Graphic Printed Shirt',
      color: 'Brown ',
      size: 'L',
      price: '₹ 2700.00',
      estimated: '12 Apr 2025',
      status: 'In-Transit',
      quantity: 3,
      id: 3
    },
  ]

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
                    <h2 className='text-2xl font-Manrope font-bold '>ORDERS</h2>
                  </div>
                  <div className="profile-page-form-section px-8 pb-8">
                    <div className="orders-main-section-right flex flex-col gap-y-6">
                      {orders.map((items , index) => {
                        return (
                          <button key={index} onClick={() => navigate(`/orders/${items.id}`)} className="text-left single-order-section-right flex items-center justify-between duration-300 hover:scale-[0.98] bg-gray-200 bg-opacity-60 py-5 pl-5 pr-8 rounded-xl">
                            <div className="left-image-description-section flex items-center gap-x-4">
                              <div className="order-image">
                                <img src={items.image} className='w-28 h-28 rounded-lg object-cover' alt="" />
                              </div>
                              <div className="order-description">
                                <h2 className='text-xl font-semibold font-DMSans text-Primary '>{items.name}</h2>
                                <p className='text-lg opacity-70 text-Primary'>{items.color} <span className='mx-2'>|</span> {items.size}</p>
                                <p>Estimated Delivery : <span className='text-lg'>{items.estimated}</span></p>
                              </div>
                            </div>
                            <div className="center-quantity">
                              <p className='text-lg font-semibold text-Primary'>{items.quantity}x</p>
                            </div>
                            <div className="right-pricing-sec">
                              <h4 className='text-3xl font-semibold text-Primary font-WorkSans'>{items.price}</h4>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

MyOrders.propTypes = {};

MyOrders.defaultProps = {};

export default MyOrders;
