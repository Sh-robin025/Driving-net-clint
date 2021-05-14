import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import { userContext } from '../../../App';
import { userRoleContext } from '../DashBoard';

const CustomerOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [userRole, setUserRole] = useContext(userRoleContext)
    const [orders, setOrders] = useState()
    const [status, setStatus] = useState('Pending')

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://driving-net.herokuapp.com/orders/${loggedInUser.email}`
        })
            .then(res => setOrders(res.data))
    }, [loggedInUser.email])

    return (
        <div className="pt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Name</th>
                        <th >Application Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((item, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{item.course}</td>
                            <td>{item.email}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {status}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="" >On Going</Dropdown.Item>
                                        <Dropdown.Item href="" >Completed</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default CustomerOrder;