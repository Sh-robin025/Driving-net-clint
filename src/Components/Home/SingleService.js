import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleService = ({ service }) => {
    return (
        <Col md={5} className="d-flex justify-content-between align-items-center py-4 mx-auto m-3 bg-info">
            <img src={service.banner} alt="" className="img-fluid" style={{height:'70px'}}/>
            <div className="px-5">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
            </div>

        </Col>
    );
};

export default SingleService;