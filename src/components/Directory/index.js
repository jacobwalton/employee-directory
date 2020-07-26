import React, { Component } from "react";
import API from "../../API";
import Table from "../Table";
import "./style.css";

class Directory extends Component {
  state = {
    employees: [],
    search: "",
    isSorted: false,
  };

  componentDidMount() {
    this.employeeAPI();
  }

  employeeAPI = () => {
    API.getUsers()
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const search = event.target.value;

    this.setState({ search });
  };

  handleSort = (event) => {
    const allEmployees = [...this.state.employees];
    const sort = event.target.name;
    if (this.state.isSorted === false) {
      allEmployees.sort((a, b) => {
        var name1;
        var name2;
        if (sort !== "name") {
          name1 = +a[sort];
          name2 = +b[sort];
        } else {
          name1 = a[sort].first.toLowerCase();
          name2 = b[sort].first.toLowerCase();
        }
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        } else {
          return 0;
        }
      });

      this.setState({ employees: allEmployees, isSorted: true });
    } else {
      allEmployees.sort((a, b) => {
        let name1;
        let name2;
        if (sort !== "name") {
          name1 = +a[sort];
          name2 = +b[sort];
        } else {
          name1 = a[sort].first.toLowerCase();
          name2 = b[sort].first.toLowerCase();
        }
        if (name1 < name2) {
          return 1;
        }
        if (name1 > name2) {
          return -1;
        } else {
          return 0;
        }
      });

      this.setState({ employees: allEmployees, isSorted: false });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                value={this.state.search}
                onChange={this.handleInputChange}
                placeholder="Search for employee"
              />
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <Table
              employees={this.state.employees}
              search={this.state.search}
              onClick={this.handleSort}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
