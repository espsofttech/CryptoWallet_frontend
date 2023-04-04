import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'
import { getdashBoardDataCountUserAction } from '../Action/user.action';

const Dashboard = () => {

    const dispatch = useDispatch();
    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)
    const [userDashboard, setuserDashboard] = useState('')
    useEffect(() => {
        getUserDashboardAPI({ id: USER_LOGIN_DETAILS.template.id });

    }, []);

    const getUserDashboardAPI = async (data) => {
        let res = await getdashBoardDataCountUserAction(data);
        if (res) {
            setuserDashboard(res.data);
        }
    };


    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                                <Row>
                                    <h4>Total Buy</h4>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                    <i class="fa fa-btc" aria-hidden="true"></i></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">BTC {parseFloat(userDashboard.buyBTC ? userDashboard.buyBTC : '0.00').toFixed(8)}</h3>
                                                    {/* BTC 0.00 */}
                                                    <p>Total BTC Buy</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                <img src="images/icons8-ethereum-64.png" alt="" width="200"
                                                        height="50"></img></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">ETH {parseFloat(userDashboard.buyETH ? userDashboard.buyETH : '0.00').toFixed(8)} </h3>

                                                    <p>Total ETH Buy</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                <img src="images/icons8-usdc-64.png" alt="" width="200"
                                                        height="50"></img></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">USDT {parseFloat(userDashboard.buyUSDT ? userDashboard.buyUSDT : '0.00').toFixed(8)}</h3>
                                                    <p>Total USDC Buy</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                <img src="images/icons8-tether-80.png" alt="" width="200"
                                                        height="50"></img> </div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">USDC {parseFloat(userDashboard.buyUSDC ?
                                                        userDashboard.buyUSDC : '0.00').toFixed(8)}</h3>

                                                    <p>Total USDT Buy</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <h4>Total Sell</h4>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                    <i class="fa fa-btc" aria-hidden="true"></i></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">BTC {parseFloat(userDashboard.sellBTC ?
                                                        userDashboard.sellBTC : '0.00').toFixed(8)}</h3>
                                                    {/* BTC 0.00 */}
                                                    <p>Total BTC Sell</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                <img src="images/icons8-ethereum-64.png" alt="" width="200"
                                                        height="50"></img></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">ETH {parseFloat(userDashboard.sellETH ?
                                                        userDashboard.sellETH : '0.00').toFixed(8)} </h3>

                                                    <p>Total ETH Sell</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                <img src="images/icons8-usdc-64.png" alt="" width="200"
                                                        height="50"></img></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">USDT {parseFloat(userDashboard.sellUSDT ?
                                                        userDashboard.sellUSDT : '0.00').toFixed(8)}</h3>
                                                    <p>Total USDC Sell</p>
                                                </div>
                                                <div className="sale-graph"><div id="sparklineLine1" /></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="stats-tile">
                                            <div className="d-flex">
                                                <div className="sale-icon shade-blue">
                                                <img src="images/icons8-tether-80.png" alt="" width="200"
                                                        height="50"></img></div>
                                                <div className="sale-details">
                                                    <h3 className="text-black">USDC {parseFloat(userDashboard.sellUSDC ?
                                                        userDashboard.sellUSDC : '0.00').toFixed(8)}</h3>

                                                    <p>Total USDT Sell</p>
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