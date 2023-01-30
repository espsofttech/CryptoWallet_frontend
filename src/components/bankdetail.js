import React, { Component, useEffect, useState } from 'react'
import config from '../config/config';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import ReactDatatable from '@ashvin27/react-datatable'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'
import { getgetadminbankdetailsAction, getgetuserbankdetailsAction, updateupdateuserbankdetailsAction } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';

// const loginData = (!Cookies.get('loginSuccessSilkyExchangeDevelopement')) ? [] : JSON.parse(Cookies.get('loginSuccessSilkyExchangeDevelopement'));

const Bankdetail = () => {
    const dispatch = useDispatch();


    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    console.log(USER_LOGIN_DETAILS)
    const [image_file, setimage_file] = useState("");
    const [image_preview, setimage_preview] = useState("");
    const [image_file2, setimage_file2] = useState("");
    const [image_preview2, setimage_preview2] = useState("");
    const [image_file3, setimage_file3] = useState("");
    const [image_preview3, setimage_preview3] = useState("");
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

    }, []);

    const toggleManage = (data) => {
        settoggleSet(data)
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

    const inputHandler = (e) => {
        const { name, value } = e.target;
        if (bankdetails?.bank_account_holder_name) {
            setbankdetails((old) => {
                return { ...old, [name]: value };
            });
            validatioError.AccountnameError = ''
        } if (bankdetails?.branchName) {
            setbankdetails((old) => {
                return { ...old, [name]: value };
            });
            validatioError.branchnameError = ''
        } if (bankdetails?.bank_name) {
            setbankdetails((old) => {
                return { ...old, [name]: value };
            });
            validatioError.banknameError = ''
        } if (bankdetails?.AccountNumber) {
            setbankdetails((old) => {
                return { ...old, [name]: value };
            });
            validatioError.accountnumberError = ''
        } if (bankdetails?.ifsc_code) {
            setbankdetails((old) => {
                return { ...old, [name]: value };
            });
            validatioError.ifsccodeError = ''
        } if (bankdetails?.panCardno) {
            setbankdetails((old) => {
                return { ...old, [name]: value };
            });
            validatioError.panCardno = ''
        }

        // const { name, value } = e.target;
        setbankdetails((old) => {
            return { ...old, [name]: value };
        });
    };

    function validate() {

        let AccountnameError = "";
        let branchnameError = '';
        let banknameError = '';
        let accountnumberError = '';
        let ifsccodeError = '';
        let pancardnumberError = '';
        let accountTypeError = ''
        if (bankdetails?.bank_account_holder_name == '' || bankdetails?.bank_account_holder_name == undefined) {
            AccountnameError = "Bank Account Holder Name  is required."
        } if (bankdetails?.branchName == '' || bankdetails?.branchName == undefined) {
            branchnameError = "Branch name  is required."
        } if (bankdetails?.bank_name == '' || bankdetails?.bank_name == undefined) {
            banknameError = "Bank name  is required."
        } if (bankdetails?.AccountNumber == '' || bankdetails?.AccountNumber == undefined) {
            accountnumberError = "Account number  is required."
        } if (bankdetails?.ifsc_code == '' || bankdetails?.ifsc_code == undefined) {
            ifsccodeError = "IFSC code  is required."
        } if (bankdetails?.panCardno == '' || bankdetails?.panCardno == undefined) {
            pancardnumberError = "Pancard Number is required."
        }
        if (bankdetails?.accountType == '' || bankdetails?.accountType == undefined) {
            accountTypeError = "Account Type is required."
        }



        if (banknameError || accountnumberError || branchnameError || AccountnameError || ifsccodeError || pancardnumberError || accountTypeError) {
            setvalidatioError({
                banknameError, accountnumberError, branchnameError, ifsccodeError, AccountnameError, pancardnumberError, accountTypeError
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
                console.log('3442')
                bankdetails.old_GSTImage = bankdetails?.GSTImage;
            }
            else {
                console.log('34423333')

                bankdetails.GSTImage = image_file;
            }

            if (!image_file2) {
                bankdetails.old_cancelledChequeImage = bankdetails?.cancelledChequeImage;
            }
            else {
                bankdetails.cancelledChequeImage = image_file2;
            }

            if (!image_file3) {
                bankdetails.old_bankStatementImage = bankdetails?.bankStatementImage;
            }
            else {
                bankdetails.bankStatementImage = image_file3;
            }
            bankdetails.id = USER_LOGIN_DETAILS.template?.id

            let res = await updateupdateuserbankdetailsAction(bankdetails);
            if (res.status == true) {
                // setTimeout(() => {

                toast.success(res.msg);
                // }, 10000);
                // toast.success(res.msg);
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            } else {
                toast.error(res.msg);
            }
        }
    };


    const gstPic = async (e) => {
        e.preventDefault();
        let image_as_base64 = URL.createObjectURL(e.target.files[0]);
        let image_as_files = e.target.files[0];
        setimage_file(image_as_files);
        setimage_preview(image_as_base64);
    };

    const cancelCheque = async (e) => {
        e.preventDefault();
        let image_as_base64 = URL.createObjectURL(e.target.files[0]);
        let image_as_files = e.target.files[0];
        setimage_file2(image_as_files);
        setimage_preview2(image_as_base64);
    };

    const bankStatement = async (e) => {
        e.preventDefault();
        let image_as_base64 = URL.createObjectURL(e.target.files[0]);
        let image_as_files = e.target.files[0];
        setimage_file3(image_as_files);
        setimage_preview3(image_as_base64);
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
                                                <div className='col-md-6'>

                                                    <div className='card p-3'>

                                                        <h4>User Bank detail</h4>
                                                        <hr class="mt-2" />
                                                        <div className="">
                                                            <form
                                                                onSubmit={updatebankdetails}>
                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Bank Account Holder Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={inputHandler}
                                                                        value={bankdetails?.bank_account_holder_name}
                                                                        name="bank_account_holder_name"

                                                                    />
                                                                    <span className="validationErr">{validatioError.AccountnameError}</span>
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
                                                                        onChange={inputHandler}
                                                                        value={bankdetails?.bank_name}

                                                                        name="bank_name"

                                                                    />
                                                                    <span className="validationErr">{validatioError.banknameError}</span>
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
                                                                        onChange={inputHandler}
                                                                        value={bankdetails?.branchName}

                                                                        name="branchName"

                                                                    />
                                                                    <span className="validationErr">{validatioError.branchnameError}</span>
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
                                                                        onChange={inputHandler}
                                                                        value={bankdetails?.AccountNumber}

                                                                        name="AccountNumber"


                                                                    />
                                                                    <span className="validationErr">{validatioError.accountnumberError}</span>
                                                                </div>


                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        IFSC Code
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={inputHandler}
                                                                        value={bankdetails?.ifsc_code}

                                                                        name="ifsc_code"

                                                                    />
                                                                    <span className="validationErr">{validatioError.ifsccodeError}</span>
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Pan Card Number
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={inputHandler}
                                                                        value={bankdetails?.panCardno}

                                                                        name="panCardno"

                                                                    />
                                                                    <span className="validationErr">{validatioError.pancardnumberError}</span>
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Account Type
                                                                    </label>
                                                                    <select className='form-control' onChange={inputHandler}
                                                                        value={bankdetails?.accountType}

                                                                        name="accountType">
                                                                        <option value=''>Select Account Type</option>
                                                                        <option value='Saving Account'>Saving Account</option>
                                                                        <option value='current Account'>current Account</option>
                                                                    </select>
                                                                    <span className="validationErr">{validatioError.accountTypeError}</span>
                                                                </div>
                                                                {bankdetails?.accountType == 'current Account' ?
                                                                    <>

                                                                        <div className="mb-3">
                                                                            <label

                                                                                className="form-label"
                                                                            >
                                                                                Company Name
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                onChange={inputHandler}
                                                                                value={bankdetails?.company_name}

                                                                                name="company_name"

                                                                            />

                                                                        </div>


                                                                        <div className="mb-3">
                                                                            <label className="form-label">
                                                                                GST Image :
                                                                                {bankdetails.GSTImage ?
                                                                                    <a href={config.imageUrl + bankdetails.GSTImage} target="_blank">View</a> : ''
                                                                                }

                                                                            </label>
                                                                            <input
                                                                                name="GSTImage"
                                                                                id="fileInput"
                                                                                accept="image/*"
                                                                                className="choose-file mt-3"
                                                                                type="file"
                                                                                onChange={gstPic}
                                                                            />
                                                                            <span className="validationErr danger">

                                                                            </span>
                                                                        </div>

                                                                        <div className="mb-3">
                                                                            <label className="form-label">
                                                                                Cancelled Cheque Image :
                                                                                {bankdetails.cancelledChequeImage ?
                                                                                    <a href={config.imageUrl + bankdetails.cancelledChequeImage} target="_blank">View</a> : ''

                                                                                }
                                                                            </label>
                                                                            <input
                                                                                name="cancelledChequeImage"
                                                                                id="fileInput"
                                                                                accept="image/*"
                                                                                className="choose-file mt-3"
                                                                                type="file"
                                                                                onChange={cancelCheque}
                                                                            />
                                                                            <span className="validationErr danger">

                                                                            </span>
                                                                        </div>

                                                                        <div className="mb-3">
                                                                            <label className="form-label">
                                                                                Bank Statement Image :
                                                                                {bankdetails.bankStatementImage ?
                                                                                    <a href={config.imageUrl + bankdetails.bankStatementImage} target="_blank">View</a> : ''

                                                                                }
                                                                            </label>
                                                                            <input
                                                                                name="bankStatementImage"
                                                                                id="fileInput"
                                                                                accept="image/*"
                                                                                className="choose-file mt-3"
                                                                                type="file"
                                                                                onChange={bankStatement}
                                                                            />
                                                                            <span className="validationErr danger">

                                                                            </span>
                                                                        </div>
                                                                    </> : ''
                                                                }


                                                                <div className=" mx-10  mt-20">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-primary pt-2 pb-2 mx-20 btn-md col-lg-12  "
                                                                    >
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='col-md-6 '>
                                                    <div className='card p-3'>
                                                        <h4>Admin Bank detail</h4>
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
export default Bankdetail;