import React, { useContext } from 'react';
import '../../App.css';
import { userContext } from '../../App';

const ProfileInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div className="profile text-center text-light">
            <div className="d-flex justify-content-center">
                <img src={loggedInUser.photoURL || loggedInUser.picture} className="img-fluid" alt="" style={{ borderRadius: '50%', height: '150px' }} />
            </div> <br />
            <h2>{loggedInUser.displayName || loggedInUser.name}</h2>
            <p >{loggedInUser.email}</p>
        </div>
    );
};

export default ProfileInfo;