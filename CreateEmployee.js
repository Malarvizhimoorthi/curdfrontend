import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateEmployee() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    empno: "",
  });

  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://curdbackend-byc3.onrender.com/employees/create-employee", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          empno: "",
        });
      });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Employeeid:</label>
            <input
              type="text"
              className="form-control"
              name="empno"
              id="empno"
              value={userForm.empno}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
