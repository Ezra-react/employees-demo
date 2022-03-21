import React, { useState, useEffect, Fragment} from 'react'
import ReactTable from "react-table";  
import axios from 'axios';
import { EmployeeComponent } from './EmployeeComponent';
import { Link } from 'react-router-dom';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        (async () => {
          const result = await axios.get("/employees");
          setEmployees(result.data);
          console.log("the employees are ", result.data);
        })();
      }, []);
      
  return (
    <Fragment>
    <div> 
      <Link style={{margin: "10px", width: "200px", border:"1px solid black"}} to="/">Add</Link>
        <ul>
            {employees.map(employee => (
            <EmployeeComponent key={employee.Id}  employee={employee} />
            ))}
        </ul>
    </div>  
    </Fragment>  
  )
}

export default Employees