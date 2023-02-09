import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import config from '../config/config';
import Home from '../components/home';
import Login from '../components/login';
import Signup from '../components/signup';
import Forgetpassword from '../components/forgetpassword';
import Dashboard from '../components/dashboard';
import Buy from '../components/buy';
import Wallet from '../components/wallet';
import Bankdetail from '../components/bankdetail';
import Kycdetail from '../components/kycdetails';
import Changepassword from '../components/changepassword';
import Withdraw from '../components/withdraw';
import Profile from '../components/profile';
import Resetpassword from '../components/resetpassword';
import VerifyAccount from '../components/login'
import Aboutus from '../components/aboutus';
import Privacypolicy from '../components/privacypolicy';
import Faq from '../components/faq';
import Contactus from '../components/contactus';
import LivePrice from '../components/liveprice';
import Deposit from '../components/deposit';
import Twofactor from '../components/twofactor';
import Activity from '../components/activity';
import DepositCrypto from '../components/depositCrypto'
const RouterComponent = () => {
    return (<BrowserRouter >
        <div>
            <Routes>
                <Route path={`${config.baseUrl}`} element={<Home />} />
                <Route path={`${config.baseUrl}login`} element={<Login />} />
                <Route path={`${config.baseUrl}verifyAccount/:token`} element={<VerifyAccount />} />
                <Route path={`${config.baseUrl}signup`} element={<Signup />} />
                <Route path={`${config.baseUrl}forgetpassword`} element={<Forgetpassword />} />
                <Route path={`${config.baseUrl}dashboard`} element={<Dashboard />} />
                <Route path={`${config.baseUrl}buy`} element={<Buy />} />
                <Route path={`${config.baseUrl}wallet`} element={<Wallet />} />
                <Route path={`${config.baseUrl}bankdetail`} element={<Bankdetail />} />
                <Route path={`${config.baseUrl}kycdetails`} element={<Kycdetail />} />
                <Route path={`${config.baseUrl}changepassword`} element={<Changepassword />} />
                <Route path={`${config.baseUrl}withdraw`} element={<Withdraw />} />
                <Route path={`${config.baseUrl}profile`} element={<Profile />} />
                <Route path={`${config.baseUrl}resetpassword/:token`} element={<Resetpassword />} />
                <Route path={`${config.baseUrl}aboutus`} element={<Aboutus />} />
                <Route path={`${config.baseUrl}faq`} element={<Faq />} />
                <Route path={`${config.baseUrl}privacypolicy`} element={<Privacypolicy />} />
                <Route path={`${config.baseUrl}contactus`} element={<Contactus />} />
                <Route path={`${config.baseUrl}LivePrice`} element={<LivePrice />} />
                <Route path={`${config.baseUrl}deposit`} element={<Deposit />} />
                <Route path={`${config.baseUrl}Twofactor`} element={<Twofactor />} />
                <Route path={`${config.baseUrl}Activity`} element={<Activity />} />
                <Route path={`${config.baseUrl}DepositCrypto`} element={<DepositCrypto />} />




            </Routes>
        </div>
    </BrowserRouter>
    )
}
export default RouterComponent