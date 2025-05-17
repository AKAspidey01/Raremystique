import React from 'react';
import './TermsConditions.scss';
import '../../AboutUs/AboutUs.scss';
import BreadCrumb from '../../../assets/images/about-us-banner.jpg'

const TermsConditions = () => {
  return (
    <div className="AboutUs terms-conditions">
      <div className="about-us-main-section">
        <section className="about-bread-crumb-section">
          <div className="inner-about-breadcrumb-section">
            <div className="bread-image-sec relative">
              <img src={BreadCrumb} className='max-h-[400px] object-cover' alt="" />
              <div className="breacrumb-content absolute top-1/2 left-1/2">
                <h2 className='font-semibold text-5xl text-white font-DMSans'>TERMS AND CONDITIONS</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="privacy-section-1 py-10">
          <div className="inner-privacy-section">
            <div className="container">
              <div className="main-section-singles w-3/4 mx-auto flex flex-col gap-6">
                <div className="single-privacy-sections">
                  <p>Welcome to <strong>Raremystique</strong>, your go-to destination for custom-printed fashion wear. By accessing and using our website or placing an order, you agree to the following Terms and Conditions. Please read them carefully before making any purchases.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>1. Online Payments Only</h4>
                  <p>Raremystique is an online-only store. We do not accept Cash on Delivery (COD). All purchases must be completed via secure online payment gateways integrated on our website. We accept payments through UPI, credit/debit cards, net banking, and digital wallets.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>2. Order Confirmation</h4>
                  <p>Once your payment is successfully processed, you will receive an order confirmation via email or SMS. Please review your order details carefully. Once confirmed, orders cannot be cancelled, modified, or refunded, as each item is printed specifically for you.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>3. Customized and Print-to-Order Products</h4>
                  <p>All our products are print-on-demand, meaning we start printing your chosen design only after your order is placed. Because of this personalized process, we do not accept returns or offer refunds, unless the item received is damaged or incorrect.</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>4. Shipping & Delivery</h4>
                  <p>Orders are usually processed within 2–4 business days and delivered within 5–9 business days, depending on your location. We use reliable third-party courier services to ensure safe and timely delivery. Raremystique is not responsible for delays caused by the courier company or circumstances beyond our control (such as natural disasters, strikes, or lockdowns).</p>
                </div>
                <div className="single-privacy-sections">
                  <h4>5. Product Quality & Disclaimer</h4>
                  <p>We are committed to providing high-quality printed apparel using premium fabrics and materials. Please note that minor color differences may occur due to lighting, screen calibration, or printing variations. These variations are normal and do not qualify for refunds or replacements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

TermsConditions.propTypes = {};

TermsConditions.defaultProps = {};

export default TermsConditions;
