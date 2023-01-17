import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, FormGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom } from 'react-reveal';
import { RegisterAction } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';
import config from '../config/config';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: '', password: '', confirm_password: '', termscondition: false })
    const [validatioError, setvalidatioError] = useState({ firstNameError: '', lastNameError: '', emailError: '' });


    const inputHandler = (e) => {
        const { name, value, id } = e.target
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
        let confirmPasswordError = "";
        let termsconditionError = "";


        if (form.email === '') {
            emailError = "Email is required."
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
        if (form.termscondition === false) {
            termsconditionError = "Checkbox is required."
        }


        if (emailError || passwordError || confirmPasswordError || termsconditionError) {
            setvalidatioError({
                emailError, passwordError, confirmPasswordError, termsconditionError
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
                let res = await RegisterAction(form);
                if (res.status == true) {
                    toast.success(res.msg);
                    setTimeout(() => {
                        window.location.href = `${config.baseUrl}login`
                    }, 2000);
                } else {
                    toast.error(res.msg);
                }
            }
        }
        catch (err) {
            console.log(err.response)
            toast.error(err.response.data.msg);
        }

    }


    const navigation = async () => {
        navigate(config.baseUrl + 'login')
    }

    return (
        <>
            <Header />
            <div className="Login-wrap ptb-30 ">
                <Toaster />

                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="">
                            <Zoom>
                                <div className="login-form-wrap ">
                                    <div class="login-header text-center"><h2>Register</h2></div>
                                    <div className="login-body mt-4">
                                        <Form onSubmit={SubmitForm}>
                                           <FormGroup className="mb-3">
                                            <InputGroup className="">
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
                                            <InputGroup className="">
                                                <InputGroup.Text id="basic-addon1"><img src="images/key.png" /></InputGroup.Text>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    aria-label="Password"
                                                    aria-describedby="basic-addon1"
                                                    name="password" autoComplete="off" onChange={inputHandler}
                                                />
                                            </InputGroup>
                                            <span className="validationErr">{validatioError.passwordError}</span>
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                            <InputGroup className="">
                                                <InputGroup.Text id="basic-addon1"><img src="images/key.png" /></InputGroup.Text>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    aria-label="Confirm password"
                                                    aria-describedby="basic-addon1"
                                                    name="confirm_password" onChange={inputHandler}
                                                />

                                            </InputGroup>
                                            <span className="validationErr">{validatioError.confirmPasswordError}</span>
                                            </FormGroup>


                                            <Row className=" mt-4">
                                                <Col lg={7}>
                                                    <Form.Group className="mb-0 d-flex" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" onChange={inputHandler} name="termscondition" />&nbsp;
                                                        <span>I accept to the <u>Terms and Conditions</u> </span>
                                                    </Form.Group>
                                                    <span className="validationErr">{validatioError.termsconditionError}</span>
                                                    {/* <button className="btn style1 btn-rounded" type="submit">
                                                    Submit
                                                </button> */}
                                                </Col>
                                                <Col lg={5} className="text-right">
                                                    <span>Registered user? <a onClick={e => navigation()} href="javascript:void(0)" class="link style1">Login</a></span>
                                                </Col>
                                                <Col lg={12} className="text-center mt-4">
                                                    <button class="btn style1 btn-rounded" type="submit">Signup</button>
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
export default Signup