import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from './logo.png'

export default function CommonNav() {
  let navigate=useNavigate()
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
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nul navbar-nav me-auto mb-2 mb-lg-0 align-items-center w-100">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
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
              <li>
                <button className='btn btn-danger fw-bold' onClick={()=>{navigate("/registeruser")}}>Login/Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
