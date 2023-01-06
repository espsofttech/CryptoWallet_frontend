import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";


const Bankdetail = () => {

    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">

                            <div className="row">
                                <div className='col-md-12 '>
                                    <div className=' p-3'>

                                        <div className='form-body'>
                                            <div className='row'>
                                                <div className='col-md-6'>

                                                    <div className='card p-3'>

                                                        <h4>User Bank detail</h4>
                                                        <hr class="mt-2" />
                                                        <div className="">
                                                            <form>
                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Bank Account Holder Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                       
                                                                        name="account_name"

                                                                    />
                                                                    <span className="validationErr"></span>
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Bank Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        

                                                                        name="bank_name"

                                                                    />
                                                                    <span className="validationErr"></span>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Branch Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                       

                                                                        name="branch_name"

                                                                    />
                                                                    <span className="validationErr"></span>
                                                                </div>


                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Account Number
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        

                                                                        name="account_number"


                                                                    />
                                                                    <span className="validationErr"></span>
                                                                </div>


                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        IFSC Code
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                      
                                                                        

                                                                        name="ifsc_code"

                                                                    />
                                                                    <span className="validationErr"></span>
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label

                                                                        className="form-label"
                                                                    >
                                                                        Pan Card Number
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                      
                                                                    

                                                                        name="pancard_number"

                                                                    />
                                                                    <span className="validationErr"></span>
                                                                </div>

                                                                <div className=" mx-10  mt-20">
                                                                    <button
                                                                        type="submit"
                                                                        class="btn btn-primary pt-2 pb-2 mx-20 btn-md col-lg-12  "
                                                                    >
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='col-md-6 '>
                                                    <div className='card p-3'>
                                                        <h4>Admin Bank detail</h4>
                                                        <hr class="mt-2" />
                                                        <div className="">
                                                            <div className="mb-3">
                                                                <label

                                                                    className="form-label"
                                                                >
                                                                    Bank Account Holder Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    
                                                                    name="account_name"
                                                                   

                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label

                                                                    className="form-label"
                                                                >
                                                                    Branch Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    
                                                                    name="branch_name"
                                                                   

                                                                />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label

                                                                    className="form-label"
                                                                >
                                                                    Bank Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    
                                                                    name="bank_name"
                                                                   

                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label

                                                                    className="form-label"
                                                                >
                                                                    Account Number
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    
                                                                    name="account_number"
                                                                 

                                                                />
                                                            </div>


                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    IFSC Code
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    
                                                                    name="ifsc_code"
                                                                    

                                                                />
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

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bankdetail