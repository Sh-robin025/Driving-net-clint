import axios from 'axios';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory()

    const onSubmit = async data => {
        await axios.post('https://driving-net.herokuapp.com/addAdmin', {
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => {
                res.status === 200 && alert("admin added successfully.")
                history.push('/dashBoard')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="d-flex justify-content-center">
            <Form className="mt-5 col-md-6 p-5 bg-light" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center mb-3">Add New Admin</h3>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control type="text" {...register('name')} required placeholder="Admin Name" className="p-3" style={{ fontSize: '20px' }}>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control type="email" {...register('email')} required
                            placeholder="Admin Email" className="p-3"
                            style={{ fontSize: '20px' }} >
                        </Form.Control>
                    </Col>
                </Form.Group>
                <div className="d-flex justify-content-end mt-4">
                    <Button type="submit" variant="outline-info">
                        <span>Submit</span>
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddAdmin;