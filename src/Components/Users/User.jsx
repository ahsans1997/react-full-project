import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const {id, name, email, updated_at} = props.user;
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{updated_at}</td>
            <td>
                <button className='btn btn-info'>Edit</button>
                <Link className='btn btn-success' to={`/userrole/${id}`}>Assign Role</Link>
            </td>
        </tr>
    );
};

export default User;