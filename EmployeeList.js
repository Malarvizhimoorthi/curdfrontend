import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EmployeeList() {
  const [userForm, setUserForm] = useState([]);

  const deleteEmployee = (_id) => {
    axios
      .delete("https://curdbackend-byc3.onrender.com/employees/delete-employee/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("https://curdbackend-byc3.onrender.com/employees/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Employeeid</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {userForm.map((user, index) =>{
        return(
            <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>@{user.empno}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-employee/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEmployee(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
              );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
