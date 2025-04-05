import React , {useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';
import { NavLink } from 'react-router-dom';
import BrownShirt from '../../assets/images/dummy-prod-front.jpg';
import BlackShirt from '../../assets/images/shirt-image-dummy.jpg';
import toast from 'react-hot-toast';


const Cart = () => {

  const [count , setCount] = useState(1);

  // const handleIncrement = () => {
  //   if (count >= 10) {
  //     toast.success("Quantity limit reached");
  //     setCount(10);
  //   } else {
  //     setCount(count + 1);
  //   }
  // };
  
  // const handleDecrement = () => {
  //   if (count <= 1) {
  //     toast.error("Quantity should be minimum 1");
  //     setCount(1);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  const [cartArray, setCartArray] = useState([
    {
      img: BrownShirt,
      name: 'Brown Graphic Printed Shirt',
      size: 'Large',
      color: 'Brown',
      price: '₹599',
      itemCount: 1
    },
    {
      img: BlackShirt,
      name: 'Black Graphic Printed Shirt',
      size: 'Large',
      color: 'Black',
      price: '₹599',
      itemCount: 1
    },
    {
      img: BrownShirt,
      name: 'Brown Graphic Printed Shirt',
      size: 'Large',
      color: 'Brown',
      price: '₹599',
      itemCount: 1
    }
  ]);
  


  const handleIncrement = (index) => {
    setCartArray(prevCart => 
      prevCart.map((item, i) => {
        if (i === index) {
          if (item.itemCount >= 10) {
            toast.success("Quantity limit reached");
            return { ...item, itemCount: 10 };
          } else {
            return { ...item, itemCount: item.itemCount + 1 };
          }
        }
        return item;
      })
    );
  };
  
  const handleDecrement = (index) => {
    setCartArray(prevCart => 
      prevCart.map((item, i) => {
        if (i === index) {
          if (item.itemCount <= 1) {
            toast.error("Quantity should be minimum 1");
            return { ...item, itemCount: 1 };
          } else {
            return { ...item, itemCount: item.itemCount - 1 };
          }
        }
        return item;
      })
    );
  };




  return (
    <div className="Cart">
      <div className="inner-cart-main-section py-10">
        <div className="top-shop-breadcrumb-section">
          <div className="shop-container">
            <ul className='flex items-center gap-x-2 '>
              <li><NavLink className={`text-Primary `} to={'/'}>Home</NavLink></li>
              <li><i className="ri-arrow-right-s-line"></i></li>
              <li><p className={`text-Primary font-semibold `}>Cart</p></li>
            </ul>
            <h4 className='text-2xl font-DMSans font-semibold mt-2'>YOUR CART</h4>
          </div>
        </div>
        <section className="cart-section-1 py-10">
          <div className="inner-cart-section-1">
            <div className="shop-container">
              <div className="inner-cart-section-1-grid-sec grid grid-cols-12 gap-5">
                <div className="col-span-7 border-black border-opacity-20 rounded-2xl border px-5">
                  {cartArray.map((items , index) => {
                    return (
                    <div className={`inner-complete-cart-list-section flex items-end justify-between relative gap-5  py-5 ${index === cartArray.length - 1 ? '' : 'border-b border-black border-opacity-20'}`} key={index}>
                      <div className="left-side-cart-image-details-sec flex items-center gap-4">
                        <div className="cart-img">
                          <img src={items.img} className='w-32 h-32 rounded-xl' alt="" />
                        </div>
                        <div className="cart-single-details">
                          <h4 className='font-semibold font-DMSans text-xl'>{items.name}</h4>
                          <p className='text-sm'>Size: <span className='font-medium'>{items.size}</span></p>
                          <p className='text-sm'>Color: <span className='font-medium'>{items.color}</span></p>
                          <div className="pricing-cart mt-4">
                            <p className='font-WorkSans font-semibold text-2xl'>{items.price}</p>
                          </div>
                        </div>
                      </div>
                      <div className="right-side-cart-plus-buttons">
                        <div className="qunatity-selector bg-[#F0F0F0] rounded-full flex items-center p-2 gap-3">
                            <button type="button" onClick={() => handleDecrement(index)} className="minus w-6 h-6 flex items-center justify-center">
                              <i className="ri-subtract-line text-Primary text-xl"></i>
                            </button>
                            <div className="count w-6 h-6 flex items-center justify-center">
                              <p className='font-light text-xl'>{items?.itemCount}</p>
                            </div>
                            <button type="button" onClick={() => handleIncrement(index)} className="plus w-6 h-6 flex items-center justify-center">
                              <i className="ri-add-line text-Primary text-xl"></i>
                            </button>
                        </div>
                      </div>
                      <button type="button" className='w-10 h-10 flex items-center justify-center absolute top-5 right-0'><i className="bi bi-trash3-fill text-xl text-red-500"></i></button>
                    </div>
                    )
                  })}
                </div>
                <div className="col-span-4 ">
                  <div className="shop-summary-main-section border-Primary border-opacity-20 rounded-2xl border p-5 sticky top-5">
                    <h2 className='font-semibold text-xl mb-5'>Shop Summary</h2>
                    <div className="order-detais-section flex flex-col gap-3">
                      <div className="single-order-detail flex items-center justify-between">
                        <p className='text-lg font-Manrope font-light text-Primary'>Subtotal</p>
                        <p className='text-lg font-WorkSans font-semibold text-Primary'>₹999</p>
                      </div>
                      <div className="single-order-detail flex items-center justify-between">
                        <p className='text-lg font-Manrope font-light text-Primary'>Discount</p>
                        <p className='text-lg font-WorkSans font-semibold text-red-500'>- ₹400</p>
                      </div>
                      <div className="single-order-detail flex items-center justify-between">
                        <p className='text-lg font-Manrope font-light text-Primary'>Delivery Fee</p>
                        <p className='text-lg font-WorkSans font-semibold text-Primary'>Free</p>
                      </div>
                    </div>
                    <div className="order-total-section py-4 border-t border-Primary border-opacity-20 mt-4">
                      <div className="single-order-detail flex items-center justify-between">
                        <p className='text-xl font-Manrope font-light text-Primary'>Total</p>
                        <p className='text-xl font-WorkSans font-semibold text-Primary'>₹599</p>
                      </div>
                    </div>
                    <div className="proceed-to-checkout">
                      <button type="button" className='text-white font-semibold bg-Primary w-full py-3 px-4 text-center rounded-full'>Go to Checkout</button>
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

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
