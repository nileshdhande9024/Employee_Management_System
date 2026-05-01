import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ShowEmployee() {
  const [employees, setemployees] = useState([]);
  // const [reload,setreload]=useState(false)
  let app=process.env.REACT_APP_SERVER_IP;

  useEffect(() => {
    axios
      .get(`${app}/allemployee`)
      .then((res) => {
        setemployees(res.data);
        console.log(employees);
      })
      .catch((error) => {
        alert("API not found.");
      });
  }, []);




  let [searchby, setsearchby] = useState(""); //searching criteria
  let [keyword, setkeyword] = useState(""); //user input for searching
  let [searchres, setsearchres] = useState([]);

  let search_employee = () => {
    let url;
    if (searchby === "firstname") {
      url = `${app}/employeebyfirst?firstname=${keyword}`;
    } else if (searchby === "lastname") {
      url = `${app}/employeebylast?lastname=${keyword}`;
    } else if (searchby === "department") {
      url = `${app}/employeebydept?dept=${keyword}`;
    } else if (searchby === "designation") {
      url = `${app}/employeebydesig?desig=${keyword}`;
    } else if (searchby === "empid") {
      url = `${app}/employeebyid?id=${keyword}`;
    } else {
      alert("Enter valid criteria.");
    }

    axios
      .get(url)
      .then((res) => {
        if(res.data.length===0){
          alert(`No matching record found for ${searchby}.We are showing all employee records...`);
          setsearchres([])
          //setreload(!reload)
        }
        else{
          if(Array.isArray(res.data)){
            setsearchres(res.data)
          }
          else{
            setsearchres([res.data])
          }
        }
      })
      .catch((err) => {
        alert("Error");
      });
  };
  return (
    <div>
      <div className="container mt-3 d-flex flex-column flex-md-row gap-2 align-items-start align-items-md-center d-flex flex-column flex-md-row gap-2">
        
        <select
        className="form-select"
          onChange={(e) => {
            setsearchby(e.target.value);
          }}
        >
          <option value="">searchby</option>
          <option value="firstname">firstname</option>
          <option value="lastname">lastname</option>
          <option value="department">department</option>
          <option value="designation">designation</option>
          <option value="empid">empid</option>
        </select>
        {searchby && (
          <div className="d-flex gap-2">
            <input
              type="text"
              placeholder={`Enter ${searchby}`}
              onChange={(e) => {
                setkeyword(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={search_employee}>
              Search
            </button>
          </div>
        )}
      </div>
      <div className="container-fluid">
        <div className="row mt-3 gy-3">
          {(searchres.length>0?searchres:employees).map((emp) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card" style={{ width: "20rem" }} key={emp.empid}>
                <img
                  src={emp.profile}
                  className="card-img-top"
                  style={{ height: "15rem" }}
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">
                    {emp.firstname} {emp.middlename} {emp.lastname} 
                    <br />({emp.gender})
                  </h5>

                  <div className="card-text">
                    <p>
                      Empid: <strong>{emp.empid}</strong>
                    </p>
                    <p>
                      Email: <strong>{emp.email}</strong>
                    </p>
                    <p>
                      Contact: <strong>{emp.contactno}</strong>
                    </p>
                    <p>
                      Department: <strong>{emp.dept}</strong>
                    </p>
                    <p>
                      Designation: <strong>{emp.desig}</strong>
                    </p>
                    <p>
                      DOB: <strong>{emp.dob}</strong>
                    </p>
                    <p>
                      Joining Date: <strong>{emp.joiningdate}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>  
  );
}

