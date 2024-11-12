import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from './components/products/Products/Products';
import Categories from './components/products/Categories/Categories';
import Shoppingcart from './components/products/Shopping/Shoppingcart';
import Staff from './components/products/Staff/Staff';
import Uploader from './components/products/Uploader/Uploader';
import Payment from './components/products/Payment/Payment';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import { useAuth } from './context/AuthContext';
import RegistrationForm from './components/Register/RegistrationForm';
import About from './components/About/AboutUs';
import Profile from './components/Profile/Profile'
import Product from './components/ProductId/Product';
import Contact from './components/Contact/Contact';
import Loader from './components/Loader'

function App() {
    const { isAuthenticated, status } = useAuth();

    if(status === 'loading' || status === 'idle' || status === 'pending') return <Loader/>

    return (
        <Routes>
            <Route path='/login' element={!isAuthenticated ? <Login/> : <Navigate to={'/'}/>}/>
            <Route path='/register' element={!isAuthenticated ? <RegistrationForm/> : <Navigate to={'/'}/>}/>
            <Route element={isAuthenticated ? <Main/> : <Navigate to={'/login'}/>}>
                <Route path="/" element={<Categories />} />
                <Route path="/:categoryId/products" element={<Products />} />
                <Route path='/:categoryId/products/:productId' element={<Product/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/cart" element={<Shoppingcart/>} />
                <Route path="/staff" element={<Staff/>}/>
                <Route path="/uploader" element ={<Uploader/>}/>
                <Route path="/payment" element={<Payment/>}/>
            </Route>
        </Routes>
    );
}
export default App;
