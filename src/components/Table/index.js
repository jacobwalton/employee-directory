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
            {arr.map((element, i) => {
              return (
                <tr key={i}>
                  <td>
                    <a href={"mailto:element.email"}>
                      <img
                        className="profPic"
                        alt={element.name}
                        src={element.picture.small}
                      ></img>
                    </a>
                  </td>
                  <td>
                    <strong>
                      {element.name.first} {element.name.last}
                    </strong>
                  </td>
                  <td>{element.phone}</td>
                  <td>
                    <a href={"mailto:element.email"}>{element.email}</a>
                  </td>
                  <td>{element.dob.date}</td>
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
