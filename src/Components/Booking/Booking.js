import axios from 'axios';
import '../../App.css';
import React from 'react';
import { FiSend } from 'react-icons/fi';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../Home/NavBar';

const Application = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const [courses, setCourses] = useState()
    const [orderData, setOrderData] = useState(null)

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://driving-net.herokuapp.com/courses'
        })
            .then(res => res.status === 200 && setCourses(res.data))
    }, [])

    const onSubmit = data => {
        setOrderData(data)
        // await axios.post('https://driving-net.herokuapp.com/addOrder', {
        //     headers: { 'Content-Type': 'application/json' },
        //     body: data
        // })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        console.log(data)
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
                        <Form.Control type="number" placeholder="Phone" {...register('phone')} required
                            className="p-3"
                            style={{ fontSize: '20px' }} >
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Select Course</Form.Label>
                    <Form.Control as="select" size="lg" {...register('course')} >
                        {
                            courses?.map(item => <option type="text" >{item.title}</option>)
                        }
                    </Form.Control>
                </Form.Group> <br />
                <Row>
                    <Button variant="info" type="submit" className="text-dark ml-auto"
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong>NEXT <sup><FiSend /></sup> </strong>
                    </Button>
                </Row>
            </Form>
        </div >
    );
};

export default Application;