import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from './SingleCourse';

const Courses = () => {
    const [courses, setCourses] = useState()
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://driving-net.herokuapp.com/courses'
        })
            .then(res => res.status === 200 && setCourses(res.data))
    }, [])
    return (
        <div className="mt-5">
            <div className="text-center pt-5">
                <h5><span style={{ color: '#17a2b8' }}>COURSE</span> Category</h5>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda amet consectetur maiores sunt iste fuga.</p>
                {/* <div style={{ height: '2px', backgroundColor: 'black', width: '20%', margin: 'auto' }}></div> */}
            </div>
            <Row className="py-5 d-flex justify-content-center bg-info">
                {
                    courses?.map(item => <SingleCourse key={item._id} course={item} />)
                }
            </Row>
        </div>
    );
};

export default Courses;