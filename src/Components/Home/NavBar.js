import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { FaUserAlt } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const handleLogOut = () => {
        sessionStorage.removeItem('token')
        setLoggedInUser()
    }
    return (
        <Navbar expand="lg" bg="info" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/" >
                    <strong>Driving Net</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {
                            loggedInUser ? <div className="d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic"
                                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px' }}>
                                        <strong><FaUserAlt /> {loggedInUser.displayName || loggedInUser.name}</strong>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="text-center">
                                        <Dropdown.Item className="d-flex justify-content-center">
                                            <img src={loggedInUser.photoURL || loggedInUser.picture} alt="" style={{ height: '50px', borderRadius: '50%' }} />
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Link to="/dashBoard">
                                                <strong><RiDashboardFill /> Dashboard</strong>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div> :
                                <Link to="/login" className="m-3 text-dark text-uppercase" style={{ textDecoration: 'none' }}>
                                    <Button variant="info" className="text-dark"
                                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                                        <strong>Login</strong>
                                    </Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;