import React, { useContext } from 'react';
import { Col, Button } from 'react-bootstrap';
import { AiOutlineForm } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { courseContext } from '../../App';

const SingleCourse = ({ course, index }) => {
    const [selectCourse, setSelectCourse] = useContext(courseContext);
    const history = useHistory()

    const handleBook = (title, fees) => {
        setSelectCourse({ title: title, fees: fees })
        history.push('/checkOut')
    }
    return (
        <Col md={3} className="bg-light m-3 p-4" style={{ borderRadius: '50%' }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500">
            <div className="d-flex justify-content-center">
                <img src={course.banner} alt="" className="img-fluid" style={{ height: '70px' }} />
            </div><br />
            <h5 className="text-center">{course.title}</h5>
            <div className="mt-3" style={{ height: '2px', backgroundColor: 'black', width: '20%', margin: 'auto' }}></div>
            <p className="text-justify pt-4">{course.description}</p>
            <div className="d-flex justify-content-center">
                <Button variant="info" className="text-dark m-3" onClick={() => handleBook(`${course.title}`, `${course.fees}`)}
                    style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                    <strong> <AiOutlineForm /> GET ADMIT</strong>
                </Button>
            </div>
        </Col>
    );
};

export default SingleCourse;