import React , {useEffect , useState} from 'react';
import './Contactus.scss';
import { contactFormValidation } from '../../utils/Validation';
import { Formik , Form , Field } from 'formik';
import Sparkle from '../../assets/images/sparkle-logo.svg';

// Icons Export
import WhatsApp from '../../assets/images/social-media/whatsapp.svg';
import Facebbok from '../../assets/images/social-media/facebook.svg';
import Instagram from '../../assets/images/social-media/instagram.svg';
import Telegram from '../../assets/images/social-media/telegram.svg';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser'
import Modal from "react-modal";
import Loader from '../../utils/Loader/Loader';
import { useNavigate } from 'react-router-dom';


const Contactus = () => {

  const navigate = useNavigate()

    const [modalIsOpen, setModalIsOpen] = useState(false);

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
        desc: 'Click to Chat, 24/7 Support',
        platform: 'whatsapp'
      },
      {
        name: 'Telegram',
        icon: Telegram ,
        desc: 'We are available on Telegram',
        platform: 'telegram'
      },
      {
        name: 'Instagram',
        icon: Instagram ,
        desc: 'Follow us (raremystique.in)',
        platform: 'instagram'
      },
      {
        name: 'Facebook',
        icon: Facebbok ,
        desc: 'Follow us (raremystique_in)',
        platform: 'facebook'
      },
    ]

    const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      borderRadius: 18,
      paddingLeft: 40,
    },
  };


    function numbersOnly(e) {
    var key = e.key;
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      e.preventDefault();
    } else {
      // console.log("You pressed a key: " + key);
    }
  }

  
  const handleUserContact = async( values , {resetForm}) => {
    const serviceId = 'service_pmhenqm';
    const templateId = 'template_azfe1di';
    const publicKey = 'oNcgTP-T2uwhaecfS';
  
    const templateParams = {
      name: values.userName,
      email: values.email,
      number: values.mobileNumber,
      subject: values.subject,
      message: values.message,
    };

    setModalIsOpen(true); 

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      if(response?.status == 200){
        setModalIsOpen(false); 
        toast.success("Message Sent Successfully");
        resetForm(); 
        navigate('/')
      }
    })
    .catch((err) => {
      setModalIsOpen(false); 
      toast.error("Error while sending message");
    });
  }



  const shareLink = (platform) => {
      let shareUrl = "";

      switch (platform) {
        case "whatsapp":
          shareUrl = `https://wa.me/919014579785`;
          break;
        case "telegram":                
          shareUrl = `https://t.me/akaspidey`;
          break;
        case "instagram":
          shareUrl = `https://www.instagram.com/raremystique.in/`;
          break;
        case "facebook":
          shareUrl = `https://www.facebook.com/profile.php?id=61576302362508`;
          break;
        default:
          alert("Invalid platform");
          return;
      }

       window.open(shareUrl, "_blank");
    }



  return (
    <div className="Contactus">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Loader Modal"
      >
        <Loader />
      </Modal>
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
                      onSubmit={(values , {resetForm}) => handleUserContact(values , {resetForm})}
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
                            <Field type="tel" name="mobileNumber" placeholder='Enter Email Address*' maxLength={10} onKeyPress={(e) => numbersOnly(e)}
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
      <section className="contact-section-2 bg-gray-200 bg-opacity-70 py-16 ">
        <div className="inner-contact-section-2">
          <div className="container">
              <div className="inner-contact-form-heading-section flex gap-4 items-center">
                <img src={Sparkle} className='w-8 h-8' alt="" />
                <h2 className='text-Primary font-semibold font-DMSans text-4xl leading-normal'> Follow Us & Stay Connected</h2>
              </div> 
              <div className="bottom-social-media-section-grid grid grid-cols-12 mt-8 gap-5">
                  {contactSocials.map((items , index) => {
                    return (
                      <button type='button'  className="single-social-media-block col-span-3 bg-white p-5 rounded-xl text-left" onClick={() => shareLink(items.platform)} key={index}>
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
      <section class="shipping-info bg-white py-16 contact-section-2">
        <div className="container">
          <div className="inner-contact-form-heading-section flex gap-4 items-center">
            <img src={Sparkle} className='w-8 h-8' alt="" />
            <h2 className='text-Primary font-semibold font-DMSans text-4xl leading-normal'> Shipping & Delivery</h2>
          </div> 
          <div className="mt-4">
            <p className='text-lg opacity-80'>We process and ship orders within <strong>2-4 business days</strong> from the date of purchase.</p>
            <p className='text-lg opacity-80 mt-2'>Delivery times may vary depending on your location.</p>
          </div>
        </div>
      </section>
      <div className="map-section">
        <iframe className='w-full h-[450px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61055.24895375366!2d82.20629700673241!3d16.97685910581597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827ddaf59b4f7%3A0x92f8ddb9c89a4803!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1747371795321!5m2!1sen!2sin" width="" height=""  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

Contactus.propTypes = {};

Contactus.defaultProps = {};

export default Contactus;
