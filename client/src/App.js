import './App.css';
import { Fragment } from 'react';
import AddEmployee from './employees/addEmployee';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import Employees from './employees/Employees';

function App() {
  return (
    <div className="App">
          <Router>
            <section className="container">
            <h1 className="large text-primary">Employee Management System</h1>
            <Routes>
            <Route exact path="/" element={<AddEmployee/>} />  
            <Route exact path="/employees" element={<Employees/>} />  
            </Routes>
            </section>
            </Router>
    </div>
  );
}

export default App;
