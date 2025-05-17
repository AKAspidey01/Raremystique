import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Shop from './Components/Shop/Shop';
import Contactus from './Components/Contactus/Contactus';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './utils/ScrollToTop';
import Cart from './Components/Cart/Cart';
import { AuthProvider } from './utils/AuthContext';
import Login from './Components/Auth/Login/Login';
import HeaderWrapper from './utils/HeaderWrapper';
import FooterWrapper from './utils/FooterWrapper';
import ProtectedRoutes from './utils/ProtectedRoutes';
import MyProfile from './Components/ProfileScreens/MyProfile/MyProfile';
import MyOrders from './Components/ProfileScreens/MyOrders/MyOrders';
import MyAddresses from './Components/ProfileScreens/MyAddresses/MyAddresses';
import OrderDetails from './Components/ProfileScreens/MyOrders/OrderDetails';
import PrivacyPolicy from './Components/PolicyPages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './Components/PolicyPages/TermsConditions/TermsConditions';
import RefundPolicy from './Components/PolicyPages/RefundPolicy/RefundPolicy';
import ShippingPolicy from './Components/PolicyPages/ShippingPolicy/ShippingPolicy';



const Layout = () => {
  return (
    <div className='App'>
      <AuthProvider>
        <HeaderWrapper/>
        <ScrollToTop/>
        <Routes>
          <Route exact={true} Component={Home} path='/'/>
          <Route exact={true} Component={Login} path='/login'/>
          <Route exact={true} Component={AboutUs} path='/about-us'/>
          <Route exact={true} Component={Shop} path='/shop'/>
          <Route exact={true} Component={SingleProduct} path='/shop/single-product'/>
          <Route exact={true} Component={Contactus} path='/contact-us'/>
          <Route exact={true} Component={TermsConditions} path='/terms-conditions'/>
          <Route exact={true} Component={PrivacyPolicy} path='/privacy-policy'/>
          <Route exact={true} Component={RefundPolicy} path='/refund-policy'/>
          <Route exact={true} Component={ShippingPolicy} path='/shipping-policy'/>

          <Route Component={ProtectedRoutes}>
            <Route exact={true} Component={MyProfile} path='/profile'/>
            <Route exact={true} Component={Cart} path='/cart'/>
            <Route exact={true} Component={MyOrders} path='/orders'/>
            <Route exact={true} Component={OrderDetails} path='/orders/:id'/>
            <Route exact={true} Component={MyAddresses} path='/address'/>
          </Route>
        </Routes>
        <FooterWrapper/>
      </AuthProvider>
    </div>
  )
}


function App() {


  return (
    <Router>
      <Layout/>
      <Toaster 
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#101010',
              color: '#fff',
              fontFamily: 'Poppins',
              paddingRight: 15,
              paddingLeft: 15,
            },
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
      />
    </Router>
  )
}

export default App
