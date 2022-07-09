/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const ClerkDash = () => {
    const [name, setName] = useState('');
    // const [token, setToken] = useState('');
    // const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        getUsers();
    }, []);



    const axiosJWT = axios.create();


    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/clerkUsers');
        setUsers(response.data);
    }

    return (
        <div className="container mt-5">
            <h1>Welcome Back: {name}</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Service Number</th>
                        <th>Email</th>
                        <th>view</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.Name}</td>
                            <td>{user.Service_No}</td>
                            <td>{user.Mail_Id}</td>
                            <td>view</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ClerkDash
