import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../img/header-profile.png";
const NavBar = () => {
  let navigate = useNavigate();
  const loginUser = localStorage.getItem("name");
  const logOutHandler =()=>{
    localStorage.removeItem("name");
    navigate("/");
  }
 
  return (  
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
            <li className="nav-item nav-profile ">
                <a className="nav-link" href="#" >
                    <span className="nav-profile-name">
                    {loginUser} <img src={profile} /><button onClick={logOutHandler}className="logout">Logout</button>
                    </span>
                </a>
            
            </li>
        </ul>
    </div>
    </div>
</nav>
  );
};
export default NavBar;
