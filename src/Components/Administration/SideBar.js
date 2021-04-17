import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SiGoogletagmanager } from 'react-icons/si';
import { IoHome } from 'react-icons/io5';

const SideBar = () => {
    return (
        <Col md={2} className="bg-info pt-3 pl-5">
            <Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>
                <h2>
                    <strong><IoHome /></strong>
                </h2>
            </Link>
            <div className="pt-5">
                <Link to="/administration/ManageOption" className="text-dark" style={{ textDecoration: 'none' }}>
                    <h5>
                        <strong> <SiGoogletagmanager /> MANAGE</strong>
                    </h5>
                </Link>
                <Link to="" className="text-dark" style={{ textDecoration: 'none' }}>
                    <h5>
                        <strong> <SiGoogletagmanager /> MANAGE</strong>
                    </h5>
                </Link>
            </div>
        </Col>
    );
};

export default SideBar;