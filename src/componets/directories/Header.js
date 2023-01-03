import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
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
                </Navbar>
            </header>
        </>
    )
}
export default Header