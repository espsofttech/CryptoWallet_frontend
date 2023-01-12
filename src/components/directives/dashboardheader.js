import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import $ from 'jquery';
import { Link, useNavigate, useParams } from 'react-router-dom';
import config from '../../config/config';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../../src/redux/actionTypes'
const Dashboardheader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    console.log(USER_LOGIN_DETAILS)
    
    useEffect(() => {
        // Update the document title using the browser API
        $('body').addClass("lighttheme");
        if(USER_LOGIN_DETAILS.template == ''){
            window.location.href = config.baseUrl
        }
        Cookies.set('loginSuccessCryptoWallet', JSON.stringify(USER_LOGIN_DETAILS.token));
    },[]);

    const toggleClass = () => {
        $('.page-wrapper').toggleClass("toggled");
        // setActive(!isActive);
      };

    const logoutClick = () => {
        dispatch({
            type: ACTIONTYPES.USER_FORM, payload: {
                template: '',
            }
        })
        setTimeout(() => {
            window.location.href = config.baseUrl;
        }, 500);
    }

    return (
        <>
            <div className="page-header">
                <div className="toggle-sidebar" onClick={toggleClass} id="toggle-sidebar"><i className="bi bi-list" /></div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><i className="bi bi-house" /><a href="#">Home</a></li>
                    <li className="breadcrumb-item breadcrumb-active" aria-current="page">Dashboard</li>
                </ol>

                <div className="header-actions-container">
                    {/* <a class="btn style1 mb-3" href="#">Exchange</a> */}

                    <ul className="header-actions">
                        <li className="dropdown">
                            <a href="javascript:void(0)" id="userSettings" className="user-settings" data-toggle="dropdown" aria-haspopup="true">
                                <span className="avatar"><img src="dashboardFolder/img/default-user-icon.jpg" /><span className="status online" /></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
                                <div className="header-profile-actions"><a href="#">Profile</a><a onClick={logoutClick} href="javascript:void(0)">Logout</a></div>
                            </div>
                        </li>
                    </ul>
                </div>



            </div>
        </>
    )
}
export default Dashboardheader