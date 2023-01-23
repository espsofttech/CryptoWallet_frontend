import React, { Component, useEffect, useState } from 'react'
import config from '../config/config';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'
import { depositFiatAction, getgetuserbankdetailsAction, updateupdateuserbankdetailsAction } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
// const loginData = (!Cookies.get('loginSuccessSilkyExchangeDevelopement')) ? [] : JSON.parse(Cookies.get('loginSuccessSilkyExchangeDevelopement'));

const Deposit = () => {
    const dispatch = useDispatch();


    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    console.log(USER_LOGIN_DETAILS)


    const [receipt, setreceipt] = useState('')
    const [receipt_name, setreceipt_name] = useState('')
    const [depositfiat, setdepositfiat] = useState({
        'user_id': USER_LOGIN_DETAILS.template.id,
        'coin_id': 5,
        'balance': '',
        'status': 0,
        'bank_name': '',
        'admin_bank_id': '',
        'upload_file': '',
        'transaction_id': ''
    })
    const [liveprice, setliveprice] = useState(0)
    const [date, setdate] = useState(new Date())






    const [image_file, setimage_file] = useState("");
    const [image_preview, setimage_preview] = useState("");
    const [kycdetails, setkycdetails] = useState({
        GSTImage: ''
    });
    const [toggleSet, settoggleSet] = useState(1)
    const [bankdetails, setbankdetails] = useState([]);
    const [adminbankdetails, setadminbankdetails] = useState([]);
    const [validatioError, setvalidatioError] = useState(false);
    useEffect(() => {
        // console.log(loginData)
        getbankdetails({ id: USER_LOGIN_DETAILS.template.id });
        getadminbankdetails({ id: 1 });
        getinrtousdtprice()

    }, []);

    const toggleManage = (data) => {
        settoggleSet(data)
    }

    const handleChangeStart = (date) => {
        setdate(date)
    }




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
        let res = await getgetuserbankdetailsAction(data);
        if (res) {
            setadminbankdetails(res.data);
        }
    };



    const updatebankdetails = async (e) => {
        e.preventDefault();

        // const isValid = validate();

        // if (isValid) {
        if (!image_file) {
            console.log('3442')
            depositfiat.old_upload_file = depositfiat?.upload_file;
        }
        else {
            console.log('34423333')

            depositfiat.upload_file = image_file;
        }
        depositfiat.admin_bank_id = adminbankdetails.id
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
        // }
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
                    <Dashboardheader clickToggle={toggleManage} />
                    <div className="content-wrapper-scroll">
                        <div className="content-wrapper">

                            <div className="row">
                                <div className='col-md-12 '>
                                    <div className=' p-3'>
                                        <Toaster />
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
                                                                    value={adminbankdetails?.bank_account_holder_name}

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
                                                                    value={adminbankdetails?.branchName}

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
                                                                    value={adminbankdetails?.bank_name}

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
                                                                    value={adminbankdetails?.AccountNumber}

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
                                                                    value={adminbankdetails?.ifsc_code}

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
                                                                        value={adminbankdetails?.bank_name}

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
                                                                    </div>
                                                                </div>
                                                            </form>
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
                </div>
            </div>
        </>
    )
}
export default Deposit;