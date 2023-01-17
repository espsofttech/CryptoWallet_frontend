import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";


const Withdraw = () => {

    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col lg={6}>
                                            <div className='buyform withdraw'>

                                                <div className='text-center my-3'>
                                                    <strong style={{ fontSize: "22px", marginBottom: "20px" }}>Withdraw Crypto Wallet Token</strong>
                                                </div>
                                                <div className='text-center pb-2'>
                                                    <p>Get Your Crypto Wallet Token in your INR </p>
                                                </div>

                                                <div className="sc-kcDeIU cvqsCp text-left">
                                                    <div className=''>
                                                        {/* <div className='form-group mb-3'>
        <label>Withdrawal Address</label>
        <input type="text" class="form-control text-black" disabled aria-describedby="basic-addon2" value={loginData?.bnb_address} />

    </div> */}
                                                        <div class="form-group ">
                                                            <label className="pull-left">Amount</label>

                                                            <div class="pull-right mntbalance">Crypto Wallet Balance: <span id="web13Balance">
                                                                ~ INR
                                                            </span></div>
                                                            <div class="input-group my-3">
                                                                <input type="text" class="form-control " name='tokenAmount' aria-label="Enter Amount (Crypto Wallet)" aria-describedby="basic-addon2" placeholder="Enter Amount (Crypto Wallet)" />

                                                                <div class="input-group-append">
                                                                    <button class="btn btn-primary copybtn" type="button">MAX</button>
                                                                </div>
                                                            </div>
                                                            <span className="validationErr"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <small class=""> Withdraw Fee: % </small><br />
                                                <small class=""> You will get:  INR </small>
                                                <small class="" style={{ float: 'right' }}> Minimum Withdraw =  Crypto Wallet</small>
                                         
                                                  
                                                    <div className="sc-CtfFt bxUreM my-3" id="token-buy-button"  >Withdraw Now</div>
                                              

                                                <span style={{ fontSize: '12px' }}> <b>Note: Please allow us 2 - 5 Business Days to Process your Request. Once Approved, It may take upto 14 days to reflect the Amount in your Bank Account. Incase, the Same is not reflected, Please Mail us at <a style={{ color: 'blue' }} target='_blank' href='#'>admin@silkyex.io.</a> </b></span>
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Withdraw