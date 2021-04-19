import React, { useContext } from 'react';
import '../../App.css';
import { Col } from 'react-bootstrap';
import { userContext } from '../../App';

const ProfileInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <Col md={10} style={{ height: '100%' }} className="profile text-center text-light">
            <div className="d-flex justify-content-center mt-5">
                <img src={loggedInUser.photoURL} className="img-fluid" alt="" style={{ borderRadius: '50%', height: '150px' }} />
            </div> <br />
            <h2>{loggedInUser.displayName}</h2>
            <p >{loggedInUser.email}</p>
        </Col>
    );
};

export default ProfileInfo;