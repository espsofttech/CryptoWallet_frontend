import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom} from 'react-reveal';

const Contactus = () => {
    return (
        <>
            <Header />
             <div class="breadcrumb-wrap bg-light-blue text-center pt-5 pb-5">
                <div class="container">
                    <div class="breadcrumb-title">
                        <h2 class="text-black">Contact us</h2>
                    </div>
                </div>
            </div>
            <div className=" ptb-30 ">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="contact-img">
                            <lottie-player src="https://lottie.host/7d92d700-c90c-4b26-a02c-76ded74b2269/1accEoqjxi.json" background="transparent" speed={1} style={{"width":"100%","height":"100%"}} loop autoPlay />
                            

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="contact-form">
                               <div class="content-title mb-20"><h3>Contact Us</h3></div>
                               <Form>
                               <Form.Group className="mb-3">

                                                <Form.Control
                                                    placeholder="Name"
                                                    aria-label="Name"
                                                    aria-describedby="basic-addon1"
                                                    autoComplete="off" name="name" 
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">

                                                <Form.Control
                                                    placeholder="Email Address"
                                                    aria-label="Email Address"
                                                    aria-describedby="basic-addon1"
                                                    autoComplete="off" name="email" 
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
 
                                                <Form.Control
                                                    placeholder="Phone"
                                                    aria-label="Phone"
                                                    aria-describedby="basic-addon1"
                                                    autoComplete="off" name="Phone" 
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                           
                                                <Form.Control
                                                    placeholder="Subject"
                                                    aria-label="Subject"
                                                    aria-describedby="basic-addon1"
                                                    autoComplete="off" name="Subject" 
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                           
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>
                                            <Button className="btn style1"  type="submit">
                                                        Submit
                                                    </Button>
                               </Form>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer />
        </>
    )
}
export default Contactus