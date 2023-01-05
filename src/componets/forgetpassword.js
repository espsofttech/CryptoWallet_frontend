import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom} from 'react-reveal';

const Forgetpassword = () => {
    return (
        <>
            <Header />
            <div className="Login-wrap ptb-30 mt-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="">
                            <Zoom>
                            <div className="login-form-wrap ">
                                <div class="login-header text-center"><h2>Forget password</h2></div>
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