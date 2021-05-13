import React, { useContext, useEffect, useState } from 'react';
import { courseContext, userContext } from '../../App';
import NavBar from '../Home/NavBar';
import { Col, Form, Row, InputGroup, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
// import StripeCheckout from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [selectCourse, setSelectCourse] = useContext(courseContext);
    const [courses, setCourses] = useState();
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://driving-net.herokuapp.com/courses'
        })
            .then(res => res.status === 200 && setCourses(res.data))
    }, [])

    const onSubmit = data => {
        const orderData = { ...data, course: selectCourse?.title, fees: selectCourse?.fees }
        if (orderData.course) {
            axios.post("https://driving-net.herokuapp.com/addOrder", {
                headers: { 'Content-Type': 'application/json' },
                body: orderData
            }).then(res => {
                res.status === 200 && history.push('/checkOut/success')
            })
                .catch(err => {
                    console.log(err)
                })
        }else{
            alert("Dear user, You didn't select any course. Please select one.")
        }

    }
    return (
        <div>
            <NavBar />
            <Form className="mt-5 mx-auto bg-light p-5 col-md-6" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control type="text" defaultValue={loggedInUser?.displayName} {...register('name')} required className="p-3" style={{ fontSize: '20px' }}>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control type="email" defaultValue={loggedInUser?.email} {...register('email')} required
                            className="p-3"
                            style={{ fontSize: '20px' }} >
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control type="number" defaultValue={loggedInUser?.number} {...register('number')} required
                            className="p-3"
                            style={{ fontSize: '20px' }} >
                        </Form.Control>
                    </Col>
                </Form.Group>
                <h6>Selected Course:</h6>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <strong>{selectCourse?.title || "Select a course from option"}</strong>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <strong>$ {selectCourse?.fees || 0}</strong>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <DropdownButton
                        className="ml-2"
                        as={ButtonGroup}
                        menuAlign={{ lg: 'right' }}
                        title={selectCourse ? "Change course" : "Select Course"}
                        id="dropdown-menu-align-responsive-1"
                    >
                        {
                            courses?.map(item => <Dropdown.Item
                                onClick={() => setSelectCourse({ title: item.title, fees: item.fees })}>{item.title} $ {item.fees}</Dropdown.Item>)
                        }
                    </DropdownButton>
                </InputGroup>
                <h6>* You have to pay $ {selectCourse?.fees || 0} for this course.</h6>
                <br />
                <Row>
                    <button type="submit">Submit</button>
                    {/* <StripeCheckout className="ml-auto"
                        type="submit"
                        stripeKey="pk_test_51IiEWTCHBoJslFkXEeogXzq3KqI2FQonyhSurCgDJKFL2PyoaASKLfbefXQwHZQIuOHyHAtBM3L1nOjhc1suVEf4004CgLu0e1"
                        token={handleGetToken}
                    /> */}
                </Row>
            </Form>
        </div >
    );
};

export default CheckOut;