import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { BiPlusMedical } from 'react-icons/bi';
import { manageOptionContext } from '../DashBoard';

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
    const [formReq, setFormReq] = useState();
    const [imageURL, setImageURL] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const [manageOption, setManageOption] = useContext(manageOptionContext)

    const openModal = (req) => {
        req === 'topBanner' && setFormReq('addTopBanner')
        req === 'services' && setFormReq('addService')
        req === 'courses' && setFormReq('addCourse')
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const handleImgUpload = e => {
        const imageData = new FormData()
        imageData.set('key', '6edb945b9d519c3925e2ad19993929cf')
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL({ image: res.data.data.display_url }))
            .catch(err => console.log("err :", err))
    }

    const onSubmit = async data => {
        const allData = { title: data.title, description: data.description, banner: imageURL.image, fees: data.fees }
        await axios.post(`https://driving-net.herokuapp.com/${formReq}`, {
            headers: { 'Content-Type': 'application/json' },
            body: allData
        })
            .then(res => {
                res.status === 200 && setIsOpen(false)
                alert('item added successfully.')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="d-flex justify-content-end">
                <Button variant="outline-info" onClick={() => openModal(manageOption)}>
                    <strong><BiPlusMedical /> Add New</strong>
                </Button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '1px' }}>
                    {formReq === 'addTopBanner' && 'Upload Top Banner Image'}
                    {formReq === 'addService' && 'Add New Service Item'}
                    {formReq === 'addCourse' && 'Add New Course Item'}
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
                    {
                        formReq === 'addCourse' && <Form.Group as={Row}>
                            <Col>
                                <Form.Control type="text" {...register('fees')} required placeholder="Course Fees"
                                    className="form-control p-3"
                                    style={{ fontSize: '20px' }} >
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    }
                    <div className="d-flex justify-content-end mt-4">
                        <Button type="submit" variant="outline-info">
                            <span>Submit</span>
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div >
    );
};

export default ModalForm;