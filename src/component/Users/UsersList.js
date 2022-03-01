import React, { useState, useRef } from "react";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
const UsersList = (props) => {
  const inputEl = useRef("");
  const delateUserHandler = (id) => {
    props.getUserId(id);
  };
  console.log(props.user);

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <React.Fragment>
      <Header />
      <div>
        <div className="container mt-3">
          <div class="row rul_staff">
            <div className="input-group col-md-3">
              <select
                onChange={props.findUserType}
                className="form-control form-control-select"
              >
                <option value="">-Gender-</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="">All User</option>
              </select>
            </div>
            <div className="input-group col-md-4">
              <input
                ref={inputEl}
                type="text"
                value={props.term}
                onChange={getSearchTerm}
                className="form-control"
                placeholder="search "
              />
            </div>
            <div className="input-group col-md-5">
              <h5 className="totallist">
                Total User <span>({props.user.length}) </span>
              </h5>{" "}
            </div>
          </div>
          <div className="row page-heading">
            <div className="col-md-6">
              <h1 className="text-uppercase">User List</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb float-right">
                <li className="breadcrumb-item text-uppercase">
                  <Link to="/addUser">Add User</Link>
                </li>
              </ol>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12"></div>
            {props.userAddMsg ? (
              <div className="col-12  mt-2 text-center rounded bg-success">
                <span className="text-white pt-2 ">{props.userAddMsg}</span>
              </div>
            ) : (
              ""
            )}

            {props.userUpdateMsg ? (
              <div className="col-12 mt-2 text-center w-100 rounded bg-success">
                <span className="text-white pt-2 ">{props.userUpdateMsg}</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="row">
            <div className="col-md-12 shadow-sm p-3 mt-2 mb-5 bg-white rounded">
              <table class="table table-bordered">
                <thead class="thead-bg">
                  <tr>
                    {" "}
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th colSpan={3}>Action</th>
                  </tr>
                </thead>
                {props.user.length === 0
                  ? " No user available"
                  : props.user.map((data, index) => {
                      return (
                        <UserCard
                          user={data}
                          clickHandler={delateUserHandler}
                        />
                      );
                    })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UsersList;
