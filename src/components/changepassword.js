import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import { updatePasswordAction } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'

const Changepassword = () => {

    const dispatch = useDispatch();

    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    console.log(USER_LOGIN_DETAILS)
    
    const [toggleSet, settoggleSet] = useState(1)
    const [passwordType, setPasswordType] = useState("password");
    const [form, setForm] = useState({ email:USER_LOGIN_DETAILS.template.email, old_password: '', password: '', confirm_password: '' })
    const [validatioError, setvalidatioError] = useState({});

    const inputHandler = (e) => {
        const { name, value, id } = e.target
        setForm((old) => {
            return { ...old, [name]: value }
        })

        if (value != '') {
            setvalidatioError((old) => {
                return { ...old, [id]: '' }
            })
        }
    }

    function validate() {
        let passwordError = "";
        let confirmPasswordError = "";
        let oldPasswordError = ""

        if (form.old_password === '') {
            oldPasswordError = "Old password is required."
        }
        if (form.password === '') {
            passwordError = "Password is required."
        }
        if (form.confirm_password === '') {
            confirmPasswordError = "Confirm password is required."
        }
        if (form.password != form.confirm_password && (form.password && form.confirm_password)) {
            confirmPasswordError = "Password and confirm password does not match."
        }
        if (oldPasswordError || passwordError || confirmPasswordError) {
            setvalidatioError({
                oldPasswordError, passwordError, confirmPasswordError
            })
            return false
        } else {
            return true
        }
    }

    const SubmitForm = async (e) => {
        e.preventDefault()
        const isValid = validate();
        console.log('Formmmmmmmmm',form)
        try {
            if (!isValid) {

            }
            else {
                let res = await updatePasswordAction(form);

                if (res.status == true) {
                    toast.success(res.msg);
                    // setTimeout(() => {
                    //     window.location.reload();
                    // }, 2000);
                } else {
                    toast.error(res.msg);
                }
            }
        }
        catch (err) {
            toast.error(err.response.data.msg);
        }
    }

    const toggleManage = (data) => {
        settoggleSet(data)
    }

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
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
                                <div className="row justify-content-center">

                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pt-5">
                                        <div className='buyform changepassword'>
                                            <span className="text-left text-black" style={{ display: 'flex', flex: '1 1 auto', justifyContent: "center" }}>
                                                <strong style={{ fontSize: "22px" }}>Change Password</strong></span>
                                            <div className="sc-kcDeIU cvqsCp">
                                                <div className=''>
                                                    <div className="form-group mb-4">
                                                        <label className="mb-2 mt-2">Change Your Login Password</label>

                                                        <div className='form-group mb-4 boxboder'>
                                                            <input type="password" name="old_password" onChange={inputHandler} id='oldPasswordError' autoComplete="off" placeholder='Enter old password' className='form-control' />
                                                            <span className="validationErr">{validatioError.oldPasswordError}</span>
                                                        </div>

                                                        <div className="input-group boxboder">

                                                            <input type={passwordType} name="password" autoComplete="off" onChange={inputHandler} id='passwordError' className="form-control text-black" aria-label="Enter New Password" aria-describedby="basic-addon2" placeholder="Enter New Password" />
                                                            <div className="input-group-append">
                                                                {/* <button className="btn btn-outline-secondary btn-sm" type="button"><i onClick={togglePassword} className={passwordType == 'password' ? 'fa fa-eye' : 'fa fa-eye-slash'} style={{ fontSize: "15px", margin: "0" }}></i></button> */}
                                                            </div>
                                                        </div>
                                                        <span className="validationErr">{validatioError.passwordError}</span>
                                                    </div>
                                                    <div className='form-group mb-4 boxboder'>
                                                        <input type={passwordType} name="confirm_password" id='confirmPasswordError' autoComplete="off" onChange={inputHandler} placeholder='Confirm New Password' className='form-control' />
                                                        <span className="validationErr">{validatioError.confirmPasswordError}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sc-CtfFt bxUreM" id="token-buy-button" onClick={SubmitForm}  >Submit</div>
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
export default Changepassword