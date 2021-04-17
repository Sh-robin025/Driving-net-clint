import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import ManageOption from './ManageOption';
import SideBar from './SideBar'

const DashBoard = () => {
    return (
        <Row style={{ height: '600px' }}>
            <SideBar />
            <Col md={10} className="pt-5">
                <Route path="/administration/ManageOption">
                    <ManageOption />
                </Route>
            </Col>
        </Row>
    );
};

export default DashBoard;