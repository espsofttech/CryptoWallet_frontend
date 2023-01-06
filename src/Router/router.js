import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import VerifyAccount from '../components/login'
import Signup from '../components/signup';
import Forgetpassword from '../components/forgetpassword';
import Dashboard from '../components/dashboard';
import Resetpassword from '../components/resetpassword';


import config from '../config/config';
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
                <Route path={`${config.baseUrl}resetpassword/:token`} element={<Resetpassword />} />

            </Routes>
        </div>
    </BrowserRouter>
    )
}
export default RouterComponent