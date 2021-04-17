import React, { useState } from 'react';
import Modal from 'react-modal';
import { GoCloudUpload } from 'react-icons/go';
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { BiPlusMedical } from 'react-icons/bi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        padding: '70px',
        textAlign: 'center',
        borderRadius: '20px',
        boxShadow: '0px 0px 9px 1px rgba(0, 0, 0, 0.2)'
    }
};
Modal.setAppElement('#root')


const ModalForm = () => {
    const [formReq, setFormReq] = useState()
    const [imageURL, setImageURL] = useState()
    const [modalIsOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    const openModal = (req) => {
        req === 'banner' && setFormReq('banner')
        req === 'service' && setFormReq("service")
        req === 'course' && setFormReq("course")
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const handleImgUpload = async e => {
        const imageData = new FormData()
        imageData.set('key', 'c0c27e2c45a2d6cf07a97ef163c77a21')
        imageData.append('image', e.target.files[0]);
        await axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL({ image: res.data.data.display_url }))
            .catch(err => console.log("err :", err))
    }

    const onSubmit = async data => {
        if (formReq === 'banner') {
            const bannerData = { title: data.title, description: data.description, banner: imageURL.image }
            await axios.post('https://driving-net.herokuapp.com/addTopBanner', {
                headers: { 'Content-Type': 'application/json' },
                body: bannerData
            })
                .then(res => {
                    res.status === 200 && setIsOpen(false)
                    alert('banner added successfully.')
                })
                .catch(err => {
                    console.log(err)
                })
        }
        if (formReq === 'service') {
            const serviceData = { title: data.title, description: data.description, banner: imageURL.image }
            await axios.post('http://localhost:5050/addService', {
                headers: { 'Content-Type': 'application/json' },
                body: serviceData
            })
                .then(res => {
                    res.status === 200 && setIsOpen(false)
                    alert('service added successfully.')
                })
                .catch(err => {
                    console.log(err)
                })
        }
        if (formReq === 'course') {
            const courseData = { title: data.title, description: data.description, banner: imageURL.image }
            console.log(courseData)
            // await axios.post('http://localhost:5050/addService', {
            //     headers: { 'Content-Type': 'application/json' },
            //     body: serviceData
            // })
            //     .then(res => {
            //         res.status === 200 && setIsOpen(false)
            //         alert('service added successfully.')
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
        }
    }

    return (
        <div>
            <Button variant="outline-info" block onClick={() => openModal('banner')}>
                <strong><GoCloudUpload /> Upload Top Banner Image</strong>
            </Button>
            <Button variant="outline-info" block onClick={() => openModal('service')} className="my-3">
                <strong><BiPlusMedical /> Add New Service Item</strong>
            </Button>
            <Button variant="outline-info" block onClick={() => openModal('course')} className="my-3">
                <strong><AiOutlineAppstoreAdd /> Add New Course</strong>
            </Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '1px' }}>
                    {formReq === 'banner' && 'Upload Top Banner Image'}
                    {formReq === 'service' && 'Add New Service Item'}
                    {formReq === 'course' && 'Add New Course Item'}
                </h5>
                <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Control type="file" {...register('image')} onChange={handleImgUpload}>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Control type="text" placeholder="Title" {...register('title')} className="p-3" style={{ fontSize: '20px' }}>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                            <Form.Control type="text" {...register('description')} required placeholder="Description"
                                className="form-control p-3"
                                style={{ fontSize: '20px' }} >
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-4">
                        <Button type="submit" variant="outline-info">
                            <span>SEND</span>
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div >
    );
};

export default ModalForm;