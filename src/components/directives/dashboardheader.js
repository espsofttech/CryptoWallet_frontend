import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, Dropdown } from 'react-bootstrap';
import $ from 'jquery';
import { Link, useNavigate, useParams } from 'react-router-dom';
import config from '../../config/config';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../../src/redux/actionTypes'
import { getProfileAction, getAllActivityAction } from '../../Action/user.action';
import moment from "moment";


const Dashboardheader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userDetails, setuserDetails] = useState({});
    const [activeBar, setActivebar] = useState('')
    const [activity, setactivity] = useState([]);
    const [activityCount, setactivityCount] = useState([]);


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
        getAllActivityAPI(USER_LOGIN_DETAILS.template.id);
        Cookies.set('loginSuccessCryptoWalletLogin', JSON.stringify(USER_LOGIN_DETAILS.template));

        Cookies.set('loginSuccessCryptoWallet', JSON.stringify(USER_LOGIN_DETAILS.token));
    }, []);

    const toggleClass = () => {
        $('.page-wrapper').toggleClass("toggled");
        // setActive(!isActive);
    };

    const getAllActivityAPI = async (data) => {
        try {
            let res = await getAllActivityAction(data);

            if (res.status == true) {
                setactivity(res.data);
                setactivityCount(res.notificationCount)
            }
        }
        catch (err) {

        }
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
                    <div className="notification-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="default" id="dropdown-basic">
                                <span href="" class="leads d-xl-flex">

                                    <span class="lead-icon">
                                        <i class="bi bi-bell-fill animate__animated animate__swing animate__infinite infinite"></i>
                                        <b class="dot animate__animated animate__heartBeat animate__infinite"></b>
                                    </span>
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div>
                                    <ul className=" notify-drop">
                                        <div className="notify-drop-title">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-6">Notification (<b>{activityCount}</b>)</div>
                                                <div className="col-md-6 col-sm-6 col-xs-6 text-right"><a href className="rIcon allRead" data-tooltip="tooltip" data-placement="bottom" title data-original-title="tümü okundu."><i className="fa fa-dot-circle-o" /></a></div>
                                            </div>
                                        </div>
                                        {/* end notify title */}
                                        {/* notify content */}
                                        <div className="drop-content">
                                            {activity.map((item) => {
                                                return (
                                                    <li style={{ "background": item.is_read == 0 ? "#ddd" : '' }}>
                                                        <div className="col-md-3 col-sm-3 col-xs-3"><div className="notify-img"></div></div>
                                                        <div className="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href>{item.description}</a>
                                                            <hr />
                                                            <p className="time">{moment(item.datetime).format('DD/MM/YYYY hh:mm:ss')}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })}


                                        </div>
                                        <div className="notify-drop-footer text-center">
                                            <Link to={`${config.baseUrl}Activity`}><i className="fa fa-eye" />See All Notifications</Link>
                                        </div>
                                    </ul>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>



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