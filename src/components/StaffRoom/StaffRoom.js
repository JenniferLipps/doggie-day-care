import React from 'react';

import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';

import employeeData from '../../helpers/data/employeesData';

import Employee from '../Employee/Employee';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  state = {
    employees: [],
  }

  componentDidMount() {
    employeeData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('no employees', err));
  }

  render() {
    const buildEmployees = this.state.employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="StaffRoom d-flex flex-wrap">
        { buildEmployees }
      </div>
    );
  }
}

export default StaffRoom;
