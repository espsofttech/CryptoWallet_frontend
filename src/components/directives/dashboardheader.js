import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const Dashboardheader = () => {

    useEffect(() => {
        // Update the document title using the browser API
        $('body').addClass("lighttheme");
        
      });

    return (
        <>
           <div className="page-header">
                            <div className="toggle-sidebar" id="toggle-sidebar"><i className="bi bi-list" /></div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><i className="bi bi-house" /><a href="#">Home</a></li>
                                <li className="breadcrumb-item breadcrumb-active" aria-current="page">Dashboard</li>
                            </ol>

                            <div className="header-actions-container">
                                <a class="btn style1 mb-3" href="#">Exchange</a>

                                <ul className="header-actions">
                                    <li className="dropdown">
                                        <a href="javascript:void(0)" id="userSettings" className="user-settings" data-toggle="dropdown" aria-haspopup="true">
                                            <span className="avatar"><img src="dashboardFolder/img/default-user-icon.jpg" /><span className="status online" /></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
                                            <div className="header-profile-actions"><a href="#">Profile</a><a href="javascript:void(0)">Logout</a></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>



                        </div>
        </>
    )
}
export default Dashboardheader