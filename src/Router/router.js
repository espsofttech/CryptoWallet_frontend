import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../componets/home';
import config from '../config/config';
const RouterComponent = () => {
    return (<BrowserRouter >
            <div> 
                <Routes>
                    <Route path={`${config.baseUrl}`} element={<Home/>} />
                </Routes>
            </div>
    </BrowserRouter>
    )
}
export default RouterComponent