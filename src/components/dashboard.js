import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'

const Dashboard = () => {

    const dispatch = useDispatch();
    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    console.log(USER_LOGIN_DETAILS)
    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar/>
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                                <Row>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                    <i className="fa fa-database" /></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">237.49 SLC ~</h3>
                                                    INR 2374.90
                                                    <p>Staking Earning</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                    <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                    <i className="bi bi-wallet" /></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">18.95 SLC ~ </h3>INR 189.50<p>Total Withdraw</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                    <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                    <i className="fa fa-credit-card-alt" /></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">1000.84 SLC ~</h3>
                                                    INR 10008.40
                                                    <p>Purchased Token</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                    <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                    <i className="fa fa-users" /></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">0.00 SLC ~</h3>
                                                    INR 0.00
                                                    <p>Referral Income</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard