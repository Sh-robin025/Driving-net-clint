import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ModalForm from './ModalForm';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { manageOptionContext } from '../DashBoard';

const AdminTable = () => {
    const [manageOption, setManageOption] = useContext(manageOptionContext)
    const [tableData, setTableData] = useState()
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://driving-net.herokuapp.com/${manageOption}`,
        })
            .then(res => setTableData(res.data))
    }, [manageOption])
    return (
        <div className="p-4">
            <h3 className="text-center mb-4">
                {manageOption === 'topBanner' && 'Manage Top Banner Image'}
                {manageOption === 'services' && 'Manage Service Items'}
                {manageOption === 'courses' && 'Manage Course Items'}
            </h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Banner/Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map(data =>
                            <tr className="justify-content-center">
                                <td><strong>{data.title}</strong></td>
                                <td>{data.description}</td>
                                <img src={data.banner} style={{ height: '100px' }} alt="" />
                                <td className="text-center">
                                    <h6 style={{ cursor: 'pointer' }}>
                                        <FaEdit /> edit
                                    </h6>
                                    <div className="my-3" style={{ height: '2px', backgroundColor: 'black' }}></div>
                                    <h6 style={{ cursor: 'pointer', }}>
                                        <AiFillDelete /> del
                                    </h6>
                                </td>
                            </tr>)
                    }
                </tbody>
            </Table>
            <ModalForm />
        </div>
    );
};

export default AdminTable;