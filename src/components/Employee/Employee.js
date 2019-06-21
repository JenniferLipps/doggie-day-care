import React from 'react';

import './Employee.scss';

class Employee extends React.Component {
  render() {
    const { employee } = this.props;
    return (
      <div className="Employee col-3">
      <div className="card">
        <h5>{employee.name}</h5>
        <p>{employee.experience} years of experience.</p>
        <p>Dog Caregiver Strength: {employee.strength}</p>
      </div>
      </div>
    );
  }
}

export default Employee;
