import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../config/config';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Dashboardsidebar = () => {

    const [activeBar, setActivebar] = useState('')

    useEffect(() => {
        var lastPart = window.location.href.split("/").pop();
        setActivebar(lastPart)
        console.log(lastPart)
    }, []);

    return (
        <>
            <nav className="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="#" className="logo"><img src="dashboardFolder/img/logo.png" alt=" Admin Dashboard" /></a>
                </div>
                <div className="sidebar-menu">
                    <div className="sidebarMenuScroll">
                        <ul>
                            <li className=" ">
                                <a href={`${config.baseUrl}dashboard`} className={activeBar == 'dashboard' ? "menuLink activebar" : "menuLink"}><i className="bi bi-house"></i><span className="menu-text">Dashboard</span></a>
                            </li>
                            <li>
                                <a href={`${config.baseUrl}buy`} className={activeBar == 'buy' ? "menuLink activebar" : "menuLink"}><i className="bi bi-wallet"></i><span className="menu-text">Buy/Sell Crypto</span></a>
                            </li>
                            <li>
                                <a href={`${config.baseUrl}wallet`} className={activeBar == 'wallet' ? "menuLink activebar" : "menuLink"}><i className="bi bi-wallet"></i><span className="menu-text">Wallet</span></a>
                            </li>

                            <li>
                                <a href={`${config.baseUrl}withdraw`} className={activeBar == 'withdraw' ? "menuLink activebar" : "menuLink"}><i className="fa fa-credit-card-alt"></i><span className="menu-text">Withdraw</span></a>
                            </li>
                            <li>
                                <a href={`${config.baseUrl}deposit`} className={activeBar == 'deposit' ? "menuLink activebar" : "menuLink"}><i className="fa fa-credit-card-alt"></i><span className="menu-text">Deposit Fiat</span></a>
                            </li>
                            <li>
                                <a href={`${config.baseUrl}bankdetail`} className={activeBar == 'bankdetail' ? "menuLink activebar" : "menuLink"}><i className="fa fa-database"></i><span className="menu-text">Bank detail</span></a>
                            </li>


                            <li>
                                <a href={`${config.baseUrl}kycdetails`} className={activeBar == 'kycdetails' ? "menuLink activebar" : "menuLink"}><i className="fa fa-align-justify"></i><span className="menu-text">Kyc Details</span></a>
                            </li>

                            <li>
                                <a href={`${config.baseUrl}changepassword`} className={activeBar == 'changepassword' ? "menuLink activebar" : "menuLink"}><i className="fa fa-lock"></i><span className="menu-text">Change Password</span></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Dashboardsidebar