import React from 'react';
import PropTypes from 'prop-types';
import './MyOrders.scss';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';

const MyOrders = () => {
  return (
    <div className="MyOrders bg-gray-200 bg-opacity-70" >
       <div className="inner-addressbg-section py-16">
          <div className="shop-container">
            <div className="grid grid-cols-12 profile-grid-section gap-8">
              <div className="left-profile-sidebar-sec col-span-4">
                <ProfileSideBar/>
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
