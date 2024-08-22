import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-employee"} className="nav-link">
            Employee management System
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-employee"} className="nav-link">
                  Create Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/employee-list"} className="nav-link">
                Employee List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-employee" element={<CreateEmployee />} />
            <Route exact path="/edit-employee/:id" element={<EditEmployee />} />
            <Route exact path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
