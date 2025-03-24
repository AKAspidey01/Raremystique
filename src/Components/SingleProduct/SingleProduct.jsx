import React, { useState } from 'react';
import './SingleProduct.scss';
import { NavLink } from 'react-router-dom';
import DummyFront from '../../assets/images/dummy-prod-front.jpg';
import DummyBack from '../../assets/images/dummy-prod-back.jpg';
import DummyFull from '../../assets/images/dummy-prod-full.jpg'

const SingleProduct = () =>{

  const [selectedImg , setSelectedImg] = useState({
      image: DummyFront,
      name: 'Front'
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
                  <div className="left-product-showcase-section col-span-6">
                    <div className="grid grid-cols-12 product-show-case-grid gap-5">
                      <div className="thumbnails-section-product col-span-3">
                       <div className="all-thumbs-group-section flex flex-col gap-y-4">
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
                          <div className="single-product-thumbnail h-full max-h-[560px] overflow-hidden rounded-2xl">
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
                          <h3 className='text-4xl font-Manrope font-bold'>₹ 599 <span className='opacity-30 line-through decoration-4 '>₹ 999</span></h3>
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
                            <button type="button" onClick={() => setCount(count - 1)} className="minus w-10 h-10 flex items-center justify-center">
                              <i className="ri-subtract-line text-Primary text-2xl"></i>
                            </button>
                            <div className="count w-10 h-10 flex items-center justify-center">
                              <p className='font-light text-2xl'>{count}</p>
                            </div>
                            <button type="button" onClick={() => setCount(count + 1)} className="plus w-10 h-10 flex items-center justify-center">
                              <i className="ri-add-line text-Primary text-2xl"></i>
                            </button>
                        </div>
                      </div>
                      <div className="right-add-cart-button col-span-9">
                        <button type="button" className='h-full px-5 py-2 rounded-full w-full bg-Primary text-white text-xl'>Add to cart</button>
                      </div>
                    </div>
                  </div>
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
