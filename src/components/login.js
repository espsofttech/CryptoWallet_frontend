import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, FormGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom } from 'react-reveal';
import { LoginAction, verifyAccountAction } from '../Action/user.action';
import config from "../config/config"
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux'
import * as ACTIONTYPES from '../../src/redux/actionTypes'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({ email: '', password: '' })
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
            console.log(err.response)
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
        let emailError = "";
        let passwordError = "";

        if (form.email === '') {
            emailError = "Email is required."
        }
        if (form.password === '') {
            passwordError = "Password is required."
        }


        if (emailError || passwordError) {
            setvalidatioError({
                emailError, passwordError
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
                let res = await LoginAction(form);
                if (res?.data?.is_admin == 0) {
                    toast.error('User not found');
                }
                else {
                    if (res.status == true) {
                        toast.success(res.msg);
                        dispatch({
                            type: ACTIONTYPES.USER_FORM, payload: {
                                template: res.data,
                                token: res.token
                            }
                        })

                        // Cookies.set('loginSuccessMrMint', JSON.stringify(res.data));
                        // Cookies.set('loginType', loginType);

                        // Cookies.set('loginSuccessMrMint', JSON.stringify(res.data), { domain: 'nft.mrmint.io' });
                        // Cookies.set('loginType', loginType, { domain: 'nft.mrmint.io' });

                        setTimeout(() => {
                            window.location.href = `${config.baseUrl}dashboard`;
                        }, 2000);
                    }
                    // if (res.success == false) {
                    //     toast.error(res.msg);
                    // }
                    else {
                        toast.error(res.msg);
                    }
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
                                    <div class="login-header text-center"><h2>Login</h2></div>
                                    <div className="login-body mt-4">
                                        <Form>
                                            <FormGroup className="mb-3">
                                                <InputGroup>
                                                    <InputGroup.Text id="basic-addon1"><img src="images/send.png" /></InputGroup.Text>
                                                    <Form.Control
                                                        placeholder="Email Address"
                                                        aria-label="Email Address"
                                                        aria-describedby="basic-addon1"
                                                        autoComplete="off" name="email" onChange={inputHandler}
                                                    />
                                                </InputGroup>
                                                <span className="validationErr">{validatioError.emailError}</span>
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                                <InputGroup >
                                                    <InputGroup.Text id="basic-addon1"><img src="images/key.png" /></InputGroup.Text>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        aria-label="Password"
                                                        aria-describedby="basic-addon1"
                                                        autoComplete="off" name="password" onChange={inputHandler}
                                                    />
                                                </InputGroup>
                                                <span className="validationErr">{validatioError.passwordError}</span>
                                            </FormGroup>
                                            <Row className=" mt-4">
                                                <Col lg={6}>
                                                    <button className="btn style1 btn-rounded" onClick={SubmitForm} type="submit">
                                                        Login
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
export default Login