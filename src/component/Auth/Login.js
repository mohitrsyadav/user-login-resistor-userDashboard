import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccMsg, setLoginSuccMsg] = useState("");
  const [invalidUser, setInValidUser] = useState("");
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const removeSuccessMsg = () => {
    setLoginSuccMsg("");
    navigate("/users");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("resistoredUser"))
      ? JSON.parse(localStorage.getItem("resistoredUser"))
      : [];
    if (
      users.some((v) => {
        return v.email == email && v.password == password;
      })
    ) {
      users.filter((name) => {
        localStorage.setItem("name", name.name);
        localStorage.setItem("email", name.email);
      });

      setTimeout(removeSuccessMsg, 2000);
      setInValidUser("");
      setLoginSuccMsg("User Login  Successfully");
    } else {
      return setInValidUser("Username Or Password Incorrect");
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center height-vh">
          <div className="col-md-4">
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
              <div className="brand-logo w-100 d-flex justify-content-center">
                <div className="icon-width"></div>
              </div>
              <div className="w-100"><h2 className="member-title">Member Login</h2></div>

              {loginSuccMsg ? (
                <div className="col-12 text-center text-success">
                  {loginSuccMsg}
                </div>
              ) : (
                ""
              )}
              {invalidUser ? (
                <div className="col-12 text-center text-danger">
                  {invalidUser}
                </div>
              ) : (
                ""
              )}

              <form onSubmit={loginHandler}>
                <div className="form-data">
                  <div class="forms-inputs mb-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      value={email}
                      onChange={emailChangeHandler}
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>

                  <div class="forms-inputs mb-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      value={password}
                      onChange={passwordChangeHandler}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row">
                    <div class="col-sm-12">
                      {" "}
                      {/* <Link to="/users"> */}
                      <button type="submit" className="btn btn-primary btn-lg btn-block">
                        Login
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>

                  <div className="row d-flex justify-content-between mt-2">
                    <div className="col-12 text-center">If You don't have account
                    
                     <span className="p-3"><Link to="/resistor">Resistor</Link> </span> 
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
