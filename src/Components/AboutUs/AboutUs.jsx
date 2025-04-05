import React from 'react';
import './AboutUs.scss';
import BreadCrumb from '../../assets/images/about-us-banner.jpg'
import Sparkle from '../../assets/images/sparkle-logo.svg';
import BannerImage from '../../assets/images/offer-banner-right.png';
import AboutSecImg from '../../assets/images/about-second-img.png';


// Icons Export
import WhatsApp from '../../assets/images/social-media/whatsapp.svg';
import Facebbok from '../../assets/images/social-media/facebook.svg';
import Instagram from '../../assets/images/social-media/instagram.svg';
import Telegram from '../../assets/images/social-media/telegram.svg';

import Person1 from '../../assets/images/our-team/person-1.png';
import Person2 from '../../assets/images/our-team/person-2.png';
import Person3 from '../../assets/images/our-team/person-3.png';
import Person4 from '../../assets/images/our-team/person-4.png';




const AboutUs = () => {



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


    const team = [
      {
        image: Person1,
        name: 'Charan Magapu',
        Role: 'Founder'
      },
      {
        image: Person2,
        name: 'Sriraj',
        Role: 'Founder'
      },
      {
        image: Person3,
        name: 'Sai Ganesh',
        Role: 'Founder'
      },
      {
        image: Person4,
        name: 'Chris Williams',
        Role: 'Co-Founder'
      }
    ]

  return (
    <div className="AboutUs">
      <div className="about-us-main-section">
        <section className="about-bread-crumb-section">
          <div className="inner-about-breadcrumb-section">
            <div className="bread-image-sec relative">
              <img src={BreadCrumb} className='max-h-[400px] object-cover' alt="" />
              <div className="breacrumb-content absolute top-1/2 left-1/2">
                <h2 className='font-semibold text-5xl text-white font-DMSans'>ABOUT US</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section-1p py-16 bg-gray-200 bg-opacity-60">
          <div className="inner-about-section-1">
            <div className="container">
                <div className="about-section-1-inner-main">
                  <div className="top-band-about-1 w-fit mb-6">
                    <h4 className='text-Primary bg-Primary bg-opacity-10 rounded-full px-5 py-2 font-semibold text-sm'>OUR COMPANY</h4>
                  </div>
                  <div className="about-1-grid-section grid grid-cols-12 gap-x-5 gap-y-8">
                    <div className="single-about-1-grid-column about-sec-1-head col-span-6">
                        <h2 className='text-3xl font-semibold font-DMSans text-Primary'>Crafted With Passion. <br /> Worn With Pride.</h2>
                    </div>
                    <div className="single-about-1-grid-column about-sec-1-title col-span-6">
                        <p className='italic text-Primary font-Manrope text-base'>At RareMystique, we’re a small team turning everyday t-shirts into premium, made-to-order pieces with high-GSM quality and standout prints — because you deserve better than ordinary.</p>
                    </div>
                    <div className="single-about-1-grid-column bottom-3-blocks-sec col-span-4 bg-white p-5 rounded-xl">
                        <h4 className='text-xl font-semibold font-DMSans mb-2'>Premium Fabric Quality</h4>
                        <p className=' text-Primary font-Manrope text-base'>We believe comfort is just as important as style. That’s why we use high-GSM cotton fabrics that feel better, last longer, and wear well — every single time.</p>
                    </div>
                    <div className="single-about-1-grid-column bottom-3-blocks-sec col-span-4 bg-white p-5 rounded-xl">
                        <h4 className='text-xl font-semibold font-DMSans mb-2'> Vibrant, Lasting Prints</h4>
                        <p className=' text-Primary font-Manrope text-base'>Whether it’s bold graphics or subtle designs, our advanced printing options ensure every tee looks sharp and stays that way, even after multiple washes.</p>
                    </div>
                    <div className="single-about-1-grid-column bottom-3-blocks-sec col-span-4 bg-white p-5 rounded-xl">
                        <h4 className='text-xl font-semibold font-DMSans mb-2'> Built From the Ground Up</h4>
                        <p className=' text-Primary font-Manrope text-base'>RareMystique is more than a brand — it’s a dream built by four creators starting small and dreaming big. Every order you place helps us grow stronger, and we’re just getting started.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="about-section-2 bg-white pt-20 pb-16">
          <div className="inner-about-section-2">
            <div className="container">
              <div className="inner-banner-section-about-2 grid grid-cols-12 gap-x-[30px]">
                  <div className="banner-left-part-about-2 col-span-8">
                    <div className="banner-tagline bg-gray-200 bg-opacity-60  h-full rounded-[30px] p-10">
                      <div className="top-sparks-label flex items-center gap-3 mb-4">
                        <img src={Sparkle} className='w-6 h-6' alt="" />
                        <p className='text-Primary font-light text-xl font-Poppins'>Our Goal</p>
                      </div>
                      <h2 className='text-5xl leading-[1.2] mb-2 font-DMSans font-medium text-Primary'>Let's know about <br />our main Goal</h2>
                      <p className='text-xl text-Primary'>At <span className='font-semibold'> RareMystique </span>, our goal is simple — to deliver high-quality, custom-printed t-shirts that speak your style. We’re here to redefine everyday wear with better fabric, better prints, and a better experience. As a passionate startup, every step we take is focused on growing with purpose and offering value that lasts.</p>
                    </div>
                  </div>
                  <div className="banner-right-image col-span-4 rounded-[30px] h-full relative overflow-hidden">
                    <img src={AboutSecImg} className='max-w-[500px] absolute w-full h-full object-cover top-0 left-0' alt="" />
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
        <section className="about-section-4 py-16">
          <div className="inner-about-section-4">
            <div className="container">
                <div className="inner-contact-form-heading-section flex gap-4 items-center">
                  <img src={Sparkle} className='w-8 h-8' alt="" />
                  <h2 className='text-Primary font-semibold font-DMSans text-4xl leading-normal'> The Faces Behind the Fabric</h2>
                </div>
                <div className="bottom-grid-section-about-sec-4 mt-10">
                    <div className="inner-about-sec-3-grid grid grid-cols-4 gap-x-4">
                      {team.map((items , index) => {
                        return (
                        <div className="single-faces-card-about-3" key={index}>
                            <div className="image-section-team relative rounded-3xl overflow-hidden">
                              <img src={items.image} alt="" />
                              <div className="bottom-details-section-person absolute bottom-4 shadow-2xl overflow-hidden rounded-2xl w-11/12 left-1/2">
                                <div className="inner-bottom-details-section bg-white rounded-2xl  p-4">
                                    <h4 className='text-2xl font-semibold'>{items.name}</h4>
                                    <p className='text-Primary opacity-70'>{items.Role}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                        )
                      })}
                    </div>
                </div> 
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;
