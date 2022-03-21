import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EmployeeComponent = (props) => {
  let navigate = useNavigate();
  const onDelete = async (employee) => {
    console.log("delete clicked.", employee);
  const res = await axios.delete(`/employee/${employee._id}`);
  window.location.reload();
  }
  const onUpdate = async (id) => {
        let path = "/";
        navigate(path, {state:{id, edit: true}});
  }
  return (
    <div style={{border:"1px solid gray"}}>
        <p>Employee First Name : <b>{props.employee.first_name}</b></p>
        <p>Employee Last Name : <b>{props.employee.last_name}</b></p>
        <p>Employee Email : <b>{props.employee.email}</b></p>
        <p>Employee Phone number : <b>{props.employee.phone_number}</b></p>
        <button style={{margin: "10px", width:"80px"}} onClick={() => onUpdate(props.employee._id)}>Edit</button>
        <button style={{margin: "10px", width:"80px"}} onClick={() => onDelete(props.employee)}>Delete</button>
    </div>
  )
}