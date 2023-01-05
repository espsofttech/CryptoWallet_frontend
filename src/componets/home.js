import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./directories/Header";
import Footer from "./directories/Footer";
import CountUp, { useCountUp } from "react-countup";
import AnimatedText from 'react-animated-text-content';
import { Zoom,Fade,Roll} from 'react-reveal';
const Home = () => {
    return (
        <>
            <Header />
            <section className="hero-section pt-0">
                <Container className="">
                    <Row className=" align-items-center">
                        <Col md={6}>
                            
                            <div className="hero-text">
                            <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="wave"
  interval={0.06}
  duration={0.8}
  tag="h1"
  className="animated-paragraph mb-4"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
Jump Start Your Crypto Portfolio
</AnimatedText>
                                {/* <h1>   Jump Start Your <span>Crypto</span> Portfolio</h1> */}
                                <p>Crypto Wallet is The Easiest Place To Buy And Sell Cryptocurrency. Sign Up And Get Started Today.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Zoom>
                            <div className="hero-video">
                            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_3rqwsqnj.json" background="transparent" speed={1} style={{"width":"100%","height":"600px"}} loop  autoPlay />
                            </div>
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                        <Fade top>
                            <div className="headings">
                                <h2>Create your cryptocurrency portfolio today</h2>
                            </div>
                        </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Zoom>
                            <div className="chart pr-3">
                                <img src="images/chart.png" width="100%" />
                            </div>
                            </Zoom>
                        </Col>
                        <Col md={6}>
                            <Fade right>
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
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="truestedplatform">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Fade top>
                            <div className="headings">
                                <h2>The most trusted cryptocurrency platform</h2>
                            </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Fade left>
                            <Row className="align-items-center">
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
                            </Fade>
                        </Col>
                        <Col md={6}>
                            <Zoom>
                            <div className="side-image">
                                <img src="images/icons/platform.png" />
                            </div>
                            </Zoom>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Fade right>
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
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="getstarted">
                <Container>
                    <Row>
                        <Col md={12}>
                            <Fade top>
                            <div className="headings">
                                <h2>Get started in a few minutes</h2>
                            </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col md={6}>
                            <Fade left>
                            <div className="getstart mx-auto" >
                                <div class="feature-icon">
                                    <img src="images/icons/bx-user-plus.png" />
                                </div>
                                <h4>Create an account</h4>
                            </div>
                            <div className="getstart mx-auto">
                                <div class="feature-icon">
                                    <img src="images/icons/bx-rocket.png" />
                                </div>
                                <h4>Start buying & selling</h4>
                            </div>
                            <div className="getstart mx-auto">
                                <div class="feature-icon">
                                    <img src="images/icons/home.png" />
                                </div>
                                <h4>Link your bank account</h4>
                            </div>
                            </Fade>
                        </Col>
                        <Col md={6} className="pt-5">
                            <Fade right>
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
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="app-wrap style1 ptb-60 bg-whisper">
  <div className="container">
    <div className="row gx-5 align-items-center">
      <div className="col-lg-6 text-center sm-mb-2">
        <Zoom>
        <lottie-player classname="mx-auto" src="https://lottie.host/e450bcf2-753b-470c-83fa-9f4105c0f38f/HKwxqMh1ks.json" background="transparent" speed={1} loop autoPlay style={{"width":"300px","height":"300px","margin":"0px auto"}} />
        </Zoom>
      </div>
      <div className="col-lg-6">
        <Fade right>
        <div className="app-content">
          <div className="content-title style1">
            <h5 className="headingcolor mb-3">Earn up to $10 worth of crypto</h5>
            <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
            <br />
            <a href="#" className="btn style1">Start Earning</a>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  </div>
</section>
            <Footer />
        </>
    )
}
export default Home