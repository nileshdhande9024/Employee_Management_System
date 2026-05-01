import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bg from './bg-1.jpg'

export default function RegisterUser() {
  let [islogin, setislogin] = useState(false);
  const[firstname,setfirstname]=useState("");
  const[lastname,setlastname]=useState("");
  const[email,setemail]=useState("");
  const[contactno,setcontactno]=useState("");
  const[username,setusername]=useState("");
  const[password,setpassword]=useState("");
  const[confirmpassword,setconfirmpassword]=useState("");
  const[role,setrole]=useState("");
  const[gender,setgender]=useState("");
  const[empid,setempid]=useState(0);
  let navigate=useNavigate()
  let app=process.env.REACT_APP_SERVER_IP;

  let validation=()=>{
     if(firstname===""||lastname===""||email===""||gender===""||contactno===""||username===""||password===""
      ||confirmpassword===""||role===""||empid===0){
      alert("Required all fields.")
      return false;
    }
    else if(!/^[a-zA-Z]{2,}$/.test(firstname)){
      alert("Enter valid firstname.")
      return false;
    }
     else if(!/^[a-zA-Z]{2,15}$/.test(lastname)){
      alert("Enter Valid lastname")
      return false;
    }
    else if(!/^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,}$/.test(email)){
      alert("Enter Valid Email.")
      return false
    }
    else if(gender!=="Male"&&gender!=="Female"){
      alert("Select Gender")
      return false
    }
     else if(role!=="Admin"&&role!=="Employee"){
      alert("Select Gender")
      return false
    }
    else if(!/^[0-9]{10}$/.test(contactno)){
      alert("Enter Valid Contact.")
      return false
    }
    else if(!/^[a-z0-9]{4,}$/.test(username)){
      alert("Enter valid username")
      return false
    }
    else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_?])([A-Za-z0-9!@#$%^&*_?]{8,})/.test(password)){
      alert("Password with aleast one Capital,Small,Number and Special Chararcter and length above 8.")
      return false
    }
    else if(password!==confirmpassword){
      alert("Password and Confirm Password is not matched.")
      return false;
    }
    else if(!/^[0-9]{1,}$/.test(empid)){
      alert("Enter Proper Empid.")
      return false;
    }
    else{
      return true;
    }
  }
  let registration=(e)=>{
    e.preventDefault()
    if(validation()){
      axios.get(`${app}/employeebyid?id=${empid}`)
    .then((res)=>{
      let arr=Object.keys(res.data)
      if(arr.length==0){
        alert("Please Enter valid empid.")
      }
      else{
        let newuser={firstname,lastname,email,role,contactno,username,password,confirmpassword,gender,empid}
        axios.post(`${app}/register`,newuser)
        .then((res)=>{
          if(res.data=="Registration Successfull."){
            alert(res.data)
            setislogin(true);
          }
          else{
            alert(res.data);
          }
        })
        .catch((err)=>{alert("error in post")})
      }
    })
    .catch((err)=>{alert("error in empid oper")})
  }
    }

  let validationLogin=()=>{
    if(username===""||password===""){
      alert("Required all fields")
      return false
    }
    else{
      return true;
    }
  }  
  let login=(e)=>{
    e.preventDefault()
   if(validationLogin()){
     let log={username,password}
    axios.post(`${app}/login`,log)
    .then((res)=>{
      if(res.data){
        let user=res.data
        localStorage.setItem("userinfo",JSON.stringify(res.data))
        localStorage.setItem("isloggedin","true")
        if(user.role.toLowerCase()=="admin"){
          navigate("/admin")
        }
        else{
          navigate("/employee")
        }
      }
    })
    .catch((err)=>{
      alert("Invalid username or password")
    })
  }
   }
  return (
    <div >
      {islogin ? (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
        <form className="mt-5 p-5 shadow-lg col-12 col-md-6 bg-dark-subtle" onSubmit={login}>
          <h2 className="heading text-decoration-underline">Login Form</h2>
          <div className="row d-flex flex-column align-items-center gap-3">
            <div className="col-md-12 mb-2 w-75">
              Username
              <input 
              type="text"
              className="form-control shadow" 
              onChange={(e)=>{setusername(e.target.value)}}
              />
            </div>
             <div className="col-md-12 mb-2 w-75">
              Password
              <input 
              type="password" 
              className="form-control shadow" 
              onChange={(e)=>{setpassword(e.target.value)}}
              />
            </div>
            <div className="col-md-12 mb-2 w-50 d-flex justify-content-center gap-3">
              <button className="btn btn-dark shadow">Login</button>
              <button className="btn btn-outline-dark shadow" onClick={()=>{setislogin(false)}}>Register</button>
            </div>
          </div>
        </form>
        </div>
      ) : (
        
        <div className="container-fluid d-flex justify-content-center align-items-center ">
        <form className="mt-5 p-5 shadow-lg bg-dark-subtle" onSubmit={registration}>
          <h2 className="heading text-decoration-underline">Registration Form</h2>
          <div className="row d-flex justify-content-around">
            <div className="col-md-12 mb-2">
              Firstname
              <input 
              type="text" 
              className="form-control shadow" 
              onChange={(e)=>{setfirstname(e.target.value)}}
              />
            </div>
            <div className="col-md-12 mb-2">
              Lastname
              <input 
              type="text" 
              className="form-control shadow" 
              onChange={(e)=>{setlastname(e.target.value)}}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-md-6 mb-2">
              Email
              <input 
              type="email" 
              className="form-control shadow" 
              onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
            <div className="col-md-6 mb-2">
              Contact No.
              <input 
              type="text" 
              className="form-control shadow" 
              onChange={(e)=>{setcontactno(e.target.value)}}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-md-12 mb-2">
              Username
              <input 
              type="text" 
              className="form-control shadow" 
              onChange={(e)=>{setusername(e.target.value)}}
              />
            </div>
            <div className="col-md-6 mb-2">
              Password
              <input 
              type="password" 
              className="form-control shadow" 
              onChange={(e)=>{setpassword(e.target.value)}}
              />
            </div>
            <div className="col-md-6 mb-2">
              Confirm Password
              <input 
              type="password" 
              className="form-control shadow" 
              onChange={(e)=>{setconfirmpassword(e.target.value)}}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-md-4 mb-2">
              Role
              <select className="form-control shadow" onChange={(e)=>{setrole(e.target.value)}}>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <div className="col-md-4 mb-2">
              Gender
              <select className="form-control shadow" onChange={(e)=>{setgender(e.target.value)}}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-md-4 mb-2">
              Empid
              <input className="form-control shadow
              " type="number" onChange={(e)=>{setempid(Number(e.target.value))}}/>
            </div>
          </div>
          <div className="row mt-4">
            <div className="d-flex justify-content-center gap-3 align-items-center">
              <button className="btn btn-dark shadow-lg">Register</button>
              <button className="btn btn-outline-dark shadow-lg" onClick={()=>{setislogin(true)}}>Login</button>
            </div>
          </div>
        </form>
        </div>
      )}
    </div>
  );
}
