import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";


const Buy = () => {
    const [purchaseList, setPurchaseList] = useState([]);
    const columnsForWallet = [
        {
            key: "sn",
            text: "#",
            cell: (row, index) => index + 1
        },
        {
            key: "token",
            text: "Token",
            cell: (item) => {
                
            }
        },
        {
            key: "amount",
            text: "Amount",
            cell: (item) => {
                return (
                    `${item.amount} INR`
                );
            }
        },
        {
            key: "fee",
            text: "Transaction fee",
            cell: (item) => {
                return (
                    `${item.fee} Crypto`
                );
            }
        },
        {
            key: "status",
            text: "status",
            cell: (item) => {
                return (
                    item.status == 0 ? <span style={{ color: 'blue' }} >Process</span> : item.status == 1 ? <span style={{ color: 'green' }} >Approved</span> : item.status == 2 ? <span style={{ color: 'red' }} >Reject</span> : ''

                );
            }
        },

        {
            key: "created_at",
            text: "Date",
            cell: (item) => {
                return (
                    item.created_at
                );
            }
        },

    ];
    const configForWallet = {
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: true,
        pagination: 'advance',
        button: {
            excel: false,
            print: false

        }
    }
    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                                <div className="row justify-content-center">

                                    <div className="col-sm-6 col-12 pt-5">
                                        <div className='buyform'>
                                            {/* <a onClick={adminBank} className="btn w-10">Admin bank</a> */}

                                            <span className="text-left text-black" style={{ display: 'flex', flex: '1 1 auto', justifyContent: "center" }}>
                                                <strong style={{ fontSize: "22px" }}>BUY Crypto</strong></span>
                                            <div className="sc-kcDeIU cvqsCp">
                                                {/* Connected Wallet: */}
                                                <div style={{ wordBreak: "break-all" }}>
                                                    {/* {connectWalletAddress} */}
                                                </div>
                                                <div className="sc-iomxrj btdLQC" style={{ marginBottom: '20px', color: '#fff', fontSize: '24px', display: 'flex' }}>
                                                </div>
                                                <div id="swap-page" className="sc-gJWqzi lmKVHo">
                                                    <div className="sc-ifAKCX dcxnAx" style={{ height: "90px" }}>
                                                        <div id="swap-currency-input" className="sc-ugnQR drzjNC " >
                                                            <div className="sc-eIHaNI hNuCqz">
                                                                <div className="sc-iQtOjA fLKthc">
                                                                    <img src='assets/images/ruppee.jpg' height="25px" width="25px" />

                                                                    <input className="sc-iybRtq iQKTjs token-amount-input" autoComplete="off" id='bnbAmountError' autoCorrect="off" name="bnb_amount" type="text" onKeyPress={(event) => { if (!/^\d*[.]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }} placeholder="0.00" />
                                                                    {/* <span onClick={maxAmount} style={{ cursor: 'pointer' }}>Max</span> */}
                                                                    &nbsp;&nbsp;&nbsp;
                                                                    <button className="open-currency-select-button">
                                                                        <span>INR</span>
                                                                    </button>
                                                                </div>
                                                                <div className="balance">
                                                                    <p>INR 100</p>
                                                                    {/* <p>{currentBNBBalance ? currentBNBBalance : '0.000000'} INR</p> */}
                                                                </div>
                                                                <span style={{ marginLeft: '30px' }} className="validationErr pull-left"></span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mb-4" style={{ position: "relative" }}>
                                                        <span className="bxUreM pulse" style={{ display: 'inline', position: "absolute", borderRadius: "50%" }}>
                                                            <a href> <span className="fa fa-exchange" style={{ transform: 'rotate(90deg)' }} /></a>
                                                        </span>
                                                    </div>

                                                    <div className="sc-ifAKCX dcxnAx" style={{ height: "120px" }}>
                                                        <div id="swap-currency-input" className="sc-ugnQR second-box" style={{ height: "100%" }}>
                                                            <div className="sc-eIHaNI hNuCqz">
                                                                <div className="sc-iQtOjA fLKthc">
                                                                    <img src='images/favicon.png' height="25px" width="25px" />
                                                                    <input className="sc-iybRtq iQKTjs token-amount-input" name="mnt_amount" type="text" id='tokenAmountError' placeholder="0.00" />

                                                                    <button className="open-currency-select-button">
                                                                        <span>Crypto</span>
                                                                    </button>
                                                                </div>


                                                                <div className="balance">
                                                                    <p> 1 Crypto = INR</p><br />
                                                                    <p> Transaction Fee =  % </p>
                                                                </div>
                                                                <div> <span style={{ marginLeft: '30px' }} className="validationErr pull-left"></span></div>


                                                            </div>

                                                        </div>
                                                        <div className="col-lg-12 mt-2 text-left">
                                                            <p style={{ marginLeft: '30px' }} className=''> You will get =  </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <br />


                                            <div className="sc-CtfFt bxUreM mt-1" id="token-buy-button" style={{ margin: "0px 30px" }} >Buy Now</div>



                                        </div>
                                    </div>

                                </div>
                                <div className='row mt-5'>
                                <div className='col-lg-12 col-12 '>
                                    <h4 class="mb-3">Token Purchase History</h4>
                                    <ReactDatatable
                                        config={configForWallet}
                                        records={purchaseList}
                                        columns={columnsForWallet}
                                    />
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
export default Buy