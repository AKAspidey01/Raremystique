import React from 'react';
import './Contactus.scss';
import { contactFormValidation } from '../../utils/Validation';
import { Formik , Form , Field } from 'formik';
import Sparkle from '../../assets/images/sparkle-logo.svg';

// Icons Export
import WhatsApp from '../../assets/images/social-media/whatsapp.svg';
import Facebbok from '../../assets/images/social-media/facebook.svg';
import Instagram from '../../assets/images/social-media/instagram.svg';
import Telegram from '../../assets/images/social-media/telegram.svg';

const Contactus = () => {

  const contactValues = {
    userName: '',
    email: '',
    mobileNumber: '',
    subject: '',
    message: ''
  }


  const contactSocials = [
    {
      name: 'Whatsapp',
      icon: WhatsApp ,
      desc: 'Click to Chat, 24/7 Support'
    },
    {
      name: 'Telegram',
      icon: Telegram ,
      desc: 'We are available on Telegram'
    },
    {
      name: 'Instagram',
      icon: Instagram ,
      desc: 'Follow us (raremystique_in)'
    },
    {
      name: 'Facebook',
      icon: Facebbok ,
      desc: 'Follow us (raremystique_in)'
    },
  ]

  return (
    <div className="Contactus">
      <section className="contact-section-1 py-16">
        <div className="inner-contact-section-1">
          <div className="container">
            <div className="contact-form-section">
              <div className="inner-contact-form-heading-section flex gap-4 items-center">
                <img src={Sparkle} className='w-8 h-8' alt="" />
                <h2 className='text-Primary font-semibold font-DMSans text-4xl leading-normal'>We'd Love to hear form you , Get in Touch</h2>
              </div>
              <div className="bottom-sec-1-contact-form mt-8">
                <div className="contact-form-grid">
                  <Formik
                      validationSchema={contactFormValidation}
                      initialValues={contactValues}
                      onSubmit={(values) => handleUserEmailLogin(values)}
                  >
                    {({  errors, touched , handleSubmit}) => (
                    <Form>
                      <div className="inner-login-form-sec grid grid-cols-12 gap-x-8 gap-y-10">
                        <div className="form-inputsec relative w-full col-span-6">
                            <p className='opacity-50 mb-1'>Your Name</p>
                            <Field type="text" name="userName" placeholder='Enter your full name'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl ${errors.userName && touched.userName ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-black bg-gray-200 bg-opacity-50 placeholder:text-black'}`} 
                            />                                
                        </div>
                        <div className="form-inputsec relative w-full col-span-6">
                            <p className='opacity-50 mb-1'>Email</p>
                            <Field type="email" name="email" placeholder='Enter Email Address'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl ${errors.email && touched.email ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-black bg-gray-200 bg-opacity-50 placeholder:text-black'}`} 
                            />                                
                        </div>
                        <div className="form-inputsec relative w-full col-span-6">
                            <p className='opacity-50 mb-1'>Mobile Number</p>
                            <Field type="tel" name="mobileNumber" placeholder='Enter Email Address*'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl ${errors.mobileNumber && touched.mobileNumber ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-black bg-gray-200 bg-opacity-50 placeholder:text-black'}`} 
                            />                                
                        </div>
                        <div className="form-inputsec relative w-full col-span-6">
                            <p className='opacity-50 mb-1'>Subject or Regarding</p>
                            <Field type="email" name="subject" placeholder='Enter subject'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 px-6 text-lg rounded-xl ${errors.subject && touched.subject ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-black bg-gray-200 bg-opacity-50 placeholder:text-black'}`} 
                            />                                
                        </div>
                        <div className="form-inputsec relative w-full col-span-12">
                            <p className='opacity-50 mb-1'>Message</p>
                            <Field as="textarea" name="message" placeholder='Enter your message'
                                className={`outline-none border focus:border-black focus:bg-white duration-300 py-4 w-full resize-none px-6 h-[180px] text-lg rounded-xl ${errors.message && touched.message ? 'border-red-500 border-opacity-100 bg-red-500 bg-opacity-10 placeholder:text-red-500 text-red-500' : 'text-black bg-gray-200 bg-opacity-50 placeholder:text-black'}`} 
                            />                                
                        </div>
                        <div className="login-submit-button col-span-6">
                          <button type='button' onClick={handleSubmit} className='w-full bg-Primary py-4 rounded-xl text-white font-bold text-xl'>Send Message</button>
                        </div>    
                      </div>                   
                    </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section-2 bg-gray-200 bg-opacity-70 py-16">
        <div className="inner-contact-section-2">
          <div className="container">
              <div className="inner-contact-form-heading-section flex gap-4 items-center">
                <img src={Sparkle} className='w-8 h-8' alt="" />
                <h2 className='text-Primary font-semibold font-DMSans text-4xl leading-normal'> Follow Us & Stay Connected</h2>
              </div> 
              <div className="bottom-social-media-section-grid grid grid-cols-12 mt-8 gap-5">
                  {contactSocials.map((items , index) => {
                    return (
                      <button type='button'  className="single-social-media-block col-span-3 bg-white p-5 rounded-xl text-left" key={index}>
                        <div className="inner-single-social flex items-center gap-5">
                          <div className="left-icon-social">
                            <img src={items.icon} className='w-[50px] h-[50px]' alt="" />
                          </div>
                          <div className="right-social-info">
                            <h6 className='text-xl font-medium'>{items.name}</h6>
                            <p className='text-sm'>{items.desc}</p>
                          </div>
                        </div>
                      </button>
                    )
                  })}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Contactus.propTypes = {};

Contactus.defaultProps = {};

export default Contactus;
