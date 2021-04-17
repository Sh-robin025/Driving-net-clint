import { Carousel, Col, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { AiOutlineForm } from 'react-icons/ai';
import '../../App.css';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Header = () => {
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://driving-net.herokuapp.com/topBanner',
        })
            .then(res => {
                setBannerData(res.data)
            });
    }, [])
    return (
        <div >
            <NavBar />
            <Carousel style={{ height: '600px' }}>
                {
                    bannerData.map(item =>
                        <Carousel.Item>
                            <img
                                style={{ height: '600px' }}
                                className="d-block w-100 img-fluid"
                                src={item.banner}
                                alt="First slide"
                            />
                            <Carousel.Caption className="row mb-5 pb-5">
                                <Col md={4}>
                                    <h2>{item.title}</h2><br />
                                    <p>{item.description}</p><br />
                                    <Link to="/applicationForm">
                                        <Button variant="info" className="text-dark"
                                            style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                                            <strong> <AiOutlineForm /> APPLICATION</strong>
                                        </Button>
                                    </Link>
                                </Col>
                            </Carousel.Caption>
                        </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default Header;