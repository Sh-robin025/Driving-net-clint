import axios from 'axios';
import '../../App.css';
import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useContext, useState, useEffect } from 'react';
import { userContext } from '../../App';
import NavBar from '../Home/NavBar';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';


const Application = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const [courses, setCourses] = useState()
    const [orderData, setOrderData] = useState()
    const history = useHistory()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://driving-net.herokuapp.com/courses'
        })
            .then(res => res.status === 200 && setCourses(res.data))
    }, [])

    const onSubmit = data => {
        setOrderData(data)
    }
    const handleGetToken = token => {
        if (orderData) {
            const orderInfo = { orderData, token }
            axios.post('http://localhost:5050/addOrder', {
                headers: { 'Content-Type': 'application/json' },
                body: orderInfo
            })
                .then(res => {
                    res.status === 200 && alert("Dear customer, your order placed successfully.Thank you")
                    history.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
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
                        <Form.Control type="email" defaultValue={loggedInUser?.email} {...register('applicationEmail')} required
                            className="p-3"
                            style={{ fontSize: '20px' }} >
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control type="number" placeholder="Phone" {...register('phone')} required
                            className="p-3"
                            style={{ fontSize: '20px' }} >
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeMd">
                    <Form.Label>Select Course</Form.Label>
                    <Form.Control as="select" size="md" {...register('course')} >
                        {
                            courses?.map(item => <option type="text">
                                {item.title}</option>)
                        }
                    </Form.Control>
                </Form.Group>
                <h6>* You have to pay $ 5000 for this course.</h6>
                <br />
                <Row>
                    {/* {checkOutStep === 2 && <Button variant="info" className="text-dark" onClick={() => setCheckOutStep(1)}
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong>BACK</strong>
                    </Button>}
                    <Button variant="info" type="submit" className="text-dark ml-auto"
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong>{checkOutStep === 1 ? 'NEXT' : 'PLACE ORDER'} </strong>
                    </Button> */}
                    <StripeCheckout className="ml-auto"
                        type="submit"
                        stripeKey="pk_test_51IiEWTCHBoJslFkXEeogXzq3KqI2FQonyhSurCgDJKFL2PyoaASKLfbefXQwHZQIuOHyHAtBM3L1nOjhc1suVEf4004CgLu0e1"
                        token={handleGetToken}
                    />
                </Row>
            </Form>
        </div >
    );
};

export default Application;