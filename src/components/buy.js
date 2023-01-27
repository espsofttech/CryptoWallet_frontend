import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, Nav, Tab } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import axios from "axios";
import { buyNowAction, getAllTransactionsAction, showkycAction } from '../Action/user.action';
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import moment from "moment";

const Buy = () => {
    const [purchaseList, setPurchaseList] = useState([]);
    const [purchaseList11, setPurchaseList11] = useState([]);

    const [liveCryptoPrice, setliveCryptoPrice] = useState('')
    const [kycStatus, setkycStatus] = useState(false);
    const [kycStatusApproveReject, setkycStatusApproveReject] = useState(false);
    const columnsForWallet = [
        {
            key: "sn",
            text: "#",
            cell: (row, index) => index + 1
        },
        {
            key: "buyCoinName",
            text: "Coin",
            cell: (item) => {
                return (
                    `${item.type == 1 ? item.buyCoinName : item.coinName}`
                );
            }
        },
        {
            key: "type",
            text: "Type",
            cell: (item) => {
                return (
                    item.type == 1 ?
                        <p style={{ color: 'green' }}>Buy</p> :
                        <p style={{ color: 'red' }}>Sell</p>
                );
            }
        },
        {
            key: "buyAmount",
            text: "Quantity",
            cell: (item) => {
                return (
                    `${item.buyAmount}`
                );
            }
        },
        {
            key: "amount",
            text: "Amount",
            cell: (item) => {
                return (
                    `${item.amount}`
                );
            }
        },
        {
            key: "datetime",
            text: "Date",
            cell: (item) => {
                return (
                    moment(item.datetime).format('DD/MM/YYYY hh:mm:ss')
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

    const [formData, setformData] = useState({ 'crypto_amount': '', 'crypto_type': '', 'fiat_amount': '' })

    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    useEffect(() => {
        livePriceAPI()
        getAllTransactions()
        getkycdetails(USER_LOGIN_DETAILS.template.id)
    }, []);

    const getAllTransactions = async (data) => {
        try {
            let res = await getAllTransactionsAction(data);
            console.log('res', res.success);
            if (res.status == true) {
                setPurchaseList(res.data);
            }
        }
        catch (err) {

        }
    };

    const getkycdetails = async (data) => {
        let res = await showkycAction({ id: data });
        setkycStatusApproveReject(res.data.kyc_status);
        if (res.data.doc_no == "") {
            setPurchaseList11(true);
        }
        if (res.status == true) {
            setPurchaseList11(res.data);
            console.log("123", res.data.doc_no == "");
        }
    };

    //================================== live price  ==============

    const livePriceAPI = async () => {
        await axios({
            method: 'get',
            url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,tether,usd-coin&vs_currencies=inr'
        })
            .then(response => {
                setliveCryptoPrice(response.data)
            })
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setformData((old) => {
            return { ...old, [name]: value };
        });
    };


    const buyNowAPI = async (id) => {
        try {
            let data = {
                'user_id': USER_LOGIN_DETAILS.template.id,
                'coin_id': id == 1 ? 5 : formData.crypto_type,
                'buyCoin_Id': id == 1 ? formData.crypto_type : 5,
                'type': id == 1 ? 1 : 2,
                'amount': (id == 1 ?
                    (formData.crypto_type == 1 ?
                        liveCryptoPrice.bitcoin.inr * formData.crypto_amount :
                        formData.crypto_type == 2 ?
                            liveCryptoPrice.ethereum.inr * formData.crypto_amount :
                            formData.crypto_type == 3 ?
                                liveCryptoPrice.tether.inr * formData.crypto_amount :
                                formData.crypto_type == 4 ?
                                    liveCryptoPrice['usd-coin'].inr * formData.crypto_amount : '') :
                    formData.crypto_amount
                )
                ,
                'buyAmount': (id == 1 ?
                    formData.crypto_amount :
                    (formData.crypto_type == 1 ?
                        liveCryptoPrice.bitcoin.inr * formData.crypto_amount :
                        formData.crypto_type == 2 ?
                            liveCryptoPrice.ethereum.inr * formData.crypto_amount :
                            formData.crypto_type == 3 ?
                                liveCryptoPrice.tether.inr * formData.crypto_amount :
                                formData.crypto_type == 4 ?
                                    liveCryptoPrice['usd-coin'].inr * formData.crypto_amount : '')
                )

            }
            let res = await buyNowAction(data);
            if (res.status == true) {
                toast.success(res.data);
            }
            else {
                toast.error(res.msg);
            }
        }
        catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    const tabchange = async () => {
        setformData({ 'crypto_amount': '', 'crypto_type': '', 'fiat_amount': '' })
    }



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
                                {purchaseList11.kyc_status == 2 ?
                                    <div>
                                        <div className="row ">
                                            <div className="col-lg-12">
                                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                                    <Row className="justify-content-center">
                                                        <Col sm={3}>
                                                            <Nav variant="pills" >
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="first" onClick={tabchange}>Buy Crypto</Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="second" onClick={tabchange}>Sell Crypto</Nav.Link>
                                                                </Nav.Item>
                                                            </Nav>
                                                        </Col>
                                                        <Col sm={12}>
                                                            <Tab.Content>


                                                                <Tab.Pane eventKey="first">
                                                                    <Row className="justify-content-center">
                                                                        <div className="col-sm-6 col-12 pt-4">
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
                                                                                                        <img src=
                                                                                                            {formData.crypto_type == 1 ? 'images/icons/bitcoin.webp' :
                                                                                                                formData.crypto_type == 2 ? 'images/icons/ethereum.png' :
                                                                                                                    formData.crypto_type == 3 ? 'images/icons/usdt.png' :
                                                                                                                        formData.crypto_type == 4 ? 'images/icons/usd-coin.png' : 'dashboardFolder/img/logo.png'
                                                                                                            }
                                                                                                            height="25px" width="25px" />

                                                                                                        <input className="sc-iybRtq iQKTjs token-amount-input" autoComplete="off" id='bnbAmountError' autoCorrect="off" name="crypto_amount" value={formData.crypto_amount} onChange={inputHandler} type="text" onKeyPress={(event) => { if (!/^\d*[.]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }} placeholder="0.00" />
                                                                                                        {/* <span onClick={maxAmount} style={{ cursor: 'pointer' }}>Max</span> */}
                                                                                                        &nbsp;&nbsp;&nbsp;
                                                                                                        <button className="open-currency-select-button">
                                                                                                            <select className="form-control" name="crypto_type" value={formData.crypto_type} onChange={inputHandler}>
                                                                                                                <option value="">Select Crypto</option>
                                                                                                                <option value="1">BTC</option>
                                                                                                                <option value="2">ETH</option>
                                                                                                                <option value="3">USDT</option>
                                                                                                                <option value="4">USDC</option>
                                                                                                            </select>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div className="balance">
                                                                                                        {/* <p>INR 100</p> */}
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
                                                                                                        <img src='images/ruppee.jpg' height="25px" width="25px" />
                                                                                                        <input className="sc-iybRtq iQKTjs token-amount-input" name="fiat_amount" value={formData.crypto_type == 1 ?
                                                                                                            liveCryptoPrice.bitcoin.inr * formData.crypto_amount :
                                                                                                            formData.crypto_type == 2 ?
                                                                                                                liveCryptoPrice.ethereum.inr * formData.crypto_amount :
                                                                                                                formData.crypto_type == 3 ?
                                                                                                                    liveCryptoPrice.tether.inr * formData.crypto_amount :
                                                                                                                    formData.crypto_type == 4 ?
                                                                                                                        liveCryptoPrice['usd-coin'].inr * formData.crypto_amount : ''
                                                                                                        } type="text" id='tokenAmountError' placeholder="0.00" />

                                                                                                        <button className="open-currency-select-button">
                                                                                                            <span>INR</span>
                                                                                                        </button>
                                                                                                    </div>


                                                                                                    {/* <div className="balance">
                                                                    <p> 1 Crypto = INR</p><br />
                                                                    <p> Transaction Fee =  % </p>
                                                                </div> */}
                                                                                                    <div> <span style={{ marginLeft: '30px' }} className="validationErr pull-left"></span></div>


                                                                                                </div>

                                                                                            </div>
                                                                                            <div className="col-lg-12 mt-2 text-left">
                                                                                                <p style={{ marginLeft: '30px' }} className=''> You will get =  {formData.crypto_amount ?
                                                                                                    formData.crypto_amount : '0.00'} {formData.crypto_type == 1 ?
                                                                                                        'BTC' :
                                                                                                        formData.crypto_type == 2 ?
                                                                                                            'ETH' :
                                                                                                            formData.crypto_type == 3 ?
                                                                                                                'USDT' :
                                                                                                                formData.crypto_type == 4 ?
                                                                                                                    'USDC' : ''


                                                                                                    }</p>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>

                                                                                <br />


                                                                                <button className="sc-CtfFt bxUreM mt-1 w-100" onClick={(e) => buyNowAPI(1)} id="token-buy-button" disabled={!formData.crypto_amount || !formData.crypto_type}  >Buy Now</button>



                                                                            </div>
                                                                        </div>
                                                                    </Row>
                                                                </Tab.Pane>



                                                                <Tab.Pane eventKey="second">
                                                                    <Row className="justify-content-center">
                                                                        <div className="col-sm-6 col-12 pt-4">
                                                                            <div className='buyform'>
                                                                                {/* <a onClick={adminBank} className="btn w-10">Admin bank</a> */}

                                                                                <span className="text-left text-black" style={{ display: 'flex', flex: '1 1 auto', justifyContent: "center" }}>
                                                                                    <strong style={{ fontSize: "22px" }}>Sell Crypto</strong></span>
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
                                                                                                        <img src='dashboardFolder/img/logo.png' height="25px" width="25px" />

                                                                                                        <input className="sc-iybRtq iQKTjs token-amount-input" autoComplete="off" id='bnbAmountError' autoCorrect="off" name="crypto_amount" value={formData.crypto_amount} onChange={inputHandler} type="text" onKeyPress={(event) => { if (!/^\d*[.]?\d{0,1}$/.test(event.key)) { event.preventDefault(); } }} placeholder="0.00" />
                                                                                                        {/* <span onClick={maxAmount} style={{ cursor: 'pointer' }}>Max</span> */}
                                                                                                        &nbsp;&nbsp;&nbsp;
                                                                                                        <button className="open-currency-select-button">
                                                                                                            <select className="form-control" name="crypto_type" value={formData.crypto_type} onChange={inputHandler}>
                                                                                                                <option value="">Select Crypto</option>
                                                                                                                <option value="1">BTC</option>
                                                                                                                <option value="2">ETH</option>
                                                                                                                <option value="3">USDT</option>
                                                                                                                <option value="4">USDC</option>
                                                                                                            </select>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                    <div className="balance">
                                                                                                        {/* <p>INR 100</p> */}
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
                                                                                                        <img src='images/ruppee.jpg' height="25px" width="25px" />
                                                                                                        <input className="sc-iybRtq iQKTjs token-amount-input" name="fiat_amount" value={formData.crypto_type == 1 ?
                                                                                                            liveCryptoPrice.bitcoin.inr * formData.crypto_amount :
                                                                                                            formData.crypto_type == 2 ?
                                                                                                                liveCryptoPrice.ethereum.inr * formData.crypto_amount :
                                                                                                                formData.crypto_type == 3 ?
                                                                                                                    liveCryptoPrice.tether.inr * formData.crypto_amount :
                                                                                                                    formData.crypto_type == 4 ?
                                                                                                                        liveCryptoPrice['usd-coin'].inr * formData.crypto_amount : ''
                                                                                                        } type="text" id='tokenAmountError' placeholder="0.00" />

                                                                                                        <button className="open-currency-select-button">
                                                                                                            <span>INR</span>
                                                                                                        </button>
                                                                                                    </div>


                                                                                                    {/* <div className="balance">
                                                                    <p> 1 Crypto = INR</p><br />
                                                                    <p> Transaction Fee =  % </p>
                                                                </div> */}
                                                                                                    <div> <span style={{ marginLeft: '30px' }} className="validationErr pull-left"></span></div>


                                                                                                </div>

                                                                                            </div>
                                                                                            <div className="col-lg-12 mt-2 text-left">
                                                                                                <p style={{ marginLeft: '30px' }} className=''> You will get =  {formData.crypto_type == 1 ?
                                                                                                    liveCryptoPrice.bitcoin.inr * formData.crypto_amount :
                                                                                                    formData.crypto_type == 2 ?
                                                                                                        liveCryptoPrice.ethereum.inr * formData.crypto_amount :
                                                                                                        formData.crypto_type == 3 ?
                                                                                                            liveCryptoPrice.tether.inr * formData.crypto_amount :
                                                                                                            formData.crypto_type == 4 ?
                                                                                                                liveCryptoPrice['usd-coin'].inr * formData.crypto_amount : ''}&nbsp;INR </p>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>

                                                                                <br />


                                                                                <button className="sc-CtfFt bxUreM mt-1 w-100" onClick={(e) => buyNowAPI(2)} id="token-buy-button" disabled={!formData.crypto_amount || !formData.crypto_type}  >Sell Now</button>



                                                                            </div>
                                                                        </div>
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
                                                <h4 class="mb-3">Transaction History</h4>
                                                <ReactDatatable
                                                    config={configForWallet}
                                                    records={purchaseList}
                                                    columns={columnsForWallet}
                                                />
                                            </div>
                                        </div>
                                    </div> :

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="kycStatus">
                                                {purchaseList11.kyc_status == 0 ?
                                                    <span style={{ color: '#ffa500cf' }}>
                                                        For Buy/Sell Firstly You have to Complete Your KYC
                                                    </span> :
                                                    purchaseList11.kyc_status == 1 ?
                                                        <span style={{ color: '#ffa500cf' }}>
                                                            Your KYC Is Pending From Admin Side
                                                        </span> :
                                                        <span style={{ color: 'red' }}>
                                                            Your KYC Is Rejected From Admin Side
                                                        </span>
                                                }




                                            </div>
                                        </div>
                                    </div>}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Buy