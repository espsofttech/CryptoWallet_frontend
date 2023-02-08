import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, FormGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom } from 'react-reveal';
import { twoAuthenticationVerifyAction, verifyAccountAction } from '../Action/user.action';
import config from "../config/config"
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'

const Twofactor = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const USER_LOGIN_DETAILS_DATA = useSelector((state) => state.auth.USER_LOGIN_DETAILS_DATA)
    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)
    
    const [form, setForm] = useState({ SecretKey: '' })
    const [validatioError, setvalidatioError] = useState({});
    const [loginType, setloginType] = useState('');
    const [isCaptcha, setisCaptcha] = useState(0);
    const [islogin, setislogin] = useState(false);
    let { token } = useParams();


    useEffect(() => {
        if (token) {
            verifyAccountAPI()
        }

        let url = window.location.href;
        let result = url.split('/');
        let Param = result[result.length - 1];

        setloginType(loginType);

    }, []);

    const verifyAccountAPI = async () => {
        let res = await verifyAccountAction({ 'token': token });
        try {
            if (res.status == true) {
                toast.success(res.msg);
                setTimeout(() => {
                    window.location.href = `${config.baseUrl}login`;
                }, 1000);
            } else {
                toast.error(res.msg);
            }
        }
        catch (err) {
            
            toast.error(err.response.data.msg);
        }
    }

    const inputHandler = (e) => {
        const { name, value, id } = e.target;

        if (value != '') {
            setvalidatioError((old) => {
                return { ...old, [id]: '' }
            })
        }

        setForm((old) => {
            return { ...old, [name]: value }
        })
    }


    function validate() {
        let secretkeyError = "";

        if (form.SecretKey === '') {
            secretkeyError = "SecretKey is required."
        }

        if (secretkeyError) {
            setvalidatioError({
                secretkeyError
            })
            return false
        } else {
            return true
        }
    }



    const SubmitForm = async (e) => {
        e.preventDefault()
        const isValid = validate();
        try {
            if (!isValid) {


            }
            else {

                let userData = {
                    "email": USER_LOGIN_DETAILS_DATA.template.email, "user_id": USER_LOGIN_DETAILS_DATA.template.id, 'SecretKey': form.SecretKey, 'enableTwoFactor': 1
                }

                let res = await twoAuthenticationVerifyAction(userData);
                if (res.success == true) {
                    toast.success('2FA Authentication Success Now you can Login!');
                    dispatch({
                        type: ACTIONTYPES.USER_FORM, payload: {
                            template: USER_LOGIN_DETAILS_DATA.template,
                            token: USER_LOGIN_DETAILS_DATA.token
                        }
                    })
                    setTimeout(() => {
                        window.location.href = `${config.baseUrl}dashboard`;
                    }, 2000);
                } else {
                    toast.error('Wrong Code');
                }
            }
        }

        catch (err) {
            toast.error(err.response.data.msg);
        }



    }



    const navigation = async (id) => {
        if (id == 'Register') {
            navigate(config.baseUrl + 'signup')
        }
        else if (id == 'Forgot') {
            navigate(config.baseUrl + 'forgetpassword')
        }
    }


    return (
        <>
            <Header />
            <Toaster />

            <div className="Login-wrap ptb-30 ">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="">
                            <Zoom>
                                <div className="login-form-wrap ">

                                    <div class="login-header text-center"><h5>Google Authentication</h5></div>

                                    <div class="login-header text-center"><h5>Please Type code to continue</h5></div>
                                    <div className="login-body mt-4">
                                        <Form>

                                            <FormGroup className="mb-3">
                                                <InputGroup >
                                                    <InputGroup.Text id="basic-addon1"><img src="images/key.png" /></InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="SecretKey"
                                                        aria-label="SecretKey"
                                                        aria-describedby="basic-addon1" value={form.SecretKey}
                                                        autoComplete="off" name="SecretKey" onChange={inputHandler}
                                                    />
                                                </InputGroup>
                                                <span className="validationErr">{validatioError.secretkeyError}</span>
                                            </FormGroup>
                                            <Row className=" mt-4">
                                                <Col lg={6}>
                                                    <button className="btn style1 btn-rounded" onClick={SubmitForm} type="submit">
                                                        Submit
                                                    </button>
                                                </Col>
                                                <Col lg={6} className="text-right">
                                                    <span><a onClick={e => navigation('Forgot')} href="javascript:void(0)" class="link style1 text-black">Forgot Password?</a></span>
                                                </Col>
                                                <Col lg={12} className="text-center mt-4">
                                                    <span class="mb-0">New user? &nbsp;<a class="link" onClick={e => navigation('Register')} href="javascript:void(0)">Register</a></span>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                            </Zoom>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer />
        </>
    )
}
export default Twofactor