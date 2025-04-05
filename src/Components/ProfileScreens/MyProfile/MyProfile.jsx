import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MyProfile.scss';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';

const MyProfile = () => {


  const [genderSelect , setGenderSelect] = useState('')
  

  const gender = [
    {
      value : 'male',
      name: 'Male'
    },
    {
      value : 'fe-male',
      name: 'Fe-Male'
    },
    {
      value : 'other',
      name: 'Other'
    },
  ]


  return (
    <div className="MyProfile bg-gray-200 bg-opacity-70">
      <div className="inner-profilebg-section py-16">
        <div className="shop-container">
          <div className="grid grid-cols-12 profile-grid-section gap-8">
            <div className="left-profile-sidebar-sec col-span-4">
              <ProfileSideBar/>
            </div>
            <div className="right-profile-section bg-white rounded-3xl col-span-8">
              <div className="inner-right-profile-section p-8">
                <h2 className='text-2xl font-Manrope font-bold mb-5'>PROFILE</h2>
                <div className="profile-page-form-section">
                  <div className="inner-login-form">
                    <div className="inner-login-form-sec grid grid-cols-12 gap-x-6 gap-y-8">
                      <div className="form-inputsec col-span-6">
                          <p className='opacity-50 mb-1'>First Name</p>
                          <div className="inner-input-section relative w-full">
                            <input type="text" disabled placeholder='Enter Email Address*'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl text-black bg-gray-200 bg-opacity-50 placeholder:text-black `} 
                            />                                
                          </div>
                      </div>
                      <div className="form-inputsec col-span-6">
                          <p className='opacity-50 mb-1'>Last Name</p>
                          <div className="inner-input-section relative w-full">
                            <input type="text" disabled placeholder='Enter Email Address*'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl text-black bg-gray-200 bg-opacity-50 placeholder:text-black `} 
                            />                                
                          </div>
                      </div>
                      <div className="form-inputsec col-span-12">
                          <p className='opacity-50 mb-1'>Email</p>
                          <div className="inner-input-section relative w-full">
                            <input type="email" disabled placeholder='Enter Email Address*'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl text-black bg-gray-200 bg-opacity-50 placeholder:text-black `} 
                            />                                
                          </div>
                      </div>
                      <div className="form-inputsec col-span-6">
                          <p className='opacity-50 mb-1'>Mobile Number</p>
                          <div className="inner-input-section relative w-full">
                            <input type="tel" disabled placeholder='Enter Email Address*'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl text-black bg-gray-200 bg-opacity-50 placeholder:text-black `} 
                            />                                
                          </div>
                      </div>
                      <div className="form-inputsec col-span-6">
                          <p className='opacity-50 mb-1'>Birth Date</p>
                          <div className="inner-input-section relative w-full">
                            <input type="date" disabled placeholder='Enter Email Address*'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl text-black bg-gray-200 bg-opacity-50 placeholder:text-black `} 
                            />                                
                          </div>
                      </div>
                      <div className="form-inputsec col-span-12">
                          <p className='opacity-50 mb-1'>Gender</p>
                          <div className="inner-input-section relative w-full flex items-center gap-12">
                              {gender.map((items , index) => {
                                return (
                                  <div className="single-radio-sec">
                                    <button type="button" className='flex items-center gap-3' onClick={() => setGenderSelect(items.value)} key={index}>
                                      <div className={`w-[18px] h-[18px] border border-Primary rounded-full duration-500 flex items-center justify-center ${items.value === genderSelect ? 'bg-Primary' : 'bg-white'}`}>
                                      </div>
                                      <p>{items.name}</p>
                                    </button>
                                  </div>
                                )
                              })}
                          </div>
                      </div>
                    </div>      
                    <div className="form-inputsec w-full mt-16">
                         <button type="button" className='py-4 px-10 bg-Primary rounded-xl text-white text-center text-xl w-full hover:bg-opacity-25 hover:text-Primary duration-500 font-semibold'>Update Details</button>
                      </div>             
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

MyProfile.propTypes = {};

MyProfile.defaultProps = {};

export default MyProfile;
