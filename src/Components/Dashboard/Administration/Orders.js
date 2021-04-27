import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState()
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:5050/orders/${loggedInUser.email}`
        })
            .then(res => setOrders(res.data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Orders;