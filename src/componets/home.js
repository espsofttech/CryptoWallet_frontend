import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import Header from "./directories/Header";

const Home = () =>{
    return(
        <>
        <Header/>
        <section className="hero-section">
            <Container>
                <Row>
                  hello
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Home