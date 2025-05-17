import React from 'react';
import './PrivacyPolicy.scss';
import '../../AboutUs/AboutUs.scss';
import BreadCrumb from '../../../assets/images/about-us-banner.jpg'

const PrivacyPolicy = () => {
  return (
    <div className="AboutUs privacy-policy">
      <div className="about-us-main-section">
        <section className="about-bread-crumb-section">
          <div className="inner-about-breadcrumb-section">
            <div className="bread-image-sec relative">
              <img src={BreadCrumb} className='max-h-[400px] object-cover' alt="" />
              <div className="breacrumb-content absolute top-1/2 left-1/2">
                <h2 className='font-semibold text-5xl text-white font-DMSans'>PRIVACY POLICY</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="privacy-section-1 py-10">
          <div className="inner-privacy-section">
            <div className="container">
              <div className="main-section-singles w-3/4 mx-auto flex flex-col gap-5">
                <div className="single-privacy-sections">
                  <p>At <strong>Raremystique</strong>, your privacy is extremely important to us. We are fully committed to protecting the personal information you share with us and ensuring complete transparency in how we collect, use, and safeguard your data.</p>
                </div>
                <div className="single-privacy-sections">
                  <p>When you make a purchase on our website, we collect essential information such as your name, email address, shipping address, phone number, and payment details. This data is used solely for processing your orders, delivering products efficiently, and providing necessary customer support.</p>
                </div>
                <div className="single-privacy-sections">
                  <p>We do not sell, rent, or share your personal information with any third parties for marketing purposes. Your data is only shared with our trusted partners who are involved in fulfilling your order — such as payment gateways, logistics providers, and order tracking services — and only to the extent required to complete the transaction or service.</p>
                </div>
                <div className="single-privacy-sections">
                  <p>To ensure your information is always secure, our website is equipped with SSL (Secure Socket Layer) encryption and other standard security technologies. All payment-related data is handled by secure and PCI-compliant payment gateways like Razorpay, ensuring that your sensitive information is protected at all times.</p>
                </div>
                <div className="single-privacy-sections">
                  <p>We may use your contact details to send you order updates, shipping notifications, and occasional promotional offers — but only with your consent. You can opt out of promotional communication at any time.</p>
                </div>
                <div className="single-privacy-sections">
                  <p>By using our website, you agree to this Privacy Policy. If we make any changes to our policy, they will be updated on this page, and your continued use of the site will be deemed as acceptance of those changes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

PrivacyPolicy.propTypes = {};

PrivacyPolicy.defaultProps = {};

export default PrivacyPolicy;
