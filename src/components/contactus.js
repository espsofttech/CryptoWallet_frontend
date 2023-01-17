import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { Zoom } from 'react-reveal';
import { Link, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { ContactFormAction } from '../Action/user.action';
import config from '../config/config';
const Contactus = () => {

    const [form, setForm] = useState({ Name: '', email: '', phone: '', subject: '', message: '' })
    const [validatioError, setvalidatioError] = useState({ nameError: '', emailError: '', phoneError: '', subjectError: '', messageError: '' });
    let { referral_address } = useParams();

    useEffect(() => {

    }, []);

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
        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let subjectError = "";
        let messageError = "";

        if (form.name === '') {
            nameError = "Name is required."
        }
        if (form.email === '') {
            emailError = "Email is required."
        }
        if (form.phone === '') {
            phoneError = "Phone is required."
        }
        if (form.subject === '') {
            subjectError = "Subject is required."
        }
        if (form.message === '') {
            messageError = "Message is required."
        }
        if (nameError || emailError || phoneError || subjectError || messageError) {
            setvalidatioError({
                nameError, emailError, phoneError, subjectError, messageError
            })
            return false
        } else {
            return true
        }
    }

    const SubmitForm = async (e) => {
        e.preventDefault()
        const isValid = validate();
        if (!isValid) {

        }
        else {
            let res = await ContactFormAction(form);
            if (res.status == true) {
                toast.success(res.msg);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                toast.error(res.msg);
            }
        }
    }

    return (
        <>
            <Header />
            <Toaster/>
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
                                <lottie-player src="https://lottie.host/7d92d700-c90c-4b26-a02c-76ded74b2269/1accEoqjxi.json" background="transparent" speed={1} style={{ "width": "100%", "height": "100%" }} loop autoPlay />


                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="contact-form">
                                <div class="content-title mb-20"><h3>Contact Us</h3></div>
                                <Form onSubmit={SubmitForm}>
                                    <Form.Group className="mb-3">

                                        <Form.Control
                                            onChange={inputHandler}
                                            name="Name"
                                            placeholder="Name"
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                            autoComplete="off"
                                        />
                                        <span className="validationErr">{validatioError.nameError}</span>

                                    </Form.Group>
                                    <Form.Group className="mb-3">

                                        <Form.Control
                                          onChange={inputHandler}
                                            placeholder="Email Address"
                                            aria-label="Email Address"
                                            aria-describedby="basic-addon1"
                                            autoComplete="off" name="email"
                                        />
                                         <span className="validationErr">{validatioError.emailError}</span>
                                    </Form.Group>
                                    <Form.Group className="mb-3">

                                        <Form.Control
                                          onChange={inputHandler}
                                            placeholder="Phone"
                                            aria-label="Phone"
                                            aria-describedby="basic-addon1"
                                            autoComplete="off" name="phone"
                                        />
                                         <span className="validationErr">{validatioError.phoneError}</span>
                                    </Form.Group>
                                    <Form.Group className="mb-3">

                                        <Form.Control
                                        onChange={inputHandler}
                                            placeholder="Subject"
                                            aria-label="Subject"
                                            aria-describedby="basic-addon1"
                                            autoComplete="off"   name="subject"
                                        />
                                                    <span className="validationErr">{validatioError.subjectError}</span>

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                        <Form.Control
                                         name="message"
                                         onChange={inputHandler} as="textarea"  placeholder="Your Messages.." rows={3} />
                                          <span className="validationErr">{validatioError.messageError}</span>
                                    </Form.Group>
                                    <Button className="btn style1" type="submit">
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