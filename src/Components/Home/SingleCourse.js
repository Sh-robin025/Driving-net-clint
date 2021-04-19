import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { AiOutlineForm } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    return (
        <Col md={3} className="bg-light m-3 p-4" style={{ borderRadius: '50%' }}>
            <div className="d-flex justify-content-center">
                <img src={course.banner} alt="" className="img-fluid" style={{ height: '70px' }} />
            </div><br />
            <h5 className="text-center">{course.title}</h5>
            <div className="mt-3" style={{ height: '2px', backgroundColor: 'black', width: '20%', margin: 'auto' }}></div>
            <p className="text-justify pt-4">{course.description}</p>
            <div className="d-flex justify-content-center">
                <Link to="/applicationForm">
                    <Button variant="info" className="text-dark m-3"
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong> <AiOutlineForm /> GET ADMIT</strong>
                    </Button>
                </Link>
            </div>
        </Col>
    );
};

export default SingleCourse;