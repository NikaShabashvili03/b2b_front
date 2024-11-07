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
import About from './components/About/About';
import Profile from './components/Profile/Profile'
import ProductId from './components/ProductId/ProductId';
import Contact from './components/Contact/Contact';

function App() {
    const { isAuthentifcated } = useAuth();

    return (
        <Routes>
            <Route path='/login' element={!isAuthentifcated ? <Login/> : <Navigate to={'/'}/>}/>
            <Route path='/register' element={!isAuthentifcated ? <RegistrationForm/> : <Navigate to={'/'}/>}/>
            <Route element={!isAuthentifcated ? <Main/> : <Navigate to={'/login'}/>}>
                <Route path="/" element={<Categories />} />
                <Route path="/Products" element={<Products />} />
                <Route path='/Products/:id' element={<Product/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Shoppingcart" element={<Shoppingcart/>} />
                <Route path="/Staff" element={<Staff/>}/>
                <Route path="/Uploader" element ={<Uploader/>}/>
                <Route path="/Payment" element={<Payment/>}/>
            </Route>
        </Routes>
    );
}
export default App;
