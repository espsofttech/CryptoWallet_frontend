import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import { useSelector, useDispatch } from 'react-redux'
import { showkycAction, updatekycAction, getAllIdentity } from '../Action/user.action';
import toast, { Toaster } from 'react-hot-toast';
import config from '../config/config';

const Kycdetail = () => {
  const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

  const [toggleSet, settoggleSet] = useState(1);
  const [kycdetails, setkycdetails] = useState({
    user_name: "",
    dob: "",
    doc_no: "",
    email: "",
    Address: "",
    image: "",
    old_image: "",
    identity_proof_id: "",
  });
  const [adminkycdetails, setadminkycdetails] = useState([]);
  const [image_file, setimage_file] = useState("");
  const [image_preview, setimage_preview] = useState("");
  const [kycStatus, setkycStatus] = useState(false);
  const [kycStatusApproveReject, setkycStatusApproveReject] = useState(false);
  const [identity, setIdentity] = useState([])

  const [validationError, setvalidationError] = useState({});

  function validate() {
    let firstnameError = "";
    let dateofbirthError = "";
    let kycdocumentError = "";
    let AddressError = "";
    let imageError = "";
    console.log("setkycdetails.dob", kycdetails?.dob);
    if (kycdetails.user_name === "" || kycdetails.user_name == undefined) {
      firstnameError = "Name is required.";
    }
    if (
      kycdetails.dob === "" ||
      kycdetails.dob == undefined
    ) {
      dateofbirthError = "Date Of Birth is required.";
    }
    if (
      kycdetails.doc_no === "" ||
      kycdetails.doc_no == undefined
    ) {
      kycdocumentError = "Document Number is required.";
    }
    if (
      kycdetails.Address === "" ||
      kycdetails.Address == undefined
    ) {
      AddressError = "Address is required.";
    }



    if (
      kycdetails.image === "" ||
      kycdetails.image == undefined
    ) {
      imageError = "document image is required.";
    }



    if (
      firstnameError ||
      dateofbirthError ||
      kycdocumentError ||
      AddressError ||
      imageError
    ) {
      setvalidationError({
        firstnameError,
        dateofbirthError,
        kycdocumentError,
        AddressError,
        imageError,
      });

      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    getkycdetails({ id: USER_LOGIN_DETAILS.template.id });
    getAllIdentityAPI()
  }, []);

  const getkycdetails = async (data) => {
    let res = await showkycAction(data);
    setkycStatusApproveReject(res.data.kyc_approval);
    if (res.data.doc_no == "") {
      setkycStatus(true);
    }
    if (res.status == true) {
      setkycdetails(res.data);
      console.log("123", res.data.doc_no == "");
    }
  };


  const getAllIdentityAPI = async () => {
    let res = await getAllIdentity();
    if (res.status == true) {
      setIdentity(res.data);
    }
  };





  const inputHandler = (e) => {
    const { name, value } = e.target;
    setkycdetails((old) => {
      return { ...old, [name]: value };
    });
  };

  const partnerPic = async (e) => {
    e.preventDefault();
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];
    setimage_file(image_as_files);
    setimage_preview(image_as_base64);
    setkycdetails((old) => {
      return { ...old, ["image"]: image_as_files };
    });
  };


  const updatekycdetails = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return false;
    } else {
      if (!image_file) {
        kycdetails.old_image = kycdetails?.image;
      }
      kycdetails.user_id = USER_LOGIN_DETAILS.template.id
      let res = await updatekycAction(kycdetails);
      if (res.status === true) {
        toast.success(res.msg);
        setTimeout(() => {
          window.location.href = `${config.baseUrl}kycdetails`;
        }, 2000);
      } else {
        toast.error(res.msg);
      }
    }
  };

  return (
    <>
      <div>

        <div className="page-wrapper">
          <Dashboardsidebar />
          <Toaster />

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
                                {kycStatusApproveReject == 2 ? (
                                  <span
                                    style={{ textAlign: "center", color: "blue" }}
                                  >
                                    KYC Rejected
                                  </span>
                                ) : kycStatusApproveReject == 1 ? (
                                  <span
                                    style={{ textAlign: "center", color: "green" }}
                                  >
                                    KYC Approved
                                  </span>
                                ) : kycStatusApproveReject == 0 && kycStatus == false ? (
                                  <span
                                    style={{ textAlign: "center", color: "blue" }}
                                  >
                                    KYC Under Processed
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                              <hr class="mt-2" />
                              <div className="">
                                <form onSubmit={updatekycdetails}>
                                  <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      onChange={inputHandler}
                                      value={kycdetails?.user_name}
                                      name="user_name"
                                    />
                                    <span className="validationErr danger">
                                      {validationError.firstnameError}
                                    </span>
                                  </div>

                                  <div className="mb-3">
                                    <label className="form-label">
                                      Date Of Birth
                                    </label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      onChange={inputHandler}
                                      value={kycdetails?.dob}
                                      name="dob"
                                    />
                                    <span className="validationErr danger">
                                      {validationError.dateofbirthError}
                                    </span>
                                  </div>

                                  <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={kycdetails?.email}
                                      onChange={inputHandler}
                                      name="email"
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
                                      onChange={inputHandler}
                                      name="identity_proof_id"
                                      value={kycdetails?.identity_proof_id}
                                    >
                                      {identity?.map((item) => {
                                        return (
                                          <>
                                            <option value="">Please select identity proof</option>
                                            <option value={item.id}>{item.Identity_name}</option>
                                          </>
                                        )
                                      })}

                                    </select>
                                  </div>

                                  <div className="mb-3">
                                    <label className="form-label">
                                      Identity Document Image
                                    </label>
                                    <br />
                                    {image_preview == "" ? (
                                      kycdetails?.image === null ||
                                        kycdetails?.image === "null" ||
                                        kycdetails?.image == "" ? (
                                        <img
                                          style={{
                                            height: "150px",
                                            width: "150px",
                                            objectFit: "cover",
                                          }}
                                          className="object-cover w-full h-32"
                                          src="images/dummydoc.png"
                                          alt=""
                                        />
                                      ) : (
                                        <img
                                          style={{
                                            height: "150px",
                                            width: "150px",
                                            objectFit: "cover",
                                          }}
                                          className="object-cover w-full h-32"
                                          src={`${config.imageUrl}${kycdetails?.image}`}
                                          alt=""
                                        />
                                      )
                                    ) : (
                                      <img
                                        style={{
                                          height: "150px",
                                          width: "150px",
                                          objectFit: "cover",
                                        }}
                                        id="image"
                                        className="object-cover w-full h-32"
                                        src={image_preview}
                                      />
                                    )}

                                    <input
                                      name="image"
                                      onChange={partnerPic}
                                      id="fileInput"
                                      accept="image/*"
                                      className="choose-file mt-5"
                                      type="file"
                                    />
                                    <span className="validationErr danger">
                                      {validationError.imageError}
                                    </span>
                                  </div>

                                  <div className="mb-3">
                                    <label className="form-label">
                                      Document Number
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      onChange={inputHandler}
                                      value={kycdetails?.doc_no}
                                      name="doc_no"
                                    />
                                    <span className="validationErr danger">
                                      {validationError.kycdocumentError}
                                    </span>
                                  </div>



                                  <div className="mb-3">
                                    <label className="form-label">
                                      Full Address
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      onChange={inputHandler}
                                      value={kycdetails?.Address}
                                      name="Address"
                                    />
                                    <span className="validationErr danger">
                                      {validationError.AddressError}
                                    </span>
                                  </div>



                                  <div className=" mx-10  mt-20">
                                    {kycStatus == false ? (
                                      <button
                                        type="submit"
                                        class="btn btn-primary pt-2 pb-2 mx-20 btn-md col-lg-12  "
                                      >
                                        Submit
                                      </button>
                                    ) : kycStatusApproveReject == 2 ? (
                                      <button
                                        type="submit"
                                        class="btn btn-primary pt-2 pb-2 mx-20 btn-md col-lg-12  "
                                      >
                                        Submit
                                      </button>
                                    ) : (
                                      ""
                                    )}
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