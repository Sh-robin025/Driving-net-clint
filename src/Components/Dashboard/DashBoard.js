import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { userContext } from '../../App';
import ManageOption from './Administration/ManageOption';
import AdminTable from './Administration/AdminTable';
import SideBar from './SideBar';
import ProfileInfo from './ProfileInfo';
import AddAdmin from './Administration/AddAdmin';


export const manageOptionContext = createContext()
export const userRoleContext = createContext()

const DashBoard = () => {
    const [manageOption, setManageOption] = useState()
    const [userRole, setUserRole] = useState()
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://driving-net.herokuapp.com/user/${loggedInUser.email}`
        })
            .then(res => {
                if (res.data[0].isCustomer) {
                    setUserRole('customer')
                } else {
                    setUserRole('admin')
                }
            })
    }, [loggedInUser.email])

    return (
        <userRoleContext.Provider value={[userRole, setUserRole]}>
            <manageOptionContext.Provider value={[manageOption, setManageOption]}>
                <Row style={{ height: '625px' }}>
                    <SideBar />
                    <Col md={10} className="pt-5">
                        <Route path="/dashBoard/manageOption">
                            <ManageOption />
                        </Route>
                        <Route path="/dashBoard/adminTable">
                            <AdminTable />
                        </Route>
                        <Route path="/dashBoard/addAdmin">
                            <AddAdmin />
                        </Route>
                    </Col>
                </Row>
            </manageOptionContext.Provider>
        </userRoleContext.Provider>
    );
};

export default DashBoard;