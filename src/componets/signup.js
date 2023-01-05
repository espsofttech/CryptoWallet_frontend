import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom} from 'react-reveal';

const Signup = () => {
    return (
        <>
            <Header />
            <div className="Login-wrap ptb-30 ">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="">
                            <Zoom>
                            <div className="login-form-wrap ">
                                <div class="login-header text-center"><h2>Register</h2></div>
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
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><img src="images/key.png" /></InputGroup.Text>
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm password"
                                                aria-label="Confirm password"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>


                                       
                                        <Row className=" mt-4">
                                            <Col lg={7}>
                                                 <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox"  />&nbsp;
                                                    <span>I accept to the <u>Terms and Conditions</u> </span>
                                                </Form.Group>
                                                {/* <button className="btn style1 btn-rounded" type="submit">
                                                    Submit
                                                </button> */}
                                            </Col>
                                            <Col lg={5} className="text-right">
                                            <span>Registered user? <a href="#" class="link style1">Login</a></span>
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