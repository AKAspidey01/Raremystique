import React from 'react';
import PropTypes from 'prop-types';
import './ShippingPolicy.scss';
import '../../AboutUs/AboutUs.scss';
import BreadCrumb from '../../../assets/images/about-us-banner.jpg'
import { NavLink } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <div className="AboutUs shipping-policy">
      <div className="about-us-main-section">
        <section className="about-bread-crumb-section">
          <div className="inner-about-breadcrumb-section">
            <div className="bread-image-sec relative">
              <img src={BreadCrumb} className='max-h-[400px] object-cover' alt="" />
              <div className="breacrumb-content absolute top-1/2 left-1/2">
                <h2 className='font-semibold text-5xl text-white font-DMSans'>SHIPPING POLICY</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="privacy-section-1 py-10">
          <div className="inner-privacy-section">
            <div className="container">
              <div className="main-section-singles w-3/4 mx-auto flex flex-col gap-5">
                <div className="single-privacy-sections">
                  <p>At <strong>Raremystique</strong>, we are committed to delivering your orders in a timely and efficient manner. Below is an overview of our shipping process and timelines.</p>
                </div>
                  <div className="single-privacy-sections">
                  <h4>1. Order Processing</h4>
                  <ul className='text-sm flex flex-col mt-4 gap-y-2'>
                    <li>All orders are processed within 1–2 business days (excluding weekends and holidays) after receiving your order confirmation.</li>
                    <li>You will receive a notification once your order has been shipped.</li>
                  </ul>
                </div>
                <div className="single-privacy-sections">
                  <h4>2. Shipping Time</h4>
                  <ul className='text-sm flex flex-col mt-4 gap-y-2'>
                    <li>Orders are typically delivered within 2–7 business days, depending on your location.</li>
                    <li>Delivery times may vary based on courier availability, destination, and unforeseen delays (e.g., weather, festivals, etc.).</li>
                  </ul>
                </div>
                <div className="single-privacy-sections">
                  <h4>3. Shipping Charges</h4>
                  <ul className='text-sm flex flex-col mt-4 gap-y-2'>
                    <li>We offer free shipping on all prepaid orders above ₹[your free shipping threshold, e.g., ₹499].</li>
                    <li>A flat shipping fee of ₹[your fee, e.g., ₹50] may apply to orders below that amount.</li>
                  </ul>
                </div>
                <div className="single-privacy-sections">
                  <h4>4. Delivery Partners</h4>
                  <p>We work with reliable courier partners to ensure safe and prompt delivery to your doorstep.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>5. Order Tracking</h4>
                  <p>Once your order is shipped, you will receive an email/SMS with tracking details so you can monitor its journey , or you can track with in website.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>6. Delays or Issues</h4>
                  <p>if there is a delay with your order or any shipping-related issue, please reach out to us via our <NavLink to={'/contact-us'} className={'text-blue-500'}>Contact page</NavLink> or email us at <a className='text-blue-500' href="mailto:raremystiquein@gmail.com">raremystiquein@gmail.com</a>. We're here to help!</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>7. Shipping Locations</h4>
                  <p>We currently ship orders only across India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

ShippingPolicy.propTypes = {};

ShippingPolicy.defaultProps = {};

export default ShippingPolicy;
