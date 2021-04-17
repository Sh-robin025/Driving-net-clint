import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="info">
            <Container>
                <Navbar.Brand href="/">
                    <strong>Driving Net</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href="" className="m-3 text-dark" style={{textDecoration:'none'}}>
                            <h6>Home</h6>
                        </Link>
                        <Link href="" className="m-3 text-dark" style={{textDecoration:'none'}}>
                            <h6>Home</h6>
                        </Link>
                        <Link href="" className="m-3 text-dark" style={{textDecoration:'none'}}>
                            <h6>Home</h6>
                        </Link>
                        <Link to="/administration" className="m-3 text-dark text-uppercase" style={{textDecoration:'none'}}>
                            <h6>Administration</h6>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;