import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";


const Profile = () => {

    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                            <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='card profile_box p-4 pt-5 pb-5'>
                                            <div className='row'>
                                                <div className='col-lg-3'>
                                                    <h4>Profile image</h4>
                                                    <div className='profile'>
                                                      
                                                            <img style={{ height: '190px', width: '190px', objectFit: 'cover' }} src="dashboardFolder/img/dummy.jpg" className='d-profile-img-edit img-fluid' />
                                                           
                                                        <input  type="file" id="upload_profile_img" name= "profile_pic" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-9'>
                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>First Name</label>
                                                        <input type="text" name='first_name'  placeholder='Enter first name'  className='form-control' />
                                                    </div>

                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>Last Name</label>
                                                        <input type="text" name='last_name'  placeholder='Enter last name'  className='form-control' />
                                                    </div>

                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>Email</label>
                                                        <input type="text" name='email'  placeholder='Enter email' disabled  className='form-control' />
                                                    </div>

                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>Wallet Address</label>
                                                        <input type="text" name='bnb_address' placeholder='Enter Wallet Address'   className='form-control' />
                                                    </div>

                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>Bio (Max 255 words)</label>
                                                        <textarea type="text" name='bio'  placeholder='Tell the world who you are!' className='form-control'  />
                                                    </div>

                                                    <button className='btn btn-primary'>Update profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile