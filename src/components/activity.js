import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import { getAllActivityAction } from '../Action/user.action';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";


const Activity = () => {
    const [activity, setactivity] = useState([]);


    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)


    const columnsForWallet = [
        {
            key: "sn",
            text: "#",
            cell: (row, index) => index + 1
        },
        {
            key: "description",
            text: "Description",

        },
        {
            text: "Date",
            cell: (item) => {
                return (
                    `${moment(item.datetime).format('DD/MM/YYYY hh:mm:ss')}`

                );
            }

        },


    ];
    const configForWallet = {
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: true,
        pagination: 'advance',
        button: {
            excel: false,
            print: false

        }
    }

    useEffect(() => {
        getAllActivityAPI(USER_LOGIN_DETAILS.template.id);
    }, []);

    const getAllActivityAPI = async (data) => {
        try {
            let res = await getAllActivityAction(data);

            if (res.status == true) {
                setactivity(res.data);
            }
        }
        catch (err) {

        }
    };


    return (
        <>
            <div>

                <div className="page-wrapper">
                    <Dashboardsidebar />
                    <div className="main-container">
                        <Dashboardheader />

                        <div className="content-wrapper-scroll">
                            <div className="content-wrapper">


                                <div className='col-lg-12 col-12 '>
                                    <h4 class="mb-3">All Notifications</h4>
                                    <div className="">
                                        <ReactDatatable
                                            config={configForWallet}
                                            records={activity}
                                            columns={columnsForWallet}
                                        />

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
export default Activity