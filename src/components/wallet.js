import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";


const Wallet = () => {

    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">

                                <div className="row">
                                    <div className="col-md-12 pt-4">
                                        <div className="p-3">
                                            <span className="mb-2"> Your Crypto Breakdown</span>
                                            <div className="form-body">
                                                <div className="boxcolor banner_blue mb-4 mt-2">
                                                    <div className="row">
                                                        <div className="col-lg-6"><h3>57.69 Crypto ~ INR 576.90</h3></div>
                                                        <div className="col-lg-3" />
                                                        <div className="col-lg-3">
                                                            <a href="#" className="sc-CtfFt bxUreM" id="token-buy-button"><i className="bi bi-wallet" />&nbsp;&nbsp;Withdraw</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="col-md-12">
                                                            <div className="card p-3">
                                                                <table className="text-black mt-2 mb-2" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-left">Total Buying</td>
                                                                            <td className="text-right"><strong>1000.84 Crypto </strong>~ INR10008.40</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-left">Total Staking</td>
                                                                            <td className="text-right"><strong>395 Crypto </strong>~ INR3950.00</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <hr className />
                                                                <table className="text-black mt-2 mb-2" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-left">Total Staking Earnings</td>
                                                                            <td className="text-right"><strong> 237.49 Crypto </strong>~ INR2374.90</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-left">Total Referral Earnings</td>
                                                                            <td className="text-right"><strong>0 Crypto </strong>~ INR0.00</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <hr className />
                                                                <table className="text-black mt-2 mb-2" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-left">Current Crypto Price</td>
                                                                            <td className="text-right"><strong>INR10</strong></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-left">Total Supply in public sale</td>
                                                                            <td className="text-right"><strong>200000000</strong></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 text-center"><img src="dashboardFolder/img/wall-gif.gif" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wallet