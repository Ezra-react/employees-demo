import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
const AddEmployee = () => {
    const location = useLocation();
    const [employeeForm, setEmployeeForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: ""
    })
    useEffect(() => {

        (async () => {
            if (location.state.edit){
                      const result = await axios.get(`/employees/${location.state.id}`);
          console.log("the first name is ", result.data[0].first_name);
          setEmployeeForm(
              {...employeeForm, 
                first_name: result.data[0].first_name,
                last_name: result.data[0].last_name,
                email: result.data[0].email,
                phone_number: result.data[0].phone_number
            });
          console.log("the result is ", result.data);
            }

        }  
        )();
      }, []);
      

      
    let navigate = useNavigate(); 

    const onChange = (e) => {
        setEmployeeForm({...employeeForm, [e.target.name]: e.target.value});
    }

    const onSubmit = async e =>{
        e.preventDefault();

        if (first_name === "" || last_name === "" || email === "" || phone_number === ""){
            alert("Fill all the fields!");
        } else {
        
        const newEmployee = {
            first_name, last_name, email, phone_number
        };
        let res;
        if (location.state.edit){
            res = await axios.put(`/employee/${location.state.id}`, newEmployee);
        }else{
            res = await axios.post('/employee', newEmployee);
        }
            alert("Added successfully!");
        let path = `/employees`; 
        navigate(path);

    }
}

    const {first_name, last_name, email, phone_number} = employeeForm;
  return (
      <Fragment>
     <h3 className=" text-secondary">Sign Up</h3>
     <p className="lead"><i className="fas fa-user"></i> Add an employee</p>
     <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
        <input type="text" placeholder='first name' name='first_name' value={first_name} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
        <input type="text" placeholder='last name' name='last_name' value={last_name} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
        <input type="text" placeholder='email' name='email' value={email} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
        <input type="text" placeholder='phone number' name='phone_number' value={phone_number} onChange={e => onChange(e)}/>
        </div>
        <input type="submit" className="btn btn-primary" value="Add Employee" />
    </form>
    </Fragment>
  )
}

export default AddEmployee