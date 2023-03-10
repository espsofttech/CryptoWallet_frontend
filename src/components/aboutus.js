import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { getAboutListAction } from '../Action/user.action';

const Aboutus = () => {


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
            {/* {console.log('333333333333',form.Aboutus)} */}
             <div class="breadcrumb-wrap bg-light-blue text-center pt-5 pb-5">
                <div class="container">
                    <div class="breadcrumb-title">
                        <h2 class="text-black">About us</h2>
                    </div>
                </div>
            </div>
           
            <div className=" ptb-30 ">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <div className="text-block">
                                
                            <span dangerouslySetInnerHTML={{ __html: form.Aboutus}} ></span>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="video-block rounded">
                                <img src="images/video-md-a.jpg" width="100%" className="img-shadow"/>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <Footer />
        </>
    )
}
export default Aboutus