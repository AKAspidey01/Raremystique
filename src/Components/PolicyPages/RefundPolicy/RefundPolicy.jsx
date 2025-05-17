import React from 'react';
import PropTypes from 'prop-types';
import './RefundPolicy.scss';
import '../../AboutUs/AboutUs.scss';
import BreadCrumb from '../../../assets/images/about-us-banner.jpg'

const RefundPolicy = () =>  {
  return (
    <div className="AboutUs refund-policy">
      <div className="about-us-main-section">
        <section className="about-bread-crumb-section">
          <div className="inner-about-breadcrumb-section">
            <div className="bread-image-sec relative">
              <img src={BreadCrumb} className='max-h-[400px] object-cover' alt="" />
              <div className="breacrumb-content absolute top-1/2 left-1/2">
                <h2 className='font-semibold text-5xl text-white font-DMSans'>REFUND POLICY</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="privacy-section-1 py-10">
          <div className="inner-privacy-section">
            <div className="container">
              <div className="main-section-singles w-3/4 mx-auto flex flex-col gap-5">
                <div className="single-privacy-sections">
                  <p>At <strong>Raremystique</strong>, we take pride in offering high-quality, print-on-demand apparel. Every order is crafted with care, and our goal is to ensure your satisfaction with every purchase.</p>
                </div>
                <div className="single-privacy-sections">
                  <p>However, due to the custom nature of our products, we follow a strict no refund or return policy, except in specific cases mentioned below.</p>
                </div>
                 <div className="single-privacy-sections">
                  <h4>1. No Returns or Refunds for Non-Damaged Items</h4>
                  <p>Since each item is printed specifically for your order, we do not accept returns or provide refunds for reasons such as:</p>
                  <ul className='text-sm flex flex-col mt-4 gap-y-2'>
                    <li>Change of mind</li>
                    <li>Incorrect size chosen by the customer</li>
                    <li>Minor color variations due to lighting or screen differences</li>
                  </ul>
                </div>
                <div className="single-privacy-sections">
                  <h4>2. Damaged or Defective Items</h4>
                  <p>If you receive a product that is:</p>
                  <ul className='text-sm flex flex-col mt-4 gap-y-2'>
                    <li>Damaged</li>
                    <li>Defective</li>
                    <li>Not as described or printed incorrectly</li>
                  </ul>
                  <p>We will offer a free replacement or allow a return with full support To be eligible:</p>
                  <ul className='text-sm flex flex-col mt-4 gap-y-2'>
                    <li>You must contact us within 24 hours of receiving the order.</li>
                    <li>Email us at <a href="mailto:raremystiquein@gmail.com" className='text-blue-500'>raremystiquein@gmail.com</a> with your Order ID and clear images showing the damage or issue.</li>
                  </ul>
                  <p>Once verified by our team, we’ll arrange a replacement or initiate the return process at no extra cost.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>3. Return Process</h4>
                  <ul className='text-sm flex flex-col mt-4 gap-y-2'>
                    <li>You’ll be guided by our support team to send the item back.</li>
                    <li>The return shipping cost will be borne by Raremystique in valid cases</li>
                    <li>A replacement will be shipped within 3–5 business days after the return is confirmed</li>
                  </ul>
                  <p>All our products are print-on-demand, meaning we start printing your chosen design only after your order is placed. Because of this personalized process, we do not accept returns or offer refunds, unless the item received is damaged or incorrect.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>4. Cancellations</h4>
                  <p>Orders cannot be cancelled or modified once placed, as we begin processing and printing immediately after confirmation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

RefundPolicy.propTypes = {};

RefundPolicy.defaultProps = {};

export default RefundPolicy;
