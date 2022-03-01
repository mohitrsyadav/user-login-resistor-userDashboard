import React from "react";
import { Link } from "react-router-dom";
const UserCard = (props) => {
    const {id, name,email,contact,gender} = props.user;
    return (
        <>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{contact}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td colSpan={3}><Link 
                    state={{fullView : props.user}}
                    to={{pathname:`fullView/${id}`}}
                    
                    ><i class="fa fa-eye  btn btn-primary" aria-hidden="true"></i></Link>
                 
                     <Link 
                    state={{editUser : props.user}}
                    to={{pathname:`editUser/${id}`}}
                    ><i class="fa fa-pencil btn btn-success" aria-hidden="true"></i></Link>
                 
                <i class="fa fa-trash-o btn btn-danger" aria-hidden="true" onClick={()=>props.clickHandler(id)}></i>
                </td>
                </tr>
                
            </tbody>
        </>
    )
}
export default UserCard;