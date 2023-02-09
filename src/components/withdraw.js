import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, Nav, Tab } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import { useSelector, useDispatch } from 'react-redux'
import { withdrawCryptoAction, withdrawBankAction, getAllWithdrawTransactionsAction } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';
import moment from "moment";


const Withdraw = () => {
    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)
    const [withDrawData, setwithDrawData] = useState({ 'user_id': USER_LOGIN_DETAILS.template.id, 'coin_id': '', 'withdrawal_Address': '', 'amount': '' })
    const [withdrawHistory, setwithdrawHistory] = useState([]);


    useEffect(() => {
        getAllWithdrawTransactions()
    }, []);

    const columnsForWallet = [
        {
            key: "Sno.",
            text: "Sno.",
            cell: (row, index) => index + 1
        },
        {
            text: "Type",
            cell: (item) => {
                return (
                    item.withdrawal_Address == '' ? 'Bank' : 'Crypto'
                );
            }
        },

        {
            key: "withdrawal_Address",
            text: "Withdrawal Address",

        },
        {
            key: "coinName",
            text: "Coin Name",

        },
        {
            key: "amount",
            text: "Amount",

        },
        {
            key: "createdAt",
            text: "Date",
            cell: (item) => {
                return (
                    `${moment(item.createdAt).format('DD/MM/YYYY hh:mm:ss')}`
                );
            }

        },



        {
            text: "Status",
            cell: (item) => {
                return (

                    item.status == 1 ? <span style={{ color: '#ffbc00f2' }}>Pending</span> :
                        item.status == 2 ? <span style={{ color: 'green' }}>Accepted</span> :
                            item.status == 3 ? <span style={{ color: 'red' }}>Rejected</span> :
                                'NA'
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


    const inputHandler = (e) => {
        const { name, value } = e.target;
        setwithDrawData((old) => {
            return { ...old, [name]: value };
        });
    };

    const withdrawCrypto = async (e) => {
        e.preventDefault();
        try {
            let res = await withdrawCryptoAction(withDrawData);
            if (res.status == true) {
                toast.success(res.msg);
                setwithDrawData({
                    'user_id': USER_LOGIN_DETAILS.template.id, 'coin_id': '', 'withdrawal_Address': '', 'amount': ''
                })
                getAllWithdrawTransactions()

            }
            else {
                toast.error(res.msg);
            }
        }
        catch (err) {
            toast.error(err.response.data.msg);
        }
    }


    const withdrawBank = async (e) => {
        e.preventDefault();
        try {
            withDrawData.coin_id = 5
            withDrawData.user_id = USER_LOGIN_DETAILS.template.id

            let res = await withdrawBankAction(withDrawData);
            if (res.status == true) {
                toast.success(res.msg);
                setwithDrawData({
                    'user_id': USER_LOGIN_DETAILS.template.id, 'coin_id': '', 'withdrawal_Address': '', 'amount': ''
                })
                getAllWithdrawTransactions()
            }
            else {
                toast.error(res.msg);
            }
        }
        catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    const getAllWithdrawTransactions = async () => {
        try {
            let res = await getAllWithdrawTransactionsAction(USER_LOGIN_DETAILS.template.id);
            if (res.status == true) {
                setwithdrawHistory(res.data);
            }
        }
        catch (err) {

        }
    };

    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />
                        <Toaster />
                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                                <div className="row ">
                                    <div className="col-lg-12">
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                            <Row className="justify-content-center">
                                                <Col sm={3}>
                                                    <Nav variant="pills" className="mb-3" >
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first" >Crypto Wallet </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="second">Bank</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col sm={12}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="first">
                                                            <Row className="justify-content-center ">
                                                                <Col lg={6}>
                                                                    <div className='buyform withdraw'>

                                                                        <div className='text-center my-3'>
                                                                            <strong style={{ fontSize: "22px", marginBottom: "20px" }}>Withdraw In Crypto</strong>
                                                                        </div>
                                                                        <div className='text-center pb-2'>

                                                                        </div>

                                                                        <div className="sc-kcDeIU cvqsCp ">
                                                                            <div className=''>
                                                                                <div className='form-group mb-3'>
                                                                                    <label className="pull-left">Withdrawal Address</label>
                                                                                    <input type="text" placeholder="Address"
                                                                                        className="form-control text-black" name="withdrawal_Address" aria-describedby="basic-addon2" value={withDrawData.withdrawal_Address} onChange={inputHandler} />

                                                                                </div>
                                                                                <div className="form-group ">
                                                                                    <label className="pull-left">Amount</label>

                                                                                    <div className="input-group my-3">
                                                                                        <input type="text" className="form-control " value={withDrawData.amount} onChange={inputHandler} aria-label="Enter Amount (Crypto Wallet)" name="amount" aria-describedby="basic-addon2" placeholder="Enter Amount (Crypto Wallet)" />

                                                                                        <div className="input-group-append">
                                                                                            <select className="form-control" value={withDrawData.coin_id} name="coin_id" onChange={inputHandler}>
                                                                                                <option value="">Select Coin</option>
                                                                                                <option value="1">BTC</option>
                                                                                                <option value="2">ETH</option>
                                                                                                <option value="3">USDT</option>
                                                                                                <option value="4">USDC</option>
                                                                                            </select>
                                                                                            {/* <button className="btn btn-primary copybtn" type="button">MAX</button> */}
                                                                                        </div>
                                                                                    </div>
                                                                                    <span className="validationErr"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* <small className=""> Withdraw Fee: % </small><br />
                                                                            <small className=""> You will get:  INR </small>
                                                                            <small className="" style={{ float: 'right' }}> Minimum Withdraw =  Crypto Wallet</small> */}


                                                                        <button className="sc-CtfFt bxUreM mt-1 w-100" id="token-buy-button" onClick={(e) => withdrawCrypto(e)} disabled={!withDrawData.withdrawal_Address || !withDrawData.amount || !withDrawData.coin_id} type="submit">Withdraw Now</button>


                                                                        <span style={{ fontSize: '12px' }}> <b>Note: Please allow us 2 - 5 Business Days to Process your Request. Once Approved, It may take upto 14 days to reflect the Amount in your Wallet Account. Incase, the Same is not reflected, Please Mail us at <a style={{ color: 'blue' }} target='_blank' href='#'>admin@cryptowallet.io.</a> </b></span>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            <Row className="justify-content-center">
                                                                <Col lg={6}>
                                                                    <div className='buyform withdraw'>

                                                                        <div className='text-center my-3'>
                                                                            <strong style={{ fontSize: "22px", marginBottom: "20px" }}>Withdraw In INR</strong>
                                                                        </div>


                                                                        <div className="sc-kcDeIU cvqsCp text-left">
                                                                            <div className=''>
                                                                                {/* <div className='form-group mb-3'>
        <label>Withdrawal Address</label>
        <input type="text" className="form-control text-black" disabled aria-describedby="basic-addon2" value={loginData?.bnb_address} />

    </div> */}
                                                                                <div className="form-group ">
                                                                                    <label className="pull-left">Amount</label>

                                                                                    {/* <div className="pull-right mntbalance">Crypto Wallet Balance: <span id="web13Balance">
                                                                                            ~ INR
                                                                                        </span></div> */}
                                                                                    <div className="input-group my-3">
                                                                                        <input type="text" className="form-control " name='amount'
                                                                                            value={withDrawData.amount} onChange={inputHandler} aria-label="Enter Amount (INR)" aria-describedby="basic-addon2" placeholder="Enter Amount (INR)" />


                                                                                    </div>
                                                                                    <span className="validationErr"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* <small className=""> Withdraw Fee: % </small><br />
                                                                            <small className=""> You will get:  INR </small>
                                                                            <small className="" style={{ float: 'right' }}> Minimum Withdraw =  Crypto Wallet</small> */}


                                                                        <button className="sc-CtfFt bxUreM mt-1 w-100" id="token-buy-button" onClick={(e) => withdrawBank(e)} disabled={!withDrawData.amount} >Withdraw Now</button>


                                                                        <span style={{ fontSize: '12px' }}> <b>Note: Please allow us 2 - 5 Business Days to Process your Request. Once Approved, It may take upto 14 days to reflect the Amount in your Bank Account. Incase, the Same is not reflected, Please Mail us at <a style={{ color: 'blue' }} target='_blank' href='#'>admin@cryptowallet.io.</a> </b></span>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </div>
                                </div>

                                <div className='row mt-5'>
                                    <div className='col-lg-12 col-12 '>
                                        <h4 class="mb-3">Withdrawal History</h4>
                                        <ReactDatatable
                                            config={configForWallet}
                                            records={withdrawHistory}
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
export default Withdraw