import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Header from "./directories/Header";
import Footer from "./directories/Footer";
import { Zoom} from 'react-reveal';

const Login = () => {
    return (
        <>
            <Header />
            <div className="Login-wrap ptb-30 mt-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="">
                            <Zoom>
                            <div className="login-form-wrap ">
                                <div class="login-header text-center"><h2>Login</h2></div>
                                <div className="login-body mt-4">
                                    <Form>
                      
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><img src="images/send.png" /></InputGroup.Text>
                                            <Form.Control
                                                placeholder="Email Address"
                                                aria-label="Email Address"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                 
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><img src="images/key.png" /></InputGroup.Text>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                aria-label="Password"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>


                                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                        <Row className=" mt-4">
                                            <Col lg={6}>
                                                <button className="btn style1 btn-rounded" type="submit">
                                                    Login
                                                </button>
                                            </Col>
                                            <Col lg={6} className="text-right">
                                                <span><a href="#" class="link style1 text-black">Forgot Password?</a></span>
                                            </Col>
                                            <Col lg={12} className="text-center mt-4">
                                                <span class="mb-0">New user? &nbsp;<a class="link" href="#">Register</a></span>
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