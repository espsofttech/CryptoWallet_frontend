import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./directories/Header";
import CountUp, { useCountUp } from "react-countup";
const Home = () => {
    return (
        <>
            <Header />
            <section className="hero-section">
                <Container className="px-5">
                    <Row className="d-flex align-items-center">
                        <Col md={6}>
                            <div className="hero-text">
                                <h1>   Jump Start Your <span>Crypto</span> Portfolio</h1>
                                <p>Crypto Wallet is The Easiest Place To Buy And Sell Cryptocurrency. Sign Up And Get Started Today.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="hero-video">
                                <video  height="440" loop="true" autoplay="true" muted>
                                    <source src="images/hero.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="headings">
                                <h2>Create your cryptocurrency portfolio today</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="chart">
                                <img src="images/chart.png" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div class="about-content">
                                <div class="feature-item-wrap">
                                    <div class="feature-item">
                                        <div class="feature-icon">
                                            <img src="images/icons/linechart.png" />
                                        </div><div class="feature-text">
                                            <h3>Manage your portfolio</h3>
                                            <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                        </div>
                                    </div>
                                    <div class="feature-item">
                                        <div class="feature-icon">
                                            <img src="images/icons/user.png" />
                                        </div><div class="feature-text">
                                            <h3>Recurring buys</h3>
                                            <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                        </div></div><div class="feature-item">
                                        <div class="feature-icon">
                                            <img src="images/icons/carbon_application-mobile.png" />
                                        </div><div class="feature-text">
                                            <h3>Mobile apps</h3>
                                            <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="headings">
                                <h2>The most trusted cryptocurrency platform</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row className="d-flex align-items-center">
                                <Col md={6}>
                                    <div class="feature-card style2 mb-4 yellowplate">
                                        <div class="feature-icon">
                                            <img src="images/icons/lock.png" />
                                        </div>
                                        <h3><b>Secure storage</b></h3>
                                        <p>The purpose of lorem ipsum is to create a natural looking block of text the layout.</p>
                                    </div>
                                    <div class="feature-card style2 mb-4 pinkplate">
                                        <div class="feature-icon">
                                            <img src="images/icons/network.png" />
                                        </div>
                                        <h3><b>Industry best practices</b></h3>
                                        <p>The purpose of lorem ipsum is to create a natural looking block of text the layout.</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div class="feature-card style2 mb-4 greenplate">
                                        <div class="feature-icon">
                                            <img src="images/icons/secure.png" />
                                        </div>
                                        <h3><b>Protected by insurance</b></h3>
                                        <p>We store the vast majority of the digital assets in secure offline storage.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <div className="side-image">
                                <img src="images/icons/platform.png" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="count-box">
                                <Row>
                                    <Col md={4}>
                                        <div className="count-card">
                                            <h3>$ <CountUp end={3000} enableScrollSpy /></h3>
                                            <p>Quarterly Volume Traded</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="count-card">
                                            <h3>$ <CountUp end={500} enableScrollSpy /></h3>
                                            <p>Quarterly Volume Traded</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="count-card">
                                            <h3><CountUp end={100} enableScrollSpy />+</h3>
                                            <p>Countries Supported</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="headings">
                                <h2>Get started in a few minutes</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="getstart">
                                <div class="feature-icon">
                                    <img src="images/icons/bx-user-plus.png" />
                                </div>
                                <h4>Create an account</h4>
                            </div>
                            <div className="getstart">
                                <div class="feature-icon">
                                    <img src="images/icons/bx-rocket.png" />
                                </div>
                                <h4>Start buying & selling</h4>
                            </div>
                            <div className="getstart">
                                <div class="feature-icon">
                                    <img src="images/icons/home.png" />
                                </div>
                                <h4>Link your bank account</h4>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="right-text">
                                <h3>How to create account ?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                <div className="crypto-button">
                                    <button type="button" className="btn btn-primary">
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Home