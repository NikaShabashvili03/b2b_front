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


function App() {
    const isAuth = localStorage.getItem('password') === "1" ? true : false

    return (
        <Router>
            <Routes>
                <Route path='/login' element={!isAuth ? <Login/> : <Navigate to={'/'}/>}/>
                <Route path='/register' element={!isAuth ? <div>Register</div> : <Navigate to={'/'}/>}/>
                <Route element={isAuth ? <Main/> : <Navigate to={'/login'}/>}>
                    <Route path="/" element={<Categories />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/Shoppingcart" element={<Shoppingcart/>} />
                    <Route path="/Staff" element={<Staff/>}/>
                    <Route path="/Uploader" element ={<Uploader/>}/>
                    <Route path="/Payment" element={<Payment/>}/>
                </Route>
            </Routes>
        </Router>
    );
}
export default App; 
