import React, { useEffect, useState } from 'react';
import './Shop.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import ShirtImage from '../../assets/images/shirt-image-dummy.jpg';
import ShirtImage2 from '../../assets/images/shirt-image-dummy-2.jpg';
import Slider from '@mui/material/Slider';
import { config } from '../../env-services';
import axios from 'axios';
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";


const Shop = () => {

  const navigate = useNavigate()

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sliderValue, setSliderValue] = useState([10, 20]);
  const [amountRange, setAmountRange] = useState(["₹600", "₹700"]);
  const [colorSelect , setColorSelect] = useState('') ;
  const [sizeSelect , setSizeSelect] = useState('');
  const [allProducts , setAllProducts] = useState([])

  const [mobileFilter , setMobileFilter] = useState(false)

  const convertToAmount = (value) =>  {
    return `₹${600 + (value - 10) * 10}`
  };

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    setAmountRange([convertToAmount(newValue[0]), convertToAmount(newValue[1])]);
  };


  useEffect(() => {
    // getAllProducts()
  }, [])



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

    const filterBlks1 = [
      {
        label: 'Shirts',
        value: 'shirts'
      },
      {
        label: 'T-Shirts',
        value: 't-shirts'
      },
      {
        label: 'Pants',
        value: 'pants'
      },
      {
        label: 'Trosers',
        value: 'trousers'
      },
      {
        label: 'Jeans',
        value: 'jeans'
      },
      {
        label: 'Hoodies',
        value: 'hoodies'
      },
    ]
    
    const colorsList = [
      {
        color: '#00C12B',
        value: 'Green'
      },
      {
        color: '#F50606',
        value: 'Red'
      },
      {
        color: '#F5DD06',
        value: 'Yellow'
      },
      {
        color: '#F57906',
        value: 'Orange'
      },
      {
        color: '#063AF5',
        value: 'Blue'
      },
      {
        color: '#063AF5',
        value: 'Violet'
      },
      {
        color: '#F506A4',
        value: 'Pink'
      },
      {
        color: '#FFF',
        value: 'white'
      },
      {
        color: '#000',
        value: 'Black'
      },
      {
        color: '#06CAF5',
        value: 'Sky Blue'
      },
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

    const toggleFilter = (value) => {
      setSelectedFilters((prevFilters) =>
        prevFilters.includes(value)
          ? prevFilters.filter((item) => item !== value) // Remove if already selected
          : [...prevFilters, value] // Add if not selected
      );
    };


    // const getAllProducts = async() => {
    //   try {
    //     await axios.get(`${config.api}products/` , {
    //       headers: {
    //           "content-type": "application/json"
    //       }
    //   })
    //   .then(response => {
    //     console.log(response)
    //     setAllProducts(response?.data?.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    //   }catch (error) {
    //     console.log(error)
    //   }
    // }

  return (
    <div className="Shop">
      <div className="main-shop-section py-10">
        <div className="inner-main-shop-section">
          <div className="top-shop-breadcrumb-section">
            <div className="shop-container">
              <div className="top-shop-breacrumb-section-outer flex items-center gap-8 flex-wrap justify-between">
                <div className="bread-crumb-section-navigation">
                  <ul className='flex items-center gap-x-2 '>
                    <li><NavLink className={`text-Primary `} to={'/'}>Home</NavLink></li>
                    <li><i className="ri-arrow-right-s-line"></i></li>
                    <li><p className={`text-Primary font-semibold `}>Shop</p></li>
                  </ul>
                  <h4 className='text-2xl font-DMSans font-semibold mt-2'>Shop wide range collections - <span className='font-normal opacity-50'>1406</span> </h4>
                </div>
                <div className="right-filter-button-mobile">
                  <button type="button" onClick={() => setMobileFilter(true)} className='text-xl bg-gray-200 bg-opacity-70 px-6 py-2 rounded-full'>Filter <i className="bi bi-sliders2-vertical ml-2 opacity-70 text-Primary"></i></button>
                </div>
              </div>
            </div>           
          </div>
          <section className="shop-section-1 py-10">
            <div className="inner-shop-section-1">
              <div className="shop-container">
                <div className="grid grid-cols-12 gap-8 main-shopping-filter-grid-section">
                  <div className={`left-filter-section col-span-3 ${mobileFilter ? 'active-mobile' : ''} overflow-y-auto h-full overflow-hidden`}>
                    <div className="shop-filter-main-section border border-Primary border-opacity-20 rounded-2xl p-5 sticky top-5">
                        <div className="top-filter-heading-shop flex items-center gap-4 justify-between border-b border-Primary border-opacity-20 pb-4 mb-4">
                          <h2 className='font-DMSans text-xl font-semibold text-Primary'>Fliter</h2>
                          <i className="bi bi-sliders2-vertical opacity-70 text-Primary text-xl filter-desktop-icon"></i>
                          <div className="filter-closer">
                            <button type="button" className='w-8 h-8' onClick={() => setMobileFilter(false)}><i className="bi bi-x-lg opacity-70 text-Primary text-xl"></i></button>
                          </div>
                        </div>
                        <div className="all-filtering-blocks-section flex flex-col gap-8">
                          <div className="single-filtering-blocks-shop border-b border-Primary border-opacity-20 pb-8">
                            <div className="inner-filtering-blocks filterig-block-1 flex flex-col gap-5">
                              {filterBlks1.map((items , index) => {
                                return (
                                <button type="button" className='flex items-center gap-3' onClick={() => toggleFilter(items.value)} key={index}>
                                  <div className={`w-[18px] h-[18px] border border-Primary rounded-full duration-500 flex items-center justify-center ${selectedFilters.includes(items.value)  ? 'bg-Primary' : 'bg-white'}`}>
                                  {/* <div className={`w-2 h-2 rounded-full bg-white text-white text-sm ${selectedFilters.includes(items.value)  ? 'visible opacity-100' : 'invisible opacity-0'}`}></div> */}
                                  </div>
                                  <p>{items.label}</p>
                                </button>
                                )
                              })}
                            </div>
                          </div>
                          <div className="single-filtering-blocks-shop border-b border-Primary border-opacity-20 pb-8">
                            <div className="single-filter-heading-sec mb-4 flex items-center gap-4 justify-between">
                                <h4 className='text-lg font-medium font-DMSans'>Pricing</h4>
                                <div className="right-side-pricing-range-selected flex items-center gap-3">
                                    {amountRange.map((items , index) => {
                                      return (
                                        <p className='text-sm font-light' key={index}> {items}{index === 0 ? <i className="bi bi-dash"></i> : ""}</p>
                                      )
                                    })}
                                </div>
                            </div>
                            <div className="filter-slider">
                              <Slider
                                aria-label="Amount"
                                value={sliderValue}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                                color='#000'
                                valueLabelFormat={convertToAmount}
                              />
                            </div>
                          </div>
                          <div className="single-filtering-blocks-shop border-b border-Primary border-opacity-20 pb-8">
                            <div className="single-filter-heading-sec mb-4 flex items-center gap-4 justify-between">
                                <h4 className='text-lg font-medium font-DMSans'>Colors</h4>
                            </div>
                            <div className="all-colors-section flex flex-wrap gap-4">
                              {colorsList.map((items , index) => {
                                return (
                                  <button type="button" className={`w-10 h-10 rounded-full overflow-hidden border-2 border-opacity-20 border-Primary`} onClick={() => setColorSelect(items?.value)} style={{background: items?.color}} key={index}>
                                      <div className={`inner-icon w-full h-full flex items-center justify-center bg-Primary bg-opacity-20 duration-500 ${colorSelect === items?.value ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                        <i class="ri-check-line text-xl text-white"></i>
                                      </div>
                                  </button>    
                                )
                              })}
                            </div>
                          </div>
                          <div className="single-filtering-blocks-shop ">
                            <div className="single-filter-heading-sec mb-4 flex items-center gap-4 justify-between">
                                <h4 className='text-lg font-medium font-DMSans'>Sizes</h4>
                            </div>
                            <div className="all-colors-section flex flex-wrap gap-4">
                              {allSizes.map((items , index) => {
                                return (
                                  <button type="button" className={`px-5 py-2 rounded-full overflow-hidden duration-300 text-sm ${sizeSelect === items?.value ? 'bg-Primary text-white' : 'bg-[#E9E9E9] text-Primary'}`} onClick={() => setSizeSelect(items?.value)} key={index}>
                                      {items?.name}
                                  </button>    
                                )
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="apply-filter-button mt-8">
                          <button type="button" className='w-full bg-Primary px-5 py-2 rounded-full text-white text-lg font-medium'>Apply Filters</button>
                        </div>
                    </div>
                  </div>
                  <div className="right-shop-section col-span-9">
                    <div className="grid-cols-3 shop-cards-grid-section-right grid gap-5">
                      {bestSellerCards.map((items , index) => {
                          return (
                            <button type='button' onClick={() => navigate('/shop/single-product')} className="single-fashion-card text-left relative z-10 group" key={index}>
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
                  <button onClick={() => setMobileFilter(false)} type='button' className={`filter-overlay-section-shop fixed top-0 w-full z-[99] duration-300 h-full  ${mobileFilter ? 'right-0 opacity-100' : '-right-full opacity-0'}`}>

                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="grid grid-cols-12">
              <div className="col-span-6">
                <ImageGallery thumbnailPosition='left' showFullscreenButton={false} showPlayButton={false} items={images} />
              </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

Shop.propTypes = {};

Shop.defaultProps = {};

export default Shop;
