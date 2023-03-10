import React, { Component, useEffect, useState } from 'react'
import config from '../config/config';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'
import { depositFiatAction, getgetuserbankdetailsAction, getAllDepositTransactionsAction, showkycAction, getProfileAction, getAdminBankDetailAction } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
// const loginData = (!Cookies.get('loginSuccessSilkyExchangeDevelopement')) ? [] : JSON.parse(Cookies.get('loginSuccessSilkyExchangeDevelopement'));
import moment from "moment";

const Deposit = () => {
    const dispatch = useDispatch();


    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    console.log(USER_LOGIN_DETAILS)


    const [receipt, setreceipt] = useState('')
    const [receipt_name, setreceipt_name] = useState('')
    const [purchaseList11, setPurchaseList11] = useState([]);

    const [depositfiat, setdepositfiat] = useState({
        'user_id': USER_LOGIN_DETAILS.template.id,
        'coin_id': 5,
        'balance': '',
        'status': 0,
        'bank_name': '',
        'admin_bank_id': '',
        'upload_file': '',
        'transaction_id': '',
        'type': 0
    })
    const [liveprice, setliveprice] = useState(0)
    const [date, setdate] = useState(new Date())
    const [depositHistory, setdepositHistory] = useState([]);





    const [kycStatusApproveReject, setkycStatusApproveReject] = useState(false);

    const [image_file, setimage_file] = useState("");
    const [image_preview, setimage_preview] = useState("");
    const [kycdetails, setkycdetails] = useState({
        GSTImage: ''
    });
    const [toggleSet, settoggleSet] = useState(1)
    const [bankdetails, setbankdetails] = useState([]);
    const [adminbankdetails, setadminbankdetails] = useState([]);
    const [validatioError, setvalidatioError] = useState(false);
    const [userDetails, setuserDetails] = useState({});

    useEffect(() => {
        // console.log(loginData)
        getbankdetails({ id: USER_LOGIN_DETAILS.template.id });
        getinrtousdtprice()
        getAllDepositTransactions()
        getkycdetails(USER_LOGIN_DETAILS.template.id)
        getProfileAPI(USER_LOGIN_DETAILS.template.id)


    }, []);

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

    const toggleManage = (data) => {
        settoggleSet(data)
    }

    const handleChangeStart = (date) => {
        setdate(date)
    }
    const getProfileAPI = async (id) => {
        let res = await getProfileAction(id);
        if (res.status == true) {
            setuserDetails(res.data)
            getadminbankdetails(res.data);

        }
    }

    const columnsForWallet = [
        {
            key: "Sno.",
            text: "Sno.",
            cell: (row, index) => index + 1
        },



        {
            key: "coinName",
            text: "Coin Name",

        },
        {
            key: "balance",
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

                    item.status == 0 ? <span style={{ color: '#ffbc00f2' }}>Pending</span> :
                        item.status == 1 ? <span style={{ color: 'green' }}>Accepted</span> :
                            item.status == 2 ? <span style={{ color: 'red' }}>Rejected</span> :
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


    const getAllDepositTransactions = async () => {
        try {
            let res = await getAllDepositTransactionsAction(USER_LOGIN_DETAILS.template.id);
            if (res.status == true) {
                setdepositHistory(res.data.filter((item) => item.type == 0));

            }
        }
        catch (err) {

        }
    };

    const getinrtousdtprice = () => {

        let headers = {
            // 'Authorization': this.loginData?.authToken,
            'Content-Type': 'application/json'
        }
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&ids=tether&order=market_cap_desc&per_page=100&page=1&sparkline=false', {}, { headers: headers })
            .then(response => {
                console.log("getinrtousdtprice", response.data);

                setliveprice(response.data[0].current_price)


            })

            .catch(err => {
            })

    }



    const inputHandler = (e) => {
        const { name, value, id } = e.target
        setdepositfiat((old) => {
            return { ...old, [name]: value }
        })
    }


    const getbankdetails = async (data) => {
        try {
            let res = await getgetuserbankdetailsAction(data);
            console.log('res', res.success);
            if (res.status == true) {
                setbankdetails(res.data);
            }
        }
        catch (err) {

        }
    };


    const getadminbankdetails = async (data) => {

        // setLoader(true)
        let res = await getAdminBankDetailAction();

        if (res.status == true) {
            // setLoader(false)

            setadminbankdetails(res.data.filter(item => item.id == data.depositFiat))
            // console.log('userDetails.depositFiat',userDetails.depositFiat)
            // console.log('adminbankdetails:',adminbankdetails)
        }
    }

    function validate() {
        let bankError = "";
        let balanceError = "";
        let transaction_idError = "";
        let upload_fileError = "";
        console.log('bankdetails.bank_name', bankdetails.bank_name)
        if (bankdetails.bank_name === '' || bankdetails.bank_name == undefined) {
            bankError = "Bank Name is required."
        }
        if (depositfiat.balance === '') {
            balanceError = "Balance is required."
        }
        if (depositfiat.transaction_id === '') {
            transaction_idError = "Transaction id is required."
        }
        if (image_file === '') {
            upload_fileError = "File is required."
        }
        if (bankError || balanceError || transaction_idError || upload_fileError) {
            setvalidatioError({
                bankError, balanceError, transaction_idError, upload_fileError
            })
            return false
        } else {
            return true
        }
    }


    const updatebankdetails = async (e) => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {
            if (!image_file) {

                depositfiat.old_upload_file = depositfiat?.upload_file;
            }
            else {


                depositfiat.upload_file = image_file;
            }
            depositfiat.admin_bank_id = adminbankdetails[0].id
            depositfiat.bank_name = bankdetails?.bank_name

            let res = await depositFiatAction(depositfiat);
            if (res.status == true) {
                // setTimeout(() => {

                toast.success(res.msg);
                // }, 10000);
                // toast.success(res.msg);
                // setTimeout(() => {
                //     window.location.reload()
                // }, 1000);
            } else {
                toast.error(res.msg);
            }
        }
    };


    const uploadFile = async (e) => {
        e.preventDefault();
        let image_as_base64 = URL.createObjectURL(e.target.files[0]);
        let image_as_files = e.target.files[0];
        setimage_file(image_as_files);
        setimage_preview(image_as_base64);
    };




    return (
        <>
            <div className={`page-wrapper${toggleSet == 1 ? '' : ' toggled'}`}>
                <Dashboardsidebar />
                <div className="main-container">
                    {console.log('userDetails.depositFiat', userDetails.depositFiat)}
                    <Dashboardheader clickToggle={toggleManage} />
                    <div className="content-wrapper-scroll">
                        <div className="content-wrapper">

                            <div className="row">
                                <div className='col-md-12 '>
                                    <div className=' p-3'>
                                        <Toaster />
                                        {purchaseList11.kyc_status == 2 && userDetails.depositFiat ?
                                            <div className='form-body'>
                                                <div className='row'>

                                                    <div className='col-md-6 '>
                                                        <div className='card p-3'>
                                                            <h4>Admin Bank Account</h4>
                                                            <hr class="mt-2" />
                                                            <div className="">
                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Bank Account Holder Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        disabled
                                                                        name="bank_account_holder_name"
                                                                        value={adminbankdetails[0]?.bank_account_holder_name}

                                                                    />
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Branch Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        disabled
                                                                        name="branchName"
                                                                        value={adminbankdetails[0]?.branchName}

                                                                    />
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Bank Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        disabled
                                                                        name="bank_name"
                                                                        value={adminbankdetails[0]?.bank_name}

                                                                    />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Account Number
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        disabled
                                                                        name="AccountNumber"
                                                                        value={adminbankdetails[0]?.AccountNumber}

                                                                    />
                                                                </div>


                                                                <div className="mb-3">
                                                                    <label className="form-label">
                                                                        IFSC Code
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        disabled
                                                                        name="ifsc_code"
                                                                        value={adminbankdetails[0]?.ifsc_code}

                                                                    />
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className='col-md-6'>

                                                        <div className='card p-3'>

                                                            <h4>Deposit</h4>
                                                            <hr class="mt-2" />
                                                            <div className="">
                                                                <form
                                                                    onSubmit={updatebankdetails}>


                                                                    <div className="mb-3">
                                                                        <label

                                                                            className="form-label"
                                                                        >
                                                                            Your Bank
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control" disabled
                                                                            value={bankdetails?.bank_name}

                                                                            name="bank_name"

                                                                        />
                                                                        <span className="validationErr">{validatioError.bankError}</span>

                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <label

                                                                            className="form-label"
                                                                        >
                                                                            Admin Bank
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            disabled
                                                                            name="bank_name"
                                                                            value={adminbankdetails[0]?.bank_name}

                                                                        />
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <label

                                                                            className="form-label"
                                                                        >
                                                                            Amount
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            onChange={inputHandler}
                                                                            value={depositfiat?.balance}
                                                                            name="balance"
                                                                        />
                                                                        <span className="validationErr">{validatioError.balanceError}</span>

                                                                    </div>


                                                                    <div className="mb-3">
                                                                        <label

                                                                            className="form-label"
                                                                        >
                                                                            USDT Amount
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            onChange={inputHandler}
                                                                            value={parseFloat(depositfiat?.balance / liveprice).toFixed(6)}
                                                                        />

                                                                    </div>


                                                                    <div className="mb-3">
                                                                        <label

                                                                            className="form-label"
                                                                        >
                                                                            Date
                                                                        </label>
                                                                        <DatePicker
                                                                            className="form-control"
                                                                            autoComplete={false}
                                                                            onChange={e => handleChangeStart(e)}
                                                                            selected={date}
                                                                            name="start_date"
                                                                        />
                                                                        <span className="validationErr">{validatioError.ifsccodeError}</span>
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <label

                                                                            className="form-label"
                                                                        >
                                                                            Transaction Id
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            onChange={inputHandler}
                                                                            value={depositfiat?.transaction_id}
                                                                            name="transaction_id"

                                                                        />
                                                                        <span className="validationErr">{validatioError.transaction_idError}</span>

                                                                    </div>


                                                                    <div className='col-sm-12'>
                                                                        <div className='row'>

                                                                            <div className='col-lg-6 my-3'>
                                                                                <div class="upload-btn-wrapper">
                                                                                    <button class="btn-upload">{receipt_name == '' ? `Upload File` : `${receipt_name.toString().substring(0, 5) + '...' + receipt_name.toString().substring(receipt_name.length - 5)}`}</button>
                                                                                    <input type="file" accept="image/png, image/gif, image/jpeg,application/pdf" name="receipt" onChange={e => uploadFile(e)} />
                                                                                    {/* {this.state.error.length > 0 && this.state.error[0].name == 'receipt_name' ? <div>
                                                                                    <span className='alert_validation'>{this.state.error[0].err}</span>
                                                                                </div> : ''} */}
                                                                                    <span className="validationErr">{validatioError.upload_fileError}</span>

                                                                                </div>
                                                                            </div>
                                                                            <div className='col-lg-6'>
                                                                                {/* {this.state.spinLoader === '0' ? */}
                                                                                <button className="crypt-button-red-full mt-3" type="submit"  >
                                                                                    Submit
                                                                                </button>
                                                                                {/* :
                                                                                <button className="crypt-button-red-full mt-3">
                                                                                    Loading<i class="fa fa-spinner fa-spin validat"></i>
                                                                                </button> */}
                                                                                {/* } */}
                                                                            </div>
                                                                            {image_preview == "" ? '' : (

                                                                                <img
                                                                                    style={{
                                                                                        height: "150px",
                                                                                        width: "150px",
                                                                                        objectFit: "cover",
                                                                                    }}
                                                                                    id="image"
                                                                                    className="object-cover w-full h-32"
                                                                                    src={image_preview}
                                                                                />

                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>

                                                <div className='row mt-5'>
                                                    <div className='col-lg-12 col-12 '>
                                                        <h4 class="mb-3">Deposit History</h4>
                                                        <ReactDatatable
                                                            config={configForWallet}
                                                            records={depositHistory}
                                                            columns={columnsForWallet}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            :

                                            userDetails.depositFiat == 'null' || userDetails.depositFiat == null || userDetails.depositFiat === '' ?
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="kycStatus">

                                                            <span style={{ color: 'red' }}>
                                                                Admin Didn't assigned any Bank Account for deposit
                                                            </span>





                                                        </div>
                                                    </div>
                                                </div>
                                                :

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="kycStatus">
                                                            {purchaseList11.kyc_status == 3 ?
                                                                <span style={{ color: 'red' }}>
                                                                    Your KYC Is Rejected From Admin Side
                                                                </span> :
                                                                purchaseList11.kyc_status == 1 ?
                                                                    <span style={{ color: '#000' }}>
                                                                        Your KYC Is Pending From Admin Side
                                                                    </span> :
                                                                    <span style={{ color: '#000' }}>
                                                                        For Deposit Firstly You have to Complete Your KYC
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
                </div>
            </div>
        </>
    )
}
export default Deposit;