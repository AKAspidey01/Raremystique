import React from 'react';
import './Home.scss';
import Sparkle from '../../assets/images/sparkle-logo.svg';
import ShirtImage from '../../assets/images/shirt-image-dummy.jpg';
import ShirtImage2 from '../../assets/images/shirt-image-dummy-2.jpg';
import BannerImage from '../../assets/images/offer-banner-right.png';
// import Flicking , { ViewportSlot }  from '@egjs/react-flicking';
// import { Perspective , AutoPlay  } from "@egjs/flicking-plugins";
// import "@egjs/react-flicking/dist/flicking.css";
// import "@egjs/react-flicking/dist/flicking-inline.css";
// import "@egjs/flicking-plugins/dist/pagination.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  EffectCoverflow , Autoplay  } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';


const Home = () => {


  // const plugins = [new Perspective({ rotate: 0.5 }) , new AutoPlay ({ duration: 2000, direction: "NEXT", stopOnHover: true })];
  // const autoplayPlug = [new AutoPlay ({ duration: 2000, direction: "NEXT", stopOnHover: true })];

  const navigate = useNavigate()

  const bannerCards = [
    {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
     {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
  ]

  const bestSellerCards = [
    {
      image: ShirtImage,
      title: 'Classic Printed Blue T-Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Black T-Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Blue T-Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Black T-Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage,
      title: 'Classic Printed Blue T-Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    },
    {
      image: ShirtImage2,
      title: 'Classic Printed Black T-Shirt',
      rating: '4.1',
      actualPrice: '₹ 999',
      currentPrice: '₹ 699',
    }
  ]


    const radius = 800;
    const rotationStepDegrees = 15; // The rotation increment for each card
    const rotationStepRadians = rotationStepDegrees * Math.PI / 180;
    const itemCount = bannerCards.length;




  return (
    <div className="Home">
      <div className="inner-home-main-section">
        <section className="home-section-1 pt-20 pb-10">
          <div className="inner-home-section-1">
            <div className="container ">
              <div className="banner-section-1">
                <div className="banner-headingsec">
                  <div className="top-sparks-label flex items-center gap-5 justify-center mb-4">
                    <img src={Sparkle} className='w-6 h-6' alt="" />
                    <p className='text-white font-light text-xl font-Poppins'>New Collection is here</p>
                  </div>
                  <h1 className='text-white text-5xl text-center font-medium leading-normal'>
                    Rare by Design, Mystique by Nature <br /> <span>Fashion Redefined</span>
                  </h1>
                  <div className="browse-all-button mt-10">
                    <button type="button" onClick={() => navigate('/shop')} className='h-12 bg-white rounded-full flex items-center gap-4 pl-5 pr-1 mx-auto'>
                      <p className='text-Primary font-Poppins font-medium text-lg'>Discover More</p> 
                      <div className="right-icon-discover w-10 h-10 rounded-full flex items-center justify-center bg-Primary">
                        <i class="bi bi-arrow-right text-xl text-white"></i>
                      </div> 
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-banner-slider-sec mt-20">
              <Swiper 
                className="mySwiper"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                speed={600}
                loop={true}
                initialSlide={2}
                spaceBetween={30}
                preventClicks={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}  
                breakpoints={{
                    2000: {
                        slidesPerView: 4,
                    },
                    1700 : {
                        slidesPerView: 4
                    },
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    674: {
                        slidesPerView: 2
                    },
                    375: {
                        slidesPerView: 1,
                    },
                    75: {
                        slidesPerView: 1
                    }
                }}
                modules={[ Autoplay , Navigation]}
                >
                {bannerCards.map((items , index) => {
                    return (
                      <SwiperSlide key={index}>
                          <button className="single-fashion-card relative overflow-hidden z-10 group text-left" onClick={() => navigate('/shop/single-product')}>
                            <div className="inner-single-fashion-card overflow-hidden">
                                <div className="top-cloth-image-section relative ">
                                  <img src={items.image} className='max-h-[450px] rounded-2xl object-cover flex' alt="" />
                                  <div className="colors-section-button flex items-center gap-[10px] absolute bottom-4 bg-white rounded-full p-2 left-4 opacity-0 group-hover:opacity-100 duration-500">
                                    <button type="button" className='w-4 h-4 rounded-full bg-red-500 border border-gray-500'></button>
                                    <button type="button" className='w-4 h-4 rounded-full bg-violet-500 border border-gray-500'></button>
                                    <button type="button" className='w-4 h-4 rounded-full bg-white border border-gray-300'></button>
                                    <button type="button" className='w-4 h-4 rounded-full bg-orange-500 border border-gray-500'></button>
                                  </div>
                                </div>
                                <div className="bottom-details-section py-3">
                                  <div className="left-pricing-details flex items-center justify-between gap-4">
                                    <p className='text-lg font-semibold text-white mb-1'>{items.title}</p>
                                    <h4 className='font-Manrope text-xl font-semibold text-green-500'>{items.currentPrice} <span className='line-through text-sm text-Primary opacity-50 hidden'>{items.actualPrice}</span></h4>
                                  </div>
                                </div>
                            </div>
                            <div className="right-rating-sec flex items-center shadow-xl gap-x-2 bg-white rounded-full absolute top-4 left-4 px-2">
                                <div className="star">
                                  <i className="ri-star-fill text-lg text-[#FFA600]"></i>
                                </div>
                                <div className="rating-text">
                                  <p className='text-Primary font-medium'>{items.rating}</p>
                                </div>
                            </div>
                            <div className="wishlist-sec mb-4 absolute top-4 -right-4 opacity-0 group-hover:right-4  group-hover:opacity-100 duration-500">
                              <button type="button" className='w-10 h-10 relative z-10 bg-white shadow-xl rounded-full flex items-center justify-center'>
                                <i className="ri-heart-line text-2xl flex"></i>
                              </button>
                            </div>
                            <div className="cart-sec absolute top-[70px] -right-4 group-hover:right-4 opacity-0 delay-200  group-hover:opacity-100 duration-500">
                              <button type="button" className='w-10 h-10 relative z-10 bg-white shadow-xl rounded-full flex items-center justify-center'>
                                <i class="ri-shopping-cart-line text-2xl"></i>
                              </button>
                            </div>
                          </button>
                      </SwiperSlide>
                    )
                })}
              </Swiper>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
              <div style={{ position: 'relative', width: `${2 * radius}px`, height: `${2 * radius}px` }}>
                {bannerCards.map((items , index) => {
                    const angle = (index / itemCount) * 2 * Math.PI; // For circular positioning
                    const rotationAngle = index * rotationStepRadians; // For incremental card rotation
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const rotationOffset = angle * 0.05; // or 0.1 for even subtler rotation
                    const cardStyle = {
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationOffset}rad)`,
                    };
                  return (
                    <div className="single-fashion-card relative overflow-hidden z-10 min-w-[300px] group" style={cardStyle} key={index}>
                          <div className="inner-single-fashion-card overflow-hidden">
                              <div className="top-cloth-image-section relative ">
                                <img src={items.image} className='max-h-[450px] rounded-2xl object-cover flex' alt="" />
                                <div className="colors-section-button flex items-center gap-[10px] absolute bottom-4 bg-white rounded-full p-2 left-4 opacity-0 group-hover:opacity-100 duration-500">
                                  <button type="button" className='w-4 h-4 rounded-full bg-red-500 border border-gray-500'></button>
                                  <button type="button" className='w-4 h-4 rounded-full bg-violet-500 border border-gray-500'></button>
                                  <button type="button" className='w-4 h-4 rounded-full bg-white border border-gray-300'></button>
                                  <button type="button" className='w-4 h-4 rounded-full bg-orange-500 border border-gray-500'></button>
                                </div>
                              </div>
                              <div className="bottom-details-section py-3">
                                <div className="left-pricing-details flex items-center justify-between gap-4">
                                  <p className='text-lg font-semibold text-white mb-1'>{items.title}</p>
                                  <h4 className='font-Manrope text-xl font-semibold text-green-500'>{items.currentPrice} <span className='line-through text-sm text-Primary opacity-50 hidden'>{items.actualPrice}</span></h4>
                                </div>
                              </div>
                          </div>
                          <div className="right-rating-sec flex items-center shadow-xl gap-x-2 bg-white rounded-full absolute top-4 left-4 px-2">
                              <div className="star">
                                <i className="ri-star-fill text-lg text-[#FFA600]"></i>
                              </div>
                              <div className="rating-text">
                                <p className='text-Primary font-medium'>{items.rating}</p>
                              </div>
                          </div>
                          <div className="wishlist-sec mb-4 absolute top-4 -right-4 opacity-0 group-hover:right-4  group-hover:opacity-100 duration-500">
                            <button type="button" className='w-10 h-10 relative z-10 bg-white shadow-xl rounded-full flex items-center justify-center'>
                              <i className="ri-heart-line text-2xl flex"></i>
                            </button>
                          </div>
                          <div className="cart-sec absolute top-[70px] -right-4 group-hover:right-4 opacity-0 delay-200  group-hover:opacity-100 duration-500">
                            <button type="button" className='w-10 h-10 relative z-10 bg-white shadow-xl rounded-full flex items-center justify-center'>
                              <i class="ri-shopping-cart-line text-2xl"></i>
                            </button>
                          </div>
                    </div>
                  )
                })}
              </div>
             </div> */}
            </div>
          </div>
        </section>
        <section className="home-section-2 bg-white py-16">
          <div className="inner-home-section-2">
            <div className="container">
              <div className="home-secion-2-inner-main">
                <div className="home-section-2-header-section">
                  <h2 className='text-5xl text-Primary text-center font-medium mb-2'>Our Best Sellers</h2>
                  <p className='text-lg text-Primary text-center opacity-50'>Don't miss out our top selling styles and outfits</p>
                </div>
                <div className="bottom-bestseller-products mt-10">
                  <div className="grid grid-cols-3 gap-8 our-bestsellers-card-grid">
                    {bestSellerCards.map((items , index) => {
                        return (
                          <button type='button' className="single-fashion-card text-left relative z-10 group" onClick={() => navigate('/shop/single-product')} key={index}>
                            <div className="inner-single-fashion-card overflow-hidden">
                                <div className="top-cloth-image-section relative overflow-hidden rounded-2xl">
                                  <img src={items.image} className='max-h-[450px] duration-300 group-hover:scale-110 object-cover flex' alt="" />
                                  <div className="colors-section-button flex items-center gap-[10px] absolute bottom-4 bg-white rounded-full p-2 left-4 opacity-0 group-hover:opacity-100 duration-500">
                                    <button type="button" className='w-4 h-4 rounded-full bg-red-500 border border-gray-500'></button>
                                    <button type="button" className='w-4 h-4 rounded-full bg-violet-500 border border-gray-500'></button>
                                    <button type="button" className='w-4 h-4 rounded-full bg-white border border-gray-300'></button>
                                    <button type="button" className='w-4 h-4 rounded-full bg-orange-500 border border-gray-500'></button>
                                  </div>
                                </div>
                                <div className="bottom-details-section py-3">
                                  <div className="left-pricing-details flex flex-col">
                                    <p className='text-lg font-semibold text-Primary mb-1'>{items.title}</p>
                                    <h4 className='font-Manrope text-xl font-semibold text-green-500'>{items.currentPrice} <span className='line-through text-sm text-Primary opacity-50'>{items.actualPrice}</span></h4>
                                  </div>
                                </div>
                            </div>
                            <div className="right-rating-sec flex items-center shadow-xl gap-x-2 bg-white rounded-full absolute top-4 left-4 px-2">
                                <div className="star">
                                  <i className="ri-star-fill text-lg text-[#FFA600]"></i>
                                </div>
                                <div className="rating-text">
                                  <p className='text-Primary font-medium'>{items.rating}</p>
                                </div>
                            </div>
                            <div className="wishlist-sec similar-cart-buttons mb-4 absolute top-4 -right-4 opacity-0 group-hover:right-4  group-hover:opacity-100 duration-500">
                              <button type="button" className='w-10 h-10 relative z-10 bg-white shadow-xl rounded-full flex items-center justify-center'>
                                <i className="ri-heart-line text-2xl flex"></i>
                              </button>
                            </div>
                            <div className="cart-sec similar-cart-buttons absolute top-[70px] -right-4 group-hover:right-4 opacity-0 delay-200  group-hover:opacity-100 duration-500">
                              <button type="button" className='w-10 h-10 relative z-10 bg-white shadow-xl rounded-full flex items-center justify-center'>
                                <i class="ri-shopping-cart-line text-2xl"></i>
                              </button>
                            </div>
                          </button>
                        )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-section-3 bg-white pt-20 pb-16">
          <div className="inner-home-section-3">
            <div className="container">
              <div className="inner-banner-section-home-3 bg-Primary relative  rounded-[30px] px-10 py-12">
                  <div className="banner-left-part-home-3">
                    <div className="banner-tagline">
                      <div className="top-sparks-label flex items-center gap-3 mb-4">
                        <img src={Sparkle} className='w-6 h-6' alt="" />
                        <p className='text-white font-light text-xl font-Poppins'>SUMMER FLASH SALE</p>
                      </div>
                      <h2 className='text-5xl leading-[1.3] font-DMSans font-medium text-white'>Grab upto <span>40%</span> off <br /> on Selected Products</h2>
                    </div>
                    <button type="button" onClick={() => navigate('/shop')} className='h-12 bg-white rounded-full flex items-center gap-4 pl-5 pr-5 mt-6'>
                        <p className='text-Primary font-Poppins font-medium'>Shop Now</p> 
                        <i class="bi bi-arrow-right text-xl text-Primary"></i>
                    </button>
                  </div>
                  <div className="banner-right-image absolute right-4 bottom-0">
                    <img src={BannerImage} className='max-w-[500px]' alt="" />
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
