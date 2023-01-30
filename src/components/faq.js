import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup, Accordion } from 'react-bootstrap';
import Header from "./directives/Header";
import Footer from "./directives/Footer";
import { getFaqListAction } from '../Action/user.action';

const Faq = () => {

  const [faqList, setfaqList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getFaqList();

  }, [])

  const getFaqList = async () => {

    setLoader(true)
    let res = await getFaqListAction();

    if (res.status == true) {
      setLoader(false)
      setfaqList(res.data)
    }
  }

  return (
    <>
      <Header />
      <div class="breadcrumb-wrap bg-light-blue text-center pt-5 pb-5">
        <div class="container">
          <div class="breadcrumb-title">
            <h2 class="text-black">FAQ</h2>
          </div>
        </div>
      </div>
      <div className=" ptb-30 ">
        <Container>

          <Row className="justify-content-center">
            <Col lg={12}>
              <Accordion>

                {faqList.map((item) => {
                  return (
                    <Accordion.Item eventKey={item.id}>
                      <Accordion.Header>{item.Questions}</Accordion.Header>
                      <Accordion.Body>
                        {item.Answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  )

                })}
              </Accordion>

            </Col>


          </Row>
        </Container>

      </div>
      <Footer />
    </>
  )
}
export default Faq