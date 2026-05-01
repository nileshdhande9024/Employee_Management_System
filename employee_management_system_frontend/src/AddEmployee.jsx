import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";

export default function AddEmployee() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [profile, setprofile] = useState("");
  const [contactno, setcontactno] = useState("");
  const [adharno, setadharno] = useState("");
  const [panno, setpanno] = useState("");
  const [dob, setdob] = useState("");

  const [dept, setdept] = useState("");
  const [desig, setdesig] = useState("");
  const [salary, setsalary] = useState("");
  const [joiningdate, setjoiningdate] = useState("");
  const [exp, setexp] = useState("");
  const [reportingmanager, setreportingmanager] = useState("");
  const [worklocation, setworklocation] = useState("");
  const [status, setstatus] = useState("");
  const [education, seteducation] = useState("");
  const [address, setaddress] = useState("");
  let app=process.env.REACT_APP_SERVER_IP;

  
  let handleprofile = (event) => {
    let file = event.target.files[0];
    console.log(file);
    let filepath = `./assets/images/${file.name}`;
    console.log(filepath);
    setprofile(filepath);
  };
  let validate=()=>{
    if(firstname===""||lastname===""||middlename==""||email===""||gender===""||profile===""||contactno===""||panno===""||adharno===""||dob===""||desig===""||dept===""||salary===""||exp===""||joiningdate===""||reportingmanager===""||worklocation===""||status===""||education===""||address===""){
      alert("Required all fields.")
      return false;
    }
    else if(!/^[a-zA-Z]{2,15}$/.test(firstname)){
      alert("Enter Valid firstname")
      return false;
    }
    else if(!/^[a-zA-Z]{2,15}$/.test(middlename)){
      alert("Enter Valid middlename")
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
    else if(gender!="Male"&&gender!="Female"){
      alert("Select Gender")
      return false
    }
    else if(profile===""){
      alert("Choose File for Profile.")
      return false
    }
    else if(!/^[0-9]{10}$/.test(contactno)){
      alert("Enter Valid Contact.")
      return false
    }
    else if(!/^[A-Z0-9]{10}$/.test(panno)){
      alert("Enter Valid PAN No.")
      return false
    }
    else if(!/^[0-9-]{14}$/.test(adharno)){
      alert("Enter Valid Adhar No.")
      return false
    }
    else if(!/^[A-Za-z .]{2,}$/.test(desig)){
      alert("Enter Valid Designation")
      return false
    }
    else if(!/^[A-Za-z ]{2,}$/.test(dept)){
      alert("Enter Valid Department.")
      return false
    }
    else if(!/^[0-9]{2,}$/.test(salary)){
      alert("Enter Valid Salary.")
      return false
    }
    else if(!/^[0-9]{1,2}$/.test(exp)){
      alert("Enter Valid Experience.")
      return false
    }
    else if(!/^[A-Za-z .]{2,}$/.test(reportingmanager)){
      alert("Enter Valid Reporting Manager.")
      return false
    }
    else if(!/^[A-Za-z ,]{2,}$/.test(worklocation)){
      alert("Enter Valid Work Location")
      return false;
    }
    else if(status!="Active"&&status!="Inactive"){
      alert("Select Valid Status.")
      return false;
    }
    else if(!/^[A-Za-z ']{2,}$/.test(education)){
      alert("Enter Valid Education.")
      return false
    }
    else if(!/^[A-Za-z ,]{2,}$/.test(address)){
      alert("Enter Valid Address.")
      return false
    }
    else{
      return true;
    }
    
  }
  useEffect(()=>{
    console.log("ENV:", process.env.REACT_APP_SERVER_IP);
    console.log(process.env.REACT_APP_SERVER_IP)},[])
  let addemp = (event) => {
    event.preventDefault();
    console.log(app)
    if(true){
          let newdata = {
      firstname,
      middlename,
      lastname,
      email,
      gender,
      profile,
      contactno,
      adharno,
      panno,
      dob,
      dept,
      desig,
      salary,
      joiningdate,
      exp,
      reportingmanager,
      worklocation,
      status,
      education,
      address,
    };
    axios
      .post(`${app}/addemployee` , newdata)
      .then((res) => {
        if (res.data == "Employee Record Added Successfully.") {
          alert(res.data);
          setfirstname("");
        }
      })
      .catch((error) => {
        alert("Error in post operation");
      });
    }
  };

  return (
    <div className="overflow-hidden">
      <form onSubmit={addemp}>
        {/* Main Title */}
        <h2 className="text-center text-danger bg-warning  mb-4">
          Employee Registration Form
        </h2>

        {/* Personal Info */}
        <h5 className="text-dark border-bottom pb-2 mb-3">Personal Details</h5>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Middle Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setmiddlename(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setdob(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Contact No</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                setcontactno(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Gender</label>
            <select
              className="form-control"
              onChange={(e) => {
                setgender(e.target.value);
              }}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Education</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                seteducation(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Aadhar No</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setadharno(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">PAN No</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setpanno(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Work Info */}
        <h5 className="text-dark border-bottom pb-2 mt-4 mb-3">Work Details</h5>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Designation</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setdesig(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setdept(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Experience (Years)</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                setexp(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                setsalary(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Work Location</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setworklocation(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Reporting Manager</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setreportingmanager(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-control"
              onChange={(e) => {
                setstatus(e.target.value);
              }}
            >
              <option>Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Joining Date</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setjoiningdate(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(event) => {
              handleprofile(event);
            }}
          />
        </div>

        <div className="mb-3 image">
          <label className="form-label ">Profile Preview</label>
          {/* <img src={profile} style={{"height":"200px","width":"200px"}}/> */}
          <img
            src={profile}
            alt=""
            className="rounded-circle img-fluid"
            style={{ maxWidth: "150px", height: "auto", objectFit: "cover" }}
          />
        </div>

        <div className="text-center">
          <button className="btn btn-primary px-4">Submit</button>
        </div>
      </form>
    </div>
  );
}
