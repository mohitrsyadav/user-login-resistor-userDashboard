import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
const AddUser = (props) => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [inputError, setInputError] = useState("");

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

  const addUser = (e) => {
    e.preventDefault();

    if(name=="" || email=="" || contact=="" || gender==""){
      setInputError("Please Fill All Feild"); 
    }
    else{
      props.addUserHandler(name, email,contact,gender);
      navigate("/users");
    }
   
  };
  return (
    <>
    <Header />
    <div className="container">
    <div className="row d-flex justify-content-center align-items-center">
    <div className="col- 8 col-sm-5 shadow-sm mt-5 p-5 mb-5 bg-white rounded">
        <h2 className="heading-title">Add User</h2>
        {inputError ?  <div className=" bg-dark text-center rounded p-1"><span className="text-danger">{inputError}</span></div>:"" }
        <form onSubmit={addUser}>

          <div class="form-group">
            <label className="text-white">Name</label>
            <input type="text" value={name} onChange={nameChangeHandler} name="name" className="form-control" placeholder="name"/>
          </div>

          <div class="form-group">
          <label className="text-white">Gender</label>
          <select
            class="form-control"
            value={gender}
            onChange={genderChangeHandler}
            name="gender"
            id="exampleFormControlSelect1"
          >
            <option value="">-select-</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

          <div class="form-group">
            <label className="text-white">Email</label>
            <input type="email" value={email} onChange={emailChangeHandler} name="email" className="form-control" placeholder="email"/>
          </div>

          <div class="form-group">
          <label className="text-white">Contact</label>
          <input type="number"value={contact} onChange={contactChangeHandler} name="contact" className="form-control" placeholder="contact"/>
        </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block mt-5">
            Add
          </button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};
export default AddUser;
