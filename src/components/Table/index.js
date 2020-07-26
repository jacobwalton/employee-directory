import React from "react";
import "./style.css";

function listEmployees(props) {
  const arr = props.employees.filter((employee) =>
    employee.name.first.toUpperCase().includes(props.search.toUpperCase())
  );
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <p>
                  <em>Profile Picture</em>
                </p>
              </th>
              <th scope="col">
                <a name="name" onClick={props.onClick}>
                  <p>Name</p>
                </a>
              </th>
              <th scope="col">
                <p name="phone" onClick={props.onClick}>
                  Phone Number
                </p>
              </th>
              <th scope="col">
                <p name="email" onClick={props.onClick}>
                  Email
                </p>
              </th>
              <th scope="col">
                <p name="dob" onClick={props.onClick}>
                  Date of Birth
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {arr.map((employee, i) => {
              return (
                <tr key={i}>
                  <td>
                    <a href={"mailto:employee.email"}>
                      <img
                        className="profPic"
                        alt={employee.name}
                        src={employee.picture.thumbnail}
                      ></img>
                    </a>
                  </td>
                  <td>
                    <strong>
                      {employee.name.first} {employee.name.last}
                    </strong>
                  </td>
                  <td>{employee.phone}</td>
                  <td>
                    <a href={"mailto:employee.email"}>{employee.email}</a>
                  </td>
                  <td>{employee.dob.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default listEmployees;
