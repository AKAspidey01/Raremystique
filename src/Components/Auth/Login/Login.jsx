import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import LoginBanner from '../../../assets/images/login-side-image.jpg';
import BlackLogo from '../../../assets/images/logo-black.svg'
import { userLoginValidation } from '../../../utils/Validation';
import { Formik , Form , Field } from 'formik';
import Sparkle from '../../../assets/images/sparkle-logo.svg';




const Login = () => {
  

  const [passwordHandle , setPasswordHandle] = useState(false);

  const  userLoginValues = {
    email: '',
    password: ''
  }


  const handleUserEmailLogin = async (data) => {
    console.log(data)
  }


  return (
    <div className="Login main-login-section h-screen p-5">
      <div className="inner-login-form relative h-full">
        <div className="shop-container h-full flex items-center ">
            <div className="loging-form-section w-full">
              <div className="inner-login-form-section">
                <div className="top-logo-section absolute w-full bg-white p-6 top-0 left-0">
                  <img src={BlackLogo} className='w-96' alt="" />
                </div>
                <div className="grid grid-cols-2 gap-[200px]">
                  <div className="login-form-section">
                    <div className="inner-login-head mb-6">
                      <div className="inner-login-head-h flex items-center gap-2 mb-1">
                        <img src={Sparkle} className='w-6 h-6' alt="" />
                        <h2 className='font-Poppins text-3xl font-semibold'>Login</h2>
                      </div>
                      <p>Log in to shop your favorite styles and track your orders effortlessly.</p>
                    </div>
                    <div className="inner-login-form">
                      <Formik
                          validationSchema={userLoginValidation}
                          initialValues={userLoginValues}
                          onSubmit={(values) => handleUserEmailLogin(values)}
                      >
                        {({  errors, touched , handleSubmit}) => (
                        <Form>
                          <div className="inner-login-form-sec flex flex-col gap-6">
                            <div className="form-inputsec relative w-full">
                                <Field type="email" name="email" placeholder='Enter Email Address*'
                                    className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 pl-14 pr-5 text-lg rounded-xl ${errors.email && touched.email ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-black bg-gray-200 bg-opacity-50 placeholder:text-black'}`} 
                                />                                
                                <div className="email-input-icon flex items-center justify-center absolute left-7 top-1/2 w-[50px] ">
                                  <i class="bi bi-envelope text-2xl"></i>
                                </div>
                            </div>
                            <div className="password-forgot-password-section">
                              <div className="form-inputsec relative w-full">
                                  <Field type={passwordHandle ? 'text' : 'password'} name="password" placeholder='Enter Password*'
                                      className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 pl-14 pr-5 text-lg  rounded-xl ${errors.password && touched.password ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-black bg-gray-200 bg-opacity-50 placeholder:text-black'}`} 
                                  />                                
                                  <div className="email-input-icon w-[50px] flex items-center justify-center absolute left-7 top-1/2">
                                    <i class="bi bi-shield-lock text-2xl"></i>
                                  </div>
                                  <button type="button" className="email-input-icon password-login-icon owa absolute right-4 top-1/2" onClick={() => setPasswordHandle(!passwordHandle)}>
                                    <i className={`${passwordHandle ? 'ri-eye-off-line' : 'ri-eye-line'} text-xl text-LightText`}></i>
                                  </button>
                              </div>
                              <div className="forgot-password-button mt-3">
                                <button type="button" className='text-sm text-[#5398FF] font-semibold'>Forgot Passowrd ?</button>
                              </div>
                            </div>
                            <div className="login-submit-button"><button type="button" onClick={handleSubmit} className='w-full bg-Primary py-4 rounded-xl text-white font-bold text-xl'>Login</button></div>    
                          </div>                   
                        </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="right-side-banner-login absolute right-0 top-0 w-1/2 h-full">
          <img src={LoginBanner} className='w-full h-full object-cover rounded-3xl' alt="" />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
