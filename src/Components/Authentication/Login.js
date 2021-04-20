import React from 'react';
import '../../App.css'
import { Button, Form } from 'react-bootstrap';
import user from '../../images/profile.png';
import { IoMdLogIn } from 'react-icons/io';
import { FaGooglePlusG } from 'react-icons/fa';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { handleGoogleSignIn, handleIdToken, initialization } from './Firebase';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    initialization()

    const googleLogin = () => {
        handleGoogleSignIn()
            .then(user => {
                sessionStorage.setItem('user', JSON.stringify(user.user))
                setLoggedInUser(user.user)
                axios.post('https://driving-net.herokuapp.com/addUser', {
                    headers: { 'Content-Type': 'application/json' },
                    body: user.user
                })
                history.replace(from);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="login-page pt-5">
            <div style={{ width: '27%', marginRight: '150px' }} className="ml-auto mt-5">
                <div className="d-flex justify-content-center">
                    <img src={user} alt="" className="img-fluid" style={{ height: '100px' }} />
                </div> <br />
                <Form className="p-3">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button variant="light" className="text-dark"
                            style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                            <strong><IoMdLogIn /> Login</strong>
                        </Button>
                    </div>
                </Form>
                <h6 className="text-center text-light">or</h6>
                <div className="d-flex justify-content-center">
                    <Button variant="danger" className="m-2" onClick={googleLogin}
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong><FaGooglePlusG /> Google</strong>
                    </Button>
                    <Button variant="primary" className="m-2"
                        style={{ border: 'none', borderRadius: '0px', padding: '5px 30px', letterSpacing: '2px' }}>
                        <strong><RiFacebookCircleFill /> Facebook</strong>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;