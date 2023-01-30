import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import toast, { Toaster } from 'react-hot-toast';
import { getProfileAction, UpdateProfileAction } from '../Action/user.action';
import config from "../config/config";
import { useSelector, useDispatch } from 'react-redux'

const Profile = () => {
    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)

    const [toggleSet, settoggleSet] = useState(1)
    const [userDetails, setuserDetails] = useState({});
    const [image_preview, setimage_preview] = useState('');
    const [image_file, setimage_file] = useState('');

    useEffect(() => {
        getProfileAPI(USER_LOGIN_DETAILS.template.id)
    }, []);

    const getProfileAPI = async (id) => {
        let res = await getProfileAction(id);
        if (res.status == true) {
            setuserDetails(res.data)
        }
    }

    const profilePicChange = async (e) => {
        e.preventDefault()
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        setimage_file(image_as_files);
        setimage_preview(image_as_base64);
    }

    const inputHandler = (e) => {
        const { name, value } = e.target
        setuserDetails((old) => {
            return { ...old, [name]: value }
        })
    }

    const SubmitForm = async (e) => {
        e.preventDefault()
        let old_profile_pic = '';
        if (!image_file) {
            old_profile_pic = userDetails?.image ? userDetails?.image : ''
        }

        let userData = {
            'id': USER_LOGIN_DETAILS.template.id,
            'first_name': userDetails?.first_name ? userDetails?.first_name : '',
            'last_name': userDetails?.last_name ? userDetails?.last_name : '',
            'email': userDetails?.email,
            'Description': userDetails?.Description ? userDetails?.Description : '',
            'image': image_file,
            'old_profile_pic': old_profile_pic,
        }

        let res = await UpdateProfileAction(userData);
        if (res.status == true) {
            toast.success(res.msg);
            setTimeout(() => {
                window.location.href = `${config.baseUrl}profile`;
            }, 2000);
        } else {
            toast.error(res.msg);
        }
    }

    const toggleManage = (data) => {
        settoggleSet(data)
    }


    return (
        <>
            <div>

                <div className={`page-wrapper${toggleSet == 1 ? '' : ' toggled'}`}>
                    <Dashboardsidebar />
                    <Toaster />

                    <div className="main-container">
                        <Dashboardheader clickToggle={toggleManage} />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='card profile_box p-4 pt-5 pb-5'>
                                            <div className='row'>
                                                <div className='col-lg-3'>
                                                    <h4>Profile image</h4>
                                                    <div className='profile'>

                                                        {image_preview ?
                                                            <img style={{ height: '190px', width: '190px', objectFit: 'cover' }} src={image_preview} className='d-profile-img-edit img-fluid' />
                                                            :
                                                            !userDetails?.image || userDetails?.image == undefined || userDetails?.image == 'undefined' ?
                                                                <img style={{ height: '190px', width: '190px', objectFit: 'cover' }} src="images/dummy-man.png" className='d-profile-img-edit img-fluid' />
                                                                :
                                                                <img style={{ height: '190px', width: '190px', objectFit: 'cover' }} src={`${config.imageUrl + userDetails?.image}`} className='d-profile-img-edit img-fluid' />
                                                        }
                                                        <input onChange={profilePicChange} type="file" id="upload_profile_img" accept=".jpg,.jpeg,.png" name="profile_pic" />
                                                    </div>
                                                </div>
                                                <div className='col-lg-9'>
                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>First Name</label>
                                                        <input type="text" name='first_name' onChange={inputHandler} placeholder='Enter first name' value={userDetails?.first_name == '' || userDetails?.first_name == 'undefined' ? '' : userDetails?.first_name} className='form-control' />
                                                    </div>

                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>Last Name</label>
                                                        <input type="text" name='last_name' onChange={inputHandler} placeholder='Enter last name' value={userDetails?.last_name == '' || userDetails?.last_name == 'undefined' ? '' : userDetails?.last_name} className='form-control' />
                                                    </div>

                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>Email</label>
                                                        <input type="text" name='email' onChange={inputHandler} placeholder='Enter email' disabled value={userDetails?.email ? userDetails?.email : ''} className='form-control' />
                                                    </div>



                                                    <div className='form-group mb-3'>
                                                        <label className='mb-1'>Bio (Max 255 words)</label>
                                                        <textarea type="text" name='Description' onChange={inputHandler} placeholder='Tell the world who you are!' className='form-control' value={userDetails?.Description ? userDetails?.Description : ''} />
                                                    </div>

                                                    <button className='btn btn-primary' onClick={SubmitForm}>Update profile</button>
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