import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import Dashboardheader from "./directives/dashboardheader";
import Dashboardsidebar from "./directives/dashboardsidebar";
import { getAllDetailsOfcoinAction } from '../Action/user.action';
import { useSelector, useDispatch } from 'react-redux'


const Wallet = () => {
    const [purchaseList, setPurchaseList] = useState([]);

    const USER_LOGIN_DETAILS = useSelector((state) => state.auth.USER_LOGIN_DETAILS)


    const columnsForWallet = [
        {
            key: "sn",
            text: "#",
            cell: (row, index) => index + 1
        },
        {
            key: "coinName",
            text: "Coin",
          
        },
        {
            key: "balance",
            text: "Balance",
            cell: (item) => {
                return (
                    `${item.balance ? item.balance:0}`
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
        // console.log(loginData)
        getAllDetailsOfcoinApi(USER_LOGIN_DETAILS.template.id);
    }, []);

    const getAllDetailsOfcoinApi = async (data) => {
        try {
            let res = await getAllDetailsOfcoinAction(data);
            console.log('res', res.success);
            if (res.status == true) {
                setPurchaseList(res.msg);
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
                                    <h4 class="mb-3">User Wallet</h4>
                                    <ReactDatatable
                                        config={configForWallet}
                                        records={purchaseList}
                                        columns={columnsForWallet}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wallet