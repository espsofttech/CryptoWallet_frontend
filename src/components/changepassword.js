import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";


const Changepassword = () => {

    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                            <div className="row justify-content-center">
                               
                               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pt-5">
                                   <div className='buyform changepassword'>
                                       <span className="text-left text-black" style={{ display: 'flex', flex: '1 1 auto', justifyContent: "center" }}>
                                           <strong style={{ fontSize: "22px" }}>Change Password</strong></span>
                                       <div className="sc-kcDeIU cvqsCp">
                                           <div className=''>
                                               <div className="form-group mb-4">
                                                   <label className="mb-2 mt-2">Change Your Login Password</label>

                                                   <div className='form-group mb-4 boxboder'>
                                                       <input type="password" name="old_password" id='oldPasswordError' autoComplete="off" placeholder='Enter old password' className='form-control' />
                                                       <span className="validationErr"></span>
                                                   </div>

                                                   <div className="input-group boxboder">

                                                       <input type="password"name="password" autoComplete="off"  id='passwordError' className="form-control text-black" aria-label="Enter New Password" aria-describedby="basic-addon2" placeholder="Enter New Password" />
                                                       {/* <div className="input-group-append">
                                                           <button className="btn btn-outline-secondary btn-sm" type="button"><i onClick={togglePassword} className={passwordType == 'password' ? 'fa fa-eye' : 'fa fa-eye-slash'} style={{ fontSize: "15px", margin: "0" }}></i></button>
                                                       </div> */}
                                                   </div>
                                                   <span className="validationErr"></span>
                                               </div>
                                               <div className='form-group mb-4 boxboder'>
                                                   <input type="password" name="confirm_password" id='confirmPasswordError' autoComplete="off"  placeholder='Confirm New Password' className='form-control' />
                                                   <span className="validationErr"></span>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="sc-CtfFt bxUreM" id="token-buy-button"  >Submit</div>
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
export default Changepassword