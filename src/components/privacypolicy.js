import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { getAboutListAction } from '../Action/user.action';

const Privacypolicy = () => {

    const [form, setForm] = useState([]);

    useEffect(() => {
        getAboutList();

    }, [])


    const getAboutList = async () => {
        let res = await getAboutListAction();
        if (res.status == true) {    
            setForm(res.data)
        }
    }


    return (
        <>
            <Header />
            <div class="breadcrumb-wrap bg-light-blue text-center pt-5 pb-5">
                <div class="container">
                    <div class="breadcrumb-title">
                        <h2 class="text-black">Privacy Policy</h2>
                    </div>
                </div>
            </div>
            <div className=" ptb-30 ">
                <Container>
                    
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-block">
                            <span dangerouslySetInnerHTML={{ __html: form.privacy_policy}} ></span>

                            </div>
                        </Col>
       
                       
                    </Row>
                </Container>

            </div>
            <Footer />
        </>
    )
}
export default Privacypolicy