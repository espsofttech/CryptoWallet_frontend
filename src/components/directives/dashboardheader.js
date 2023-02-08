import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import $ from 'jquery';
import { Link, useNavigate, useParams } from 'react-router-dom';
import config from '../../config/config';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../../src/redux/actionTypes'
import { getProfileAction } from '../../Action/user.action';


const Dashboardheader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userDetails, setuserDetails] = useState({});
    const [activeBar, setActivebar] = useState('')

    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    useEffect(() => {

        // Update the document title using the browser API
        $('body').addClass("lighttheme");
        var lastPart = window.location.href.split("/").pop();
        setActivebar(lastPart)
        if (USER_LOGIN_DETAILS.template == undefined) {
            dispatch({
                type: ACTIONTYPES.USER_FORM, payload: {
                    template: '',
                }
            })
            Cookies.remove('loginSuccessCryptoWallet')
            Cookies.remove('loginSuccessCryptoWalletLogin')
            setTimeout(() => {
                window.location.href = config.baseUrl;
            }, 500);
        }
        getProfileAPI(USER_LOGIN_DETAILS.template.id)
        Cookies.set('loginSuccessCryptoWalletLogin', JSON.stringify(USER_LOGIN_DETAILS.template));

        Cookies.set('loginSuccessCryptoWallet', JSON.stringify(USER_LOGIN_DETAILS.token));
    }, []);

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
        Cookies.remove('loginSuccessCryptoWallet')
        Cookies.remove('loginSuccessCryptoWalletLogin')
        setTimeout(() => {
            window.location.href = config.baseUrl;
        }, 500);
    }

    const getProfileAPI = async (id) => {
        let res = await getProfileAction(id);
        if (res.status == true) {
            setuserDetails(res.data)
        }
    }



    const dashboardClick = () => {
        if (activeBar == 'dashboard') {
            window.location.href = `${config.baseUrl}dashboard`
        }
        else if (activeBar == 'buy') {
            window.location.href = `${config.baseUrl}buy`
        }
        else if (activeBar == 'wallet') {
            window.location.href = `${config.baseUrl}wallet`
        }
        else if (activeBar == 'withdraw') {
            window.location.href = `${config.baseUrl}withdraw`
        }
        else if (activeBar == 'deposit') {
            window.location.href = `${config.baseUrl}deposit`
        }
        else if (activeBar == 'bankdetail') {
            window.location.href = `${config.baseUrl}bankdetail`
        }
        else if (activeBar == 'kycdetails') {
            window.location.href = `${config.baseUrl}kycdetails`
        }
        else if (activeBar == 'changepassword') {
            window.location.href = `${config.baseUrl}changepassword`
        }

    }
    return (
        <>
            <div className="page-header">
                <div className="toggle-sidebar" onClick={toggleClass} id="toggle-sidebar"><i className="bi bi-list" /></div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><i className="bi bi-house" /><a href={config.baseUrl}>Home</a></li>
                    <li className="breadcrumb-item breadcrumb-active" style={{ cursor: 'pointer' }} onClick={dashboardClick} aria-current="page">
                        {activeBar == 'dashboard' ?
                            'Dashboard' :
                            activeBar == 'buy' ?
                                'Buy/Sell Crypto' :
                                activeBar == 'wallet' ?
                                    'Wallet' :
                                    activeBar == 'withdraw' ?
                                        'Withdraw' : activeBar == 'deposit' ?
                                            'Deposit' :
                                            activeBar == 'bankdetail' ?
                                                'Bank detail' :
                                                activeBar == 'kycdetails' ?
                                                    'Kyc Details' :
                                                    activeBar == 'changepassword' ?
                                                        'Change Password' :
                                                        ''

                        }
                    </li>
                </ol>

                <div className="header-actions-container">
                    {/* <a class="btn style1 mb-3" href="#">Exchange</a> */}

                    <ul className="header-actions">
                        <li className="dropdown">
                            <a href="javascript:void(0)" id="userSettings" className="user-settings" data-toggle="dropdown" aria-haspopup="true">
                                <span className="avatar">
                                    {!userDetails?.image || userDetails?.image == undefined || userDetails?.image == 'undefined' ?
                                        <img src="images/dummy-man.png" /> : <img src={`${config.imageUrl + userDetails?.image}`} />}


                                    <span className="status online" /></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
                                <div className="header-profile-actions">
                                    <a href={`${config.baseUrl}Activity`}>Activity</a>
                                    <a href={`${config.baseUrl}profile`}>Profile</a>
                                    <a onClick={logoutClick} href="javascript:void(0)">Logout</a></div>
                            </div>
                        </li>
                    </ul>
                </div>



            </div>
        </>
    )
}
export default Dashboardheader