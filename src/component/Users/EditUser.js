import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Header from "../Common/Header";
const EditUser = (props) => {
  let navigate = useNavigate();
  const {state} = useLocation();

  const [name, setName] = useState(state.editUser.name);
  const [email, setEmail] = useState(state.editUser.email);
  const [contact, setContact] = useState(state.editUser.contact);
  const [gender, setGender] = useState(state.editUser.gender);
  console.log(state);

 const nameChangeHandler=(e)=>{
  setName(e.target.value);
}

const contactChangeHandler=(e)=>{
  setContact(e.target.value);
}
const emailChangeHandler=(e)=>{
  setEmail(e.target.value);
}
const genderChangeHandler=(e)=>{
  setGender(e.target.value);
}


  const editUser = (e) => {
    e.preventDefault();
    props.editUserHandler(state.editUser.id, name, email,contact,gender);
    navigate("/users");
  };
  return (
    <>
    <Header />
    <div className="container">
    <div className="row d-flex justify-content-center align-items-center">
    <div className="col- 8 col-sm-5 shadow-sm mt-5 p-5 mb-5 bg-white rounded">
        <h2 className="heading-title">Edit User</h2>
        <form onSubmit={editUser}>
          <div class="form-group">
            <label className="text-white">Name</label>
            <input type="text" value={name} onChange={nameChangeHandler} className="form-control" placeholder="name"/>
          </div>

          <div class="form-group">
          <label className="text-white">Gender</label>
          <select
            class="form-control"
            value={gender}
            onChange={genderChangeHandler}
            id="exampleFormControlSelect1"
          >
            <option value="">-select-</option>
            <option>male</option>
            <option>female</option>
          </select>
        </div>

          <div class="form-group">
            <label className="text-white">Email</label>
            <input type="email" value={email}  onChange={emailChangeHandler} className="form-control" placeholder="email"/>
          </div>

          <div class="form-group">
          <label className="text-white">Contact</label>
          <input type="number" value={contact} onChange={contactChangeHandler} className="form-control" placeholder="contact"/>
        </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block mt-5">
           Edit
          </button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};
export default EditUser;
