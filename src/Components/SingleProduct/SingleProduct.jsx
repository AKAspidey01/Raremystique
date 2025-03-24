import React, { useState , useEffect , useRef } from 'react';
import './SingleProduct.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import DummyFront from '../../assets/images/dummy-prod-front.jpg';
import DummyBack from '../../assets/images/dummy-prod-back.jpg';
import DummyFull from '../../assets/images/dummy-prod-full.jpg'
import toast from 'react-hot-toast';

const SingleProduct = () =>{


  const navigate = useNavigate()


  const [selectedImg , setSelectedImg] = useState({
      image: DummyFront,
      name: 'Front'
  })

  const [activeTab , setActiveTab] = useState({
    name: 'productInfo',
    label: 'Product Information'
  })

  const [colorSelect , setColorSelect] = useState({
    color: '#4F4631',
    value: 'Brown'
  },) ;

  const [sizeSelect , setSizeSelect] = useState({
    name: 'Small',
    value: 'S'
  },)

  const [count , setCount] = useState(1);

  const handleIncrement = () => {
    if (count >= 10) {
      toast.success("Quantity limit reached");
      setCount(10);
    } else {
      setCount(count + 1);
    }
  };
  
  const handleDecrement = () => {
    if (count <= 1) {
      toast.error("Quantity should be minimum 1");
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };


  const tabs = [
    {
      name: 'productInfo',
      label: 'Product Information'
    },
    {
      name: 'ratings',
      label: 'Ratings & Reviews'
    },
    {
      name: 'faq',
      label: "FAQ's"
    }
  ]


  const infoTags = [
    {
      head: 'Fit',
      title: 'Regular Fit'
    },
    {
      head: 'Fabric',
      title: '180 GSM 100% Cotton'
    },
    {
      head: 'Neck',
      title: 'Round Neck'
    },
    {
      head: 'Sleeve',
      title: 'Regular Sleeve'
    },
    {
      head: 'Free',
      title: 'Shipping on first order'
    },
    {
      head: 'Easy',
      title: 'Returns'
    },
  ]

  const productImages = [
    {
      image: DummyFront,
      name: 'Front'
    },
    {
      image: DummyBack,
      name: 'Back'
    },
    {
      image: DummyFull,
      name: 'Complete'
    },
  ]



  const colorsList = [
    {
      color: '#4F4631',
      value: 'Brown'
    },
    {
      color: '#314F4A',
      value: 'Pale Green'
    },
    {
      color: '#31344F',
      value: 'Blue'
    }
  ]


  const allSizes = [
    {
      name: 'Small',
      value: 'S'
    },
    {
      name: 'Medium',
      value: 'M'
    },
    {
      name: 'Large',
      value: 'L'
    },
    {
      name: 'X Large',
      value: 'XL'
    },
    {
      name: 'XX Large',
      value: 'XXL'
    },
  ]



  const [openIndex, setOpenIndex] = useState(null); // To track which accordion is open
  const contentRefs = useRef([]); // Array of refs to track each accordion's content height

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close based on index
  };


  const faqs = [
    { title: 'What types of products do you sell?', content: 'We offer a variety of clothing items, including printed and plain t-shirts, hoodies, sweatshirts, caps, and more.' },
    { title: 'How do I choose the right size?', content: 'Please check our size guide available on each product page. If you need further assistance, feel free to contact our support team.' },
    { title: 'What are the payment options?', content: 'We accept major credit/debit cards, UPI, PayPal, and other secure payment methods for a smooth shopping experience.' },
    { title: 'What is your return and exchange policy?', content: 'We offer easy returns and exchanges within 14 days of delivery. Items must be unused and in their original packaging.' },
    { title: 'How long does shipping take?', content: 'Shipping times vary by location. Domestic orders usually arrive within 5-7 business days, while international orders may take 10-15 business days.' }
  ];

  useEffect(() => {
    faqs.forEach((_, index) => {
      if (openIndex === index && contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
      } else if (contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight = '0px';
      }
    });
  }, [openIndex]);


  return  (
    <div className="SingleProduct">
      <div className="inner-main-single-product-section py-10">
          <div className="top-shop-breadcrumb-section">
            <div className="shop-container">
              <ul className='flex items-center gap-x-2 '>
                <li><NavLink className={`text-Primary `} to={'/'}>Home</NavLink></li>
                <li><i className="ri-arrow-right-s-line"></i></li>
                <li><p className={`text-Primary font-semibold `}>Shop</p></li>
              </ul>
              <h4 className='text-2xl font-DMSans font-semibold mt-2'>Product Info </h4>
            </div>
          </div>
          <section className="single-product-section-1 py-10">
            <div className="inner-single-product-section-1">
              <div className="shop-container">
                <div className="grid grid-cols-12 single-product-grid-section-1 gap-10">
                  <div className="left-product-showcase-section col-span-6 h-full">
                    <div className="grid grid-cols-12 product-show-case-grid gap-5 h-full">
                      <div className="thumbnails-section-product col-span-3">
                       <div className="all-thumbs-group-section flex flex-col gap-y-4 justify-between h-full">
                        {productImages.map((items , index) => {
                            return (
                              <button className={`single-product-thumbnail h-44 border-2  rounded-2xl overflow-hidden duration-300 ${selectedImg.name === items?.name ? 'border-Primary shadow-xl' : 'border-transparent'}`} onClick={() => setSelectedImg(items)} key={index}>
                                <img src={items?.image} alt="" className='w-full object-cover'/>
                              </button>
                            )
                        })}
                       </div>
                      </div>
                      <div className="thumbnails-section-product col-span-9">
                          <div className="single-product-thumbnail h-full max-h-[574px] overflow-hidden rounded-2xl">
                            <img src={selectedImg?.image} alt="" className='h-full w-full object-cover duration-500 transition-all'/>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-product-info-section col-span-6">
                    <div className="product-heading-rating-price flex flex-col gap-4 border-b border-Primary border-opacity-20 pb-6">
                      <div className="prod-head">
                        <h2 className='uppercase font-DMSans font-bold text-5xl'>One Life Graphic T-shirt</h2>
                      </div>
                      <div className="rating-sec flex items-center gap-4">
                        <div className="stars-flex flex items-center gap-2">
                          <i className="text-[#FFC633] text-2xl ri-star-fill"></i>
                          <i className="text-[#FFC633] text-2xl ri-star-fill"></i>
                          <i className="text-[#FFC633] text-2xl ri-star-fill"></i>
                          <i className="text-[#FFC633] text-2xl ri-star-fill"></i>
                          <i className="text-[#FFC633] text-2xl ri-star-half-line"></i>
                        </div>
                        <p className='text-xl font-light text-Primary opacity-70'>4.5</p>
                      </div>
                      <div className="pricing flex items-center gap-5">
                        <div className="actual-offer-price">
                          <h3 className='text-4xl font-WorkSans font-semibold'>₹ 599 <span className='opacity-30 line-through decoration-4 '>₹ 999</span></h3>
                        </div>
                        <div className="offer-dicount">
                          <p className=' text-lg bg-red-100 text-red-500 rounded-full px-5 py-[5px]'>-40%</p>
                        </div>
                      </div>
                      <div className="product-decription">
                        <p className='text-xl font-light opacity-40'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                      </div>
                    </div>
                    <div className="product-colors-section border-b border-Primary border-opacity-20 pt-4 pb-6">
                      <div className="single-filter-heading-sec mb-4 flex items-center gap-4 justify-between">
                          <h4 className='text-lg font-medium font-DMSans'>Available Colors</h4>
                      </div>
                      <div className="all-colors-section flex flex-wrap gap-4">
                        {colorsList.map((items , index) => {
                          return (
                            <button type="button" className={`w-10 h-10 rounded-full overflow-hidden border-2 border-opacity-20 border-Primary`} onClick={() => setColorSelect(items)} style={{background: items?.color}} key={index}>
                                <div className={`inner-icon w-full h-full flex items-center justify-center bg-Primary bg-opacity-20 duration-500 ${colorSelect?.value === items?.value ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                  <i class="ri-check-line text-xl text-white"></i>
                                </div>
                            </button>    
                          )
                        })}
                      </div>
                    </div>
                    <div className="single-filtering-blocks-shop border-b border-Primary border-opacity-20 pt-4 pb-6">
                      <div className="single-filter-heading-sec mb-4 flex items-center gap-4 justify-between">
                          <h4 className='text-lg font-medium font-DMSans'>Sizes</h4>
                      </div>
                      <div className="all-colors-section flex flex-wrap gap-4">
                        {allSizes.map((items , index) => {
                          return (
                            <button type="button" className={`px-5 py-2 rounded-full overflow-hidden duration-300 text-sm ${sizeSelect?.value === items?.value ? 'bg-Primary text-white' : 'bg-[#E9E9E9] text-Primary'}`} onClick={() => setSizeSelect(items)} key={index}>
                                {items?.name}
                            </button>    
                          )
                        })}
                      </div>
                    </div>
                    <div className="quantity-selector add-cart-button-section grid grid-cols-12 gap-5 pt-6">
                      <div className="col-span-3">
                        <div className="qunatity-selector bg-[#F0F0F0] rounded-full flex items-center p-2 gap-3">
                            <button type="button" onClick={handleDecrement} className="minus w-10 h-10 flex items-center justify-center">
                              <i className="ri-subtract-line text-Primary text-2xl"></i>
                            </button>
                            <div className="count w-10 h-10 flex items-center justify-center">
                              <p className='font-light text-2xl'>{count}</p>
                            </div>
                            <button type="button" onClick={handleIncrement} className="plus w-10 h-10 flex items-center justify-center">
                              <i className="ri-add-line text-Primary text-2xl"></i>
                            </button>
                        </div>
                      </div>
                      <div className="right-add-cart-button col-span-9">
                        <button type="button" onClick={() => navigate('/cart')} className='h-full px-5 py-2 rounded-full w-full bg-Primary text-white text-xl'>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="single-product-section-2 py-10">
              <div className="inner-single-product-section-2">
                <div className="shop-container">
                  <div className="product-detail-tabs-section border-b border-black border-opacity-10">
                    <div className="top-tab-buttons grid grid-cols-3 relative">
                      {tabs.map((items , index) => {
                        return (
                          <div className="single-tab-button" key={index}>
                            <button type="button" className={`w-full text-center py-4 text-xl duration-300 ${activeTab.name === items.name ? 'opacity-100' : 'opacity-50'}`} onClick={() => setActiveTab(items)}>{items.label}</button>
                          </div>
                        )
                      })}
                        <div className={`bottom-tab-active-section absolute bottom-0 h-[2px] w-[33%] bg-black duration-300 ${activeTab.name === 'productInfo' ? 'left-0' : activeTab.name === 'ratings' ? 'left-[33%]' : 'left-[66%]'  }`}></div>
                    </div>
                  </div>
                  <div className="tabs-inner-content-section-full-width pt-8">
                    {activeTab.name == 'productInfo' ?
                      <div className="single-tabs-desc-section product-info-section">
                        <h2 className='text-2xl font-semibold font-DMSans'>Product Information</h2>
                        <div className="inner-prod-info-section flex flex-col gap-8">
                          <div className="product-info-tags grid grid-cols-6 gap-4 mt-4">
                            {infoTags.map((items , index) => {
                              return (
                              <div className="single-product-info-tag bg-gray-200 bg-opacity-70 rounded-xl py-3 px-4" key={index}>
                                <h4 className='text-xl font-light'>{items.head}</h4>
                                <p className='font-semibold'>{items.title}</p>
                              </div>
                              )
                            })}
                          </div>
                          <div className="desctription-para">
                            <h4 className='text-lg mb-1 opacity-50 font-semibold'>About</h4>
                            <p className='text-sm'> Machine wash. Wash in cold water, use mild detergent Dry in shade Inside Out Do not iron directly or scrub on print Do not bleach, do not tumble dry. Dry on flat surface as hanging may cause measurement variations  Machine wash. Wash in cold water, use mild detergent Dry in shade Inside Out Do not iron directly or scrub on print Do not bleach, do not tumble dry. Dry on flat surface as hanging may cause measurement variations</p>
                          </div>
                          <div className="desctription-para">
                            <h4 className='text-lg mb-1 opacity-50 font-semibold'>Wash Care</h4>
                            <p className='text-sm'> Machine wash. Wash in cold water, use mild detergent Dry in shade Inside Out Do not iron directly or scrub on print Do not bleach, do not tumble dry. Dry on flat surface as hanging may cause measurement variations  Machine wash. Wash in cold water, use mild detergent Dry in shade Inside Out Do not iron directly or scrub on print Do not bleach, do not tumble dry. Dry on flat surface as hanging may cause measurement variations</p>
                          </div>
                          <div className="desctription-para">
                            <h4 className='text-lg mb-1 opacity-50 font-semibold'>Material</h4>
                            <p className='text-sm'> 100% Combed Cotton (Bio-Washed and Pre-Shrunk)</p>
                          </div>
                        </div>
                      </div> :
                      activeTab.name == 'ratings' ?
                      <div className="single-tabs-desc-section rating-tab-des">
                          <h2 className='text-2xl font-semibold font-DMSans mb-4'>Reviews</h2>
                          <div className="inner-single-tabs-rating grid grid-cols-12 gap-5">
                            {infoTags.map((items , index) => {
                              return (
                                <div className="single-rating-profile col-span-4 border-black border-opacity-20 border rounded-2xl py-4 px-5" key={index} >
                                  <div className="right-text-rating-profile mb-2">
                                    <div className="five-stars-section flex items-center gap-x-1">
                                      <i className='ri-star-fill text-lg text-StarGold'></i>
                                      <i className='ri-star-fill text-lg text-StarGold'></i>
                                      <i className='ri-star-fill text-lg text-StarGold'></i>
                                      <i className='ri-star-fill text-lg text-StarGold'></i>
                                      <i className='ri-star-fill text-lg text-StarGold'></i>
                                    </div>
                                    <h4 className='font-medium text-Black text-xl'>SM. Srinivas Kiran</h4>
                                  </div>
                                  <p className="text-Black font-light opacity-60">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                                  <p className="text-sm font-medium mt-2 opacity-50">Posted on : 25 Mar 2025</p>
                                </div>
                              )
                            })}
                          </div>
                      </div> : 
                      <div className="single-tabs-desc-section faqs-tabs-desc w-10/12 mx-auto">
                        <div className="inner-faq-section">
                          {faqs.map((faq, index) => (
                            <div className="about-accordion" key={index}>
                              <div className="about-accordion-header flex justify-between items-center" onClick={() => toggleAccordion(index)}>
                                <h2><span className='opacity-45'>0{index + 1} . </span>{faq.title}</h2>
                                <div className={`right-button h-6 w-6 relative  ${openIndex === index ? 'activer-plus' : ''}`}>
                                  <div className={`plus-icon-1 w-full h-[2px] bg-black absolute top-1/2 left-1/2 `}></div>
                                  <div className={`plus-icon-2 w-[2px] h-full bg-black absolute left-1/2 top-1/2 ${openIndex === index ? 'activer-plus' : ''}`}></div>
                                </div>
                              </div>
                              <div ref={(el) => (contentRefs.current[index] = el)} className="about-accordion-content" style={{ maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px' }}>
                                <p>{faq.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      }
                  </div>
                </div>
              </div>
          </section>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {};

SingleProduct.defaultProps = {};

export default SingleProduct;
