import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { userContext } from '../../../App';

const CustomerOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [orders, setOrders] = useState()
    console.log(orders)
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://driving-net.herokuapp.com/orders/${loggedInUser.email}`
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
                        orders?.map((item, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{item.course}</td>
                            <td>{item.email}</td>
                            <td>Pending...</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerOrder;