import React from 'react';

import './Employee.scss';

class Employee extends React.Component {
  render() {
    const { employee } = this.props;
    return (
      <div className="card-columns Employee">
      <div className="card" id="employeeCard">
        <h2>{employee.name}</h2>
        <p>{employee.experience} years of experience.</p>
        <p>Dog Caregiver Strength: {employee.strength}</p>
      </div>
      </div>
    );
  }
}

export default Employee;
