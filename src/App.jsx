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

function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact={true} Component={Home} path='/'/>
        <Route exact={true} Component={AboutUs} path='/about-us'/>
        <Route exact={true} Component={Shop} path='/shop'/>
        <Route exact={true} Component={SingleProduct} path='/shop/single-product'/>
        <Route exact={true} Component={Contactus} path='/contact-us'/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
