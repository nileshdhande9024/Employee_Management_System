import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from './logo.png'

export default function AdminNav() {
  let user=JSON.parse(localStorage.getItem("userinfo"))
  let navigate=useNavigate()
  let logout=()=>{
    localStorage.removeItem("userinfo");
    localStorage.removeItem("isloggedin")
    navigate("/")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid gap-lg-5">
          <div className="">
            <img className="logo mx-3" src={logo} alt="" />
          </div>
          <button
            className="navbar-toggler text-bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nul navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addemployee" className="nav-link">
                  Add Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/viewemployee" className="nav-link">
                  View Employee
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/updatestatus" className="nav-link">
                  Leaves Status
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <div className="px-5 d-flex w-auto gap-4 justify-content-between">
              <h4 className="heading fw-bolder mt-2 text-white">Welcome, {user.firstname}</h4>
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
