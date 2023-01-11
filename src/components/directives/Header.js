import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Offcanvas, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import config from "../../config/config";

const Header = () => {
  return (
    <>
      <header className="pt-1 pb-1">
        {['lg'].map((expand) => (
          <Container>
            <Navbar key={expand} expand={expand} className="">
              <Container fluid>
                <Navbar.Brand href="#" className="brand"><img src="images/logo.png" width="170px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="brand">
                      Crypto Wallet
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link href="#">Explore </Nav.Link>
                      <Nav.Link href="#">About Us</Nav.Link>
                      <Nav.Link href="#">Learn</Nav.Link>
                      {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                    </Nav>
                    <Form className="d-flex">
                      <Link to={`${config.baseUrl}login`}>
                        <button type="button" className="btn style1">Login</button>
                      </Link>
                      &nbsp;&nbsp;
                      <Link to={`${config.baseUrl}signup`}>
                        <button type="button" className="btn style1">Signup</button>
                      </Link>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Container>
        ))}
        {/*                 
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#" className="brand">CryptoWallet</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="header-menu">
                             <Link to="#">
                                <button type="button" className="btn btn-primary">Login</button>
                             </Link>
                             
                             <Link to="#">
                                <button type="button" className="btn btn-primary">Signup</button>
                             </Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}
      </header>
    </>
  )
}
export default Header