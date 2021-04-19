import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <Navbar expand="lg" bg="info" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <strong>Driving Net</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="m-3 text-dark" style={{textDecoration:'none'}}>
                            <h6>Home</h6>
                        </Link>
                        <Link to="" className="m-3 text-dark" style={{textDecoration:'none'}}>
                            <h6>{loggedInUser?.displayName}</h6>
                        </Link>
                        <Link to="" className="m-3 text-dark" style={{textDecoration:'none'}}>
                            <h6>Home</h6>
                        </Link>
                        <Link to="/dashBoard" className="m-3 text-dark text-uppercase" style={{textDecoration:'none'}}>
                            <h6>Dashboard</h6>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;