import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { userContext } from '../../../App';

const CustomerOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [orders, setOrders] = useState()
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5050/orders/${loggedInUser.email}`
        })
            .then(res => setOrders(res.data))
    }, [loggedInUser.email])

    return (
        <div>
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
                        orders.map((item, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{item.orderData.course}</td>
                            <td>{item.orderData.applicationEmail}</td>
                            <td>{item.status}</td>
                        </tr>)
                    }
                    {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                    {/* <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerOrder;