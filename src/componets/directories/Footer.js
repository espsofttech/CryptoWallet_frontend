import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Offcanvas,Nav,NavDropdown,Form,Button,Row,Col } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
<footer className="footer-wrap">
    
  <Container>
    <Row className=" pt-60 ">
      <Col lg={3}>
        <a className="logo" href="#">
          <img src="images/logo.png" width={"170px"}/>
         
        </a>
        <p>Lorem ipsum  consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
        <ul className="social-profile style2 list-style "><a className="logo" href="#">
          </a><li><a className="logo" href="#">
            </a><a target="_blank" href="#"><img src="images/facebook.png" /></a></li><li><a target="_blank" href="#"><img src="images/instagram.png" /></a></li><li><a target="_blank" href="#"><img src="images/twitter.png" /></a></li><li><a target="_blank" href="#"><img src="images/linkedin.png" /></a></li></ul>
      </Col>
      <Col lg={3}>
        <div className="footer-widget pl-lg-4">
          <h3 className="footer-widget-title">Product</h3>
          <ul className="footer-menu list-style">
            {/* <li><a href="#" target="_blank">Markets</a></li> */}
            <li><a href="#" target="_blank">Buy Crypto</a></li>
            <li><a href="#" target="_blank">Sell Crypto</a></li>
           
          </ul>
        </div>
      </Col>
      <Col lg={3}>
        <div className="footer-widget pl-lg-4">
          <h3 className="footer-widget-title">Service</h3>
          <ul className="footer-menu list-style">
            <li><a href="#" target="_blank">About</a></li>
            <li><a href="#" target="_blank">FAQ</a></li>
            <li><a href="#" target="_blank">Privacy Policy</a></li>
            <li><a href="#" target="_blank">Support</a></li>
          </ul>
        </div>
      </Col>
      <Col lg={3}>
        <div className="footer-widget">
          <h3 className="footer-widget-title">Contact Us</h3>
          <ul className="contact-info list-style">
            <li>
              <i className="fa fa-envelope" />
              <h6>Email</h6>
              <a href="#"><span className>hello@cryptowallet.com</span></a>
            </li>
            <li>
              <i className="fa fa-globe" />
              <h6>Location</h6>
              <p>2767 Sunrise Street, NY 1002, USA</p>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
    <Row className=" pt-10 pb-20">
    <Col lg={6}>
        <p className="copyright-text">© Copyright 2022 -  <a href="#" target="_blank" className="">Crypto Wallet</a></p>
      </Col>
      <Col lg={6}>
        </Col>
    </Row>
  </Container>
</footer>
</>
)
}
export default Footer