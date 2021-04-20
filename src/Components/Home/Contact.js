import React from 'react';
import '../../App.css';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section className="pt-5 contact-us">
            <div className="text-center pt-5 pb-3">
                <h5 style={{ fontWeight: '700', letterSpacing: '2px' ,color:'#17a2b8' }} >CONTACT</h5>
                <h2 style={{ fontWeight: '700',color:'#fff' }}>Always Connect With Us</h2>
            </div>
            <div className="bg-info" style={{ height: '2px', width: '20%', margin: 'auto' }}></div>
            <ContactForm />
        </section>
    );
};

export default Contact;