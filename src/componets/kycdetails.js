import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";


const Kycdetail = () => {

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
                <div className="col-md-12 ">
                  <div className=" p-3">
                    <div className="form-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card p-3">
                            <div className="kycapproved">
                            <h4>Fill KYC Form</h4>
                              {/* <span
                                style={{ textAlign: "center", color: "blue" }}
                              >
                                KYC Rejected
                              </span>
                              <span
                                style={{ textAlign: "center", color: "green" }}
                              >
                                KYC Approved
                              </span>
                            
                              <span
                                style={{ textAlign: "center", color: "blue" }}
                              >
                                KYC Under Processed
                              </span> */}
                            
                            </div>
                            <hr class="mt-2" />
                            <div className="">
                              <form>
                                <div className="mb-3">
                                  <label className="form-label">Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                  />
                                  <span className="validationErr danger">
                                  </span>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">
                                    Date Of Birth
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="date_of_birth"
                                  />
                                  <span className="validationErr danger">
                                 
                                  </span>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">Email</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                  />
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                  >
                                    Select Document For Identity proof
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="kyc_document_type"
                                    
                                  >
                                    {/* <option selected="">Open this status</option> value={0} value={1} */}
                                    <option value={0}>Aadhar Card</option>
                                    <option value={1}>Pan Card</option>
                                    <option value={2}>Voter ID </option>
                                    <option value={3}>Driving License </option>
                                  </select>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">
                                    Identity Document Image
                                  </label>
                                  <br />
                                  
                                      <img
                                        style={{
                                          height: "150px",
                                          width: "150px",
                                          objectFit: "cover",
                                        }}
                                        className="object-cover w-full h-32"
                                        src="dashboardFolder/img/dummydoc.png"
                                        alt=""
                                      />
                                    
                                    

                                  <input
                                    name="kyc_document_image"
                                    id="fileInput"
                                    accept="image/*"
                                    className="choose-file mt-3"
                                    type="file"
                                  />
                                  <span className="validationErr danger">
                                  </span>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">
                                    Document Number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="kyc_document"
                                  />
                                  <span className="validationErr danger">
                                  </span>
                                </div>

                                <div className="mb-3">
                                  <label
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                  >
                                    Select Document For Address proof
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    name="kyc_document_type2"
                                    
                                  >
                                    {/* <option selected="">Open this status</option> value={0} value={1} */}
                                    <option value={0}>Aadhar Card</option>
                                    <option value={1}>Electricity Bill</option>
                                    <option value={2}>Voter ID </option>
                                    <option value={3}>Driving License </option>
                                  </select>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">
                                    Address Document Image
                                  </label>
                                  <br />
                                  
                                      <img
                                        style={{
                                          height: "150px",
                                          width: "150px",
                                          objectFit: "cover",
                                        }}
                                        className="object-cover w-full h-32"
                                        src="dashboardFolder/img/dummy.jpg"
                                        alt=""
                                      />
                          
                                     
                              

                                  <input
                                    name="kyc_document_image2"
                                    id="fileInput"
                                    accept="image/*"
                                    className="choose-file mt-3"
                                    type="file"
                                  />
                                  <span className="validationErr danger">
                                  </span>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">
                                    Address Proof Document Number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="kyc_document2"
                                  />
                                  <span className="validationErr danger">
                                    
                                  </span>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">
                                    Full Address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="kyc_proof_of_address"
                                  />
                                  <span className="validationErr danger">
                                    
                                  </span>
                                </div>

                                <div className="mb-3">
                                  <label className="form-label">
                                    Passport Photo
                                  </label>
                                  <br />
                                  
                                      <img
                                        style={{
                                          height: "150px",
                                          width: "150px",
                                          objectFit: "cover",
                                        }}
                                        className="object-cover w-full h-32"
                                        src="dashboardFolder/img/dummy.jpg"
                                        alt=""
                                      />
                              
                                  

                                  <input
                                    name="user_photo"
                                    id="fileInput"
                                    accept="image/*"
                                    className="choose-file mt-3"
                                    type="file"
                                  />
                                  <span className="validationErr danger">
                                    
                                  </span>
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
export default Kycdetail