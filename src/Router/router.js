import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../componets/home';
import Login from '../componets/login';
import Signup from '../componets/signup';
import Forgetpassword from '../componets/forgetpassword';

import config from '../config/config';
const RouterComponent = () => {
    return (<BrowserRouter >
            <div> 
                <Routes>
                    <Route path={`${config.baseUrl}`} element={<Home/>} />
                    <Route path={`${config.baseUrl}login`} element={<Login/>} />
                    <Route path={`${config.baseUrl}signup`} element={<Signup/>} />
                    <Route path={`${config.baseUrl}forgetpassword`} element={<Forgetpassword/>} />
                </Routes>
            </div>
    </BrowserRouter>
    )
}
export default RouterComponent