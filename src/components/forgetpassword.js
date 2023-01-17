import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, FormGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom } from 'react-reveal';
import { ForgotPasswordAction } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';
import config from '../config/config';

import { Link, useNavigate, useParams } from 'react-router-dom';

const Forgetpassword = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: '' })
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
                let res = await ForgotPasswordAction(form);
                if (res.status === true) {
                    toast.success(res.msg);
                    setTimeout(() => {
                        navigate(config.baseUrl + 'login')
                    }, 2000)
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


    return (
        <>
            <Header />
            <Toaster />

            <div className="Login-wrap ptb-30 mt-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="">
                            <Zoom>
                                <div className="login-form-wrap ">
                                    <div class="login-header text-center"><h2>Forgot password</h2></div>
                                    <div className="login-body mt-4">
                                        <Form onSubmit={SubmitForm}>
<FormGroup className="mb-3">
                                            <InputGroup >
                                                <InputGroup.Text id="basic-addon1"><img src="images/send.png" /></InputGroup.Text>
                                                <Form.Control
                                                    placeholder="Email Address"
                                                    aria-label="Email Address"
                                                    aria-describedby="basic-addon1"
                                                    name="email" onChange={inputHandler}
                                                />
                                            </InputGroup>
                                            <span className="validationErr">{validatioError.emailError}</span>
                                            </FormGroup>


                                            <Row className=" mt-4">
                                                <Col lg={12} className="text-center">
                                                    <button className="btn style1 btn-rounded" type="submit">
                                                        Reset
                                                    </button>
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
export default Forgetpassword