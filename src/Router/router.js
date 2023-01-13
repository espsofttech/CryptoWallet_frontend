import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import config from '../config/config';
import Home from '../componets/home';
import Login from '../componets/login';
import Signup from '../componets/signup';
import Forgetpassword from '../componets/forgetpassword';
import Dashboard from '../componets/dashboard';
import Buy from '../componets/buy';
import Wallet from '../componets/wallet';
import Bankdetail from '../componets/bankdetail';
import Kycdetail from '../componets/kycdetails';
import Changepassword from '../componets/changepassword';
import Withdraw from '../componets/withdraw';
import Profile from '../componets/profile';
import Aboutus from '../componets/aboutus';
import Privacypolicy from '../componets/privacypolicy';
import Faq from '../componets/faq';

const RouterComponent = () => {
    return (<BrowserRouter >
            <div> 
                <Routes>
                    <Route path={`${config.baseUrl}`} element={<Home/>} />
                    <Route path={`${config.baseUrl}login`} element={<Login/>} />
                    <Route path={`${config.baseUrl}signup`} element={<Signup/>} />
                    <Route path={`${config.baseUrl}forgetpassword`} element={<Forgetpassword/>} />
                    <Route path={`${config.baseUrl}dashboard`} element={<Dashboard/>} />
                    <Route path={`${config.baseUrl}buy`} element={<Buy/>} />
                    <Route path={`${config.baseUrl}wallet`} element={<Wallet/>} />
                    <Route path={`${config.baseUrl}bankdetail`} element={<Bankdetail/>} />
                    <Route path={`${config.baseUrl}kycdetails`} element={<Kycdetail/>} />
                    <Route path={`${config.baseUrl}changepassword`} element={<Changepassword/>} />
                    <Route path={`${config.baseUrl}withdraw`} element={<Withdraw/>} />
                    <Route path={`${config.baseUrl}profile`} element={<Profile/>} />
                    <Route path={`${config.baseUrl}aboutus`} element={<Aboutus/>} />
                    <Route path={`${config.baseUrl}faq`} element={<Faq/>} />
                    <Route path={`${config.baseUrl}privacypolicy`} element={<Privacypolicy/>} />

            </Routes>
        </div>
    </BrowserRouter>
    )
}
export default RouterComponent