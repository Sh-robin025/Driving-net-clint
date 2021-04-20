import React from 'react';
import { Button } from 'react-bootstrap';
import { FaHandsHelping } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { GoCloudUpload } from 'react-icons/go';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { manageOptionContext } from '../DashBoard';

const ManageOption = () => {
    const [manageOption, setManageOption] = useContext(manageOptionContext)
    const history = useHistory()
    const handleManage = option => {
        option === 'banner' && setManageOption('topBanner');
        option === 'service' && setManageOption('services')
        option === 'course' && setManageOption('courses')
        history.push('/dashBoard/adminTable')
    }
    return (
        <div className="d-grid gap-2 col-6 mx-auto">
            <Button variant="outline-info" block onClick={() => handleManage('banner')}>
                <strong><GoCloudUpload /> Top Banner Image</strong>
            </Button>
            <Button variant="outline-info" block className="my-3" onClick={() => handleManage('service')}>
                <strong><FaHandsHelping /> Service Item</strong>
            </Button>
            <Button variant="outline-info" block className="my-3" onClick={() => handleManage('course')}>
                <strong><AiOutlineAppstoreAdd /> Course's</strong>
            </Button>
        </div>
    );
};

export default ManageOption;