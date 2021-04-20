import React from 'react';
import { Button, Container } from 'react-bootstrap'

const ContactForm = () => {
    const handleSubmit = (e) => {
        const data = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value
        }
        console.log(data)
        e.preventDefault()
    }
    return (
        <Container className="d-flex justify-content-center mt-5">
            <form id="contact-form" className="col-md-7 mb-5 pb-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" required placeholder="Name" className="form-control p-3"
                        style={{ fontSize: '20px' }} />
                </div>
                <div className="form-group">
                    <input type="email" required placeholder="E-mail" className="form-control p-3"
                        aria-describedby="emailHelp" style={{ fontSize: '20px' }} />
                </div>
                <div className="form-group">
                    <textarea className="form-control p-3" required placeholder="Message" rows="4"
                        style={{ fontSize: '20px' }}></textarea>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Button variant="info" className="text-dark m-3"
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong> SEND</strong>
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default ContactForm;