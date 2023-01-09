import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../config/config';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Dashboardsidebar = () => {
    
    return (
        <>
           <nav className="sidebar-wrapper">
                        <div className="sidebar-brand">
                            <a href="#" className="logo"><img src="dashboardFolder/img/logo.png" alt=" Admin Dashboard" /></a>
                        </div>
                        <div className="sidebar-menu">
                            <div className="sidebarMenuScroll">
                                <ul>
                                    <li class=" ">
                                        <a href={`${config.baseUrl}dashboard`} class="menuLink"><i class="bi bi-house"></i><span class="menu-text">Dashboard</span></a>
                                    </li>
                                    <li>
                                        <a href={`${config.baseUrl}buy`} class="menuLink"><i class="bi bi-wallet"></i><span class="menu-text">Buy Crypto</span></a>
                                    </li>
                                    <li>
                                        <a href={`${config.baseUrl}wallet`} class="menuLink"><i class="bi bi-wallet"></i><span class="menu-text">Crypto Wallet</span></a>
                                    </li>
                                
                                    <li>
                                        <a href="#" class="menuLink"><i class="fa fa-credit-card-alt"></i><span class="menu-text">Withdraw</span></a>
                                    </li>
                                    <li>
                                        <a href={`${config.baseUrl}bankdetail`} class="menuLink"><i class="fa fa-database"></i><span class="menu-text">Bank detail</span></a>
                                    </li>
                            
                            
                                    <li>
                                        <a href={`${config.baseUrl}kycdetails`} class="menuLink"><i class="fa fa-align-justify"></i><span class="menu-text">Kyc Details</span></a>
                                    </li>
                                  
                                    <li>
                                        <a href={`${config.baseUrl}changepassword`} class="menuLink"><i class="fa fa-lock"></i><span class="menu-text">Change Password</span></a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
        </>
    )
}
export default Dashboardsidebar