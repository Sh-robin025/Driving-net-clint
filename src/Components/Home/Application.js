import axios from 'axios';
import '../../App.css';
import React from 'react';
import { FiSend } from 'react-icons/fi';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import NavBar from './NavBar';

const Application = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = async data => {
        // const bannerData = { title: data.title, description: data.description, banner: imageURL.image }
        // await axios.post('https://driving-net.herokuapp.com/addTopBanner', {
        //     headers: { 'Content-Type': 'application/json' },
        //     body: bannerData
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
                        <Form.Control type="text" placeholder="Name" {...register('name')} required className="p-3" style={{ fontSize: '20px' }}>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control type="email" placeholder="E-mail" {...register('email')} required
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
                    <Form.Label>What Service You Would Like To Get ?</Form.Label>
                    <Form.Control as="select" size="lg" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group> <br />
                <Row>
                    <Button variant="info" type="submit" className="text-dark mx-auto"
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong>SEND <sup><FiSend /></sup> </strong>
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default Application;