import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import User from "../Components/Users/User";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


const Users = () => {
    const [users, setUsers] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        let isMount = true;

        const getUsers = () => {
            axiosClient.get('/users')
            .then(({ data }) => {
                isMount && setUsers(data);
                setSpinner(false)
            })
        }
        getUsers();

        return () => {
            isMount = false;
        }
        
    }, [])
    return (
        <div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Join Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <div>
                        {spinner && <Spinner animation="border" variant="success" />}
                    </div>
                
                    {
                        users.map((user) => (<User key={user.id} user={user} />))
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default Users;