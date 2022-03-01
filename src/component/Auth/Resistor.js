import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Resistor = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMag] = useState("");
  const [error, setError] = useState("");
  const [userExistMsg, setUserExistMsg] = useState("");
  const [resistoredUser, setResistorUser] = useState([]);

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const contactOnChangeHandler = (e) => {
    setContact(e.target.value);
  };

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const removeSuccessMsg = () => {
    setSuccessMag("");
    navigate("/");
  };
  useEffect(() => {
    let users =
      localStorage.getItem("resistoredUser") == null
        ? []
        : JSON.parse(localStorage.getItem("resistoredUser"));
    setResistorUser(users);
  }, []);

  const ResistorHandler = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      contact.trim() == "" ||
      email.trim() === "" ||
      password === ""
    ) {
      return setError("Plase Enter All Feild");
    } else {
      let users =
        localStorage.getItem("resistoredUser") == null
          ? []
          : JSON.parse(localStorage.getItem("resistoredUser"));
      if (
        users.some((v) => {
          return v.email == email;
        })
      ) {
        setUserExistMsg("This Mail Id Already Exist");
        setError("");
      } else {
        resistoredUser.push({
          name: name,
          contact: contact,
          email: email,
          password: password,
        });
        console.log(resistoredUser);
        localStorage.setItem("resistoredUser", JSON.stringify(resistoredUser));
        setSuccessMag("user resistered successfully");
        setTimeout(removeSuccessMsg, 2000);
        setName("");
        setContact("");
        setEmail("");
        setPassword("");
        setError("");
        setUserExistMsg("");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center height-vh">
          <div className="col-8 col-md-5">
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
              <div className="brand-logo w-100 d-flex justify-content-center">
                <div className="icon-width"></div>
              </div>
              <div className="w-100"><h2 className="member-title">Member Register</h2></div>
              {successMsg ? (
                <div className="col-12 text-center text-success">
                  {successMsg}
                </div>
              ) : (
                ""
              )}

              {userExistMsg ? (
                <div className="col-12 text-center text-danger">
                  {userExistMsg}
                </div>
              ) : (
                ""
              )}

              {error ? (
                <p className="col-12 text-center text-danger">{error}</p>
              ) : (
                ""
              )}
              <form className="w-100" onSubmit={ResistorHandler}>
                <div className="form-data">
                  <div class="forms-inputs mb-4">
                    <label for="formGroupExampleInput">Name</label>
                    <input
                      value={name}
                      onChange={nameOnChangeHandler}
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="User name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="formGroupExampleInput">Contact</label>
                    <input
                      value={contact}
                      onChange={contactOnChangeHandler}
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="User contact"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      value={email}
                      onChange={emailOnChangeHandler}
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      value={password}
                      onChange={passwordOnChangeHandler}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="col-sm-12">
                    {" "}
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                      {" "}
                      Resistor
                    </button>{" "}
                  </div>
                </div>
              </form>
              <div className="row d-flex justify-content-between mt-2">
                    <div className="col-12 text-center">If You have already account
                     <span className="p-3"> <Link to="/">Login</Link> </span> 
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Resistor;
