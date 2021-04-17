import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleService from './SingleService';

const Service = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5050/services'
        })
            .then(res => setServices(res.data))
    }, [])
    return (
        <div className="mt-5">
            <div className="text-center pt-5">
                <h5>Our <span style={{ color: '#17a2b8' }}>SERVICES</span></h5>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda amet consectetur maiores sunt iste fuga.</p>
                <div style={{ height: '2px', backgroundColor: 'black', width: '20%', margin: 'auto' }}></div>
            </div>
            <Row className="mt-3">
                {
                    services && services.map(item => <SingleService key={item._id} service={item} />)
                }
            </Row>
        </div>
    );
};

export default Service;